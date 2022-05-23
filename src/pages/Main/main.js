import React from "react";
import Bottom from "../../components/Bottom/Bottom.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import Video from "./Video.js";
import VideoSlider from "./VideoSlider.js";
import GdevelopPage from "../../pages/GDevelop/GdevelopPage.js";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 180px;
  height: 120px;
  left: 75%;
  border-radius: 20px;
  z-index: 1;
  border: 7px solid #ffffff;
`;
const Name = styled.div`
  position: absolute;
  display: flex;
  z-index: 1;
  background-color: black;
  color: white;
  bottom: 0px;
  left: 0px;
  font-size: 12px;
  padding: 2px;
  border-radius: 20px;
`;

const NameBlock = ({ title }) => (
  <>
    <Name>{title}</Name>
  </>
);

var mediasoup = require("mediasoup-client");
var socket_client = require("socket.io-client");

const server_url = `http://localhost:3000`;
const socket = socket_client(server_url);

let device;
let producer;
let data;
let producer_list = {};

const socketPromise = function (socket) {
  return function request(type, data = {}) {
    return new Promise((resolve) => {
      socket.emit(type, data, resolve);
    });
  };
};

let rtp_capabilities;
let transport_data;
let producer_transport;

// consumer_dict[consumer_transport.id] = consumer.id
let consumer_dict = {};

let local_stream;

async function broadcastProdcuer() {
  socket.emit("broadcastProducer");
}

// 1. 서버 라우터의 rtp capabilites를 받아와서 아래 내용을 처리.
let flag = 0;
async function getRtpCapabilities() {
  console.log("Requesting Rtp Capabilities");
  flag++;
  if (flag != 1) return 0;
  const data = await socket.request("getRtpCapabilities");
  rtp_capabilities = data.rtpCapabilities;
  console.log("Got Rtp Capabiltites : ", rtp_capabilities);
  return 1;
}

// 2. 새로운 Device를 생성
// device.load()를 통해 라우터의 정보를 알아낸다.
async function createDevice() {
  console.log("Creating Device");
  try {
    device = new mediasoup.Device();
    await device.load({
      routerRtpCapabilities: rtp_capabilities,
    });

    console.log("RTP Capabilities Device : ", device.rtpCapabilities);
  } catch (error) {
    console.log(error);
    if (error.name === "UnsupportedError")
      console.warn("browser not supported");
  }
}

// 3. Producer Transport가 없다면, 서버측에 Producer Transport를
// 생성할것을 요청, 콜백을 통해 producer transport의 params를 가져온다
async function getTransportData() {
  transport_data = await socket.request("createProducerTransport");
  console.log("Produce Transport data : ", transport_data);
}

// 4. Transport 생성
// 서버에서 받아온 producer transport의 params를 이용하여
// 미디어를 보낼 transport를 생성한다.
async function createProduceTransport() {
  console.log("Creating Produce Transport");

  producer_transport = device.createSendTransport(transport_data);
  producer_transport.on(
    "connect",
    async ({ dtlsParameters }, callback, errback) => {
      console.log("Producer Transport Connecting...");
      socket
        .request("connectProducerTransport", { dtlsParameters })
        .then(callback)
        .catch(errback);

      console.log("Producer Transport Connected");
    }
  );

  producer_transport.on(
    "produce",
    async ({ kind, rtpParameters }, callback, errback) => {
      console.log("Producer Transport Producing...");
      try {
        const { id } = await socket.request("produce", {
          transportId: producer_transport.id,
          kind,
          rtpParameters,
        });
        callback({ id });
      } catch (err) {
        errback(err);
      }
      console.log("Producer Transport Produced...");
    }
  );

  producer_transport.on("connectionstatechange", async (state) => {
    console.log("Produce Transport State Changed to : ", state);
    if (state == "connected") {
      let local_video = document.getElementById("localVideo");
      local_video.srcObject = local_stream;
    }
  });

  console.log("Produce Transport Created");
}

// 5. LocalStream 가져오기
// 해당 내용은 webRTC와 동일함.
async function getLocalStream() {
  local_stream = await getUserMedia();
  // video track
  const track = local_stream.getVideoTracks()[0];
  const params = { track };

  console.log("Producing tracks");
  console.log("params", params);
  producer = await producer_transport.produce(params);
  console.log("Track Produced");
}

async function getUserMedia() {
  console.log("Getting user media");
  const stream = navigator.mediaDevices.getUserMedia({ video: true });
  return stream;
}

async function consume(consumer_transport, producer_id) {
  const { rtpCapabilities } = device;
  const data = await socket.request("consume", {
    id: consumer_transport.id,
    rtpCapabilities,
    producerId: producer_id,
  });

  console.log("=============== CONSUME ===============");
  producer_list[producer_id] = true;
  console.log(producer_id, consumer_transport);
  console.log("consume data : ", data);

  const { producerId, id, kind, rtpParameters } = data;

  let codecOptions = {};
  const consumer = await consumer_transport.consume({
    id,
    producerId,
    kind,
    rtpParameters,
    codecOptions,
  });
  const stream = new MediaStream();
  stream.addTrack(consumer.track);

  consumer_dict[consumer_transport.id] = consumer.id;
  // consumer_list.push([consumer_transport.id, consumer.id])
  return stream;
}

// 7. get all consumers.
async function getRemoteStreams() {
  const data_list = await socket.request("createConsumerTransportList", {
    forceTcp: false,
  });
  if (data_list.error) {
    console.error(data.error);
    return;
  }
  console.log("CONSUMER TRANSPORT LIST");
  console.log(data_list);
  console.log("REMOTE STREAM PRODUCERS AND CONSUMER TRANSPORTS");
  for (let i = 0; i < data_list.length; i++) {
    console.log(data_list[i]);
    const data = data_list[i][0];
    const producer_id = data_list[i][1];

    console.log("Data : ", data);
    console.log("Producer id : ", producer_id);
    const consumer_transport = await device.createRecvTransport(data);

    consumer_transport.on(
      "connect",
      ({ dtlsParameters }, callback, errback) => {
        socket
          .request("connectConsumerTransportList", {
            transportId: consumer_transport.id,
            dtlsParameters,
          })
          .then(callback)
          .catch(errback);
      }
    );

    consumer_transport.on("connectionstatechange", async (state) => {
      console.log("Consumer Transport Changed to State : ", state);
      if (state == "connected") {
        let length = document
          .querySelector(".slick-track")
          .querySelectorAll(".slick-active").length;

        for (var i = 0; i < length; i++) {
          // 배열 arr의 모든 요소의 인덱스(index)를 출력함.
          let remote_video = document
            .querySelector(".slick-track")
            .querySelectorAll(".slick-active")
            [i].querySelector("video");
          if (remote_video.srcObject == null) {
            remote_video.srcObject = await remote_stream;
            break;
          }
        }

        // find consumer id from consumer transport
        const consumer_id = consumer_dict[consumer_transport.id];
        await socket.request("resume", { consumer_id });
      }
    });
    let remote_stream = await consume(consumer_transport, producer_id);
  }
}

function Main() {
  // 페이지를 나갈때 경고 알림과 localStorage 지우기
  // 로컬스토리지를 지우지 않게 하기 위한 코드 나중에 구현 완료되면 주석 풀 예정! 지우지 마세용
  // window.onbeforeunload = function (event) {
  //   event.preventDefault();
  //   localStorage.removeItem("EvalResult");
  //   return "이 페이지에서 벗어나시겠습니까? \n 평가항목 변경사항이 저장되지 않을 수 있습니다.";
  // };

  const location = useLocation().search;
  const { username, room } = queryString.parse(location);
  // const server_url = `http://54.208.151.152:3000`;
  socket.request = socketPromise(socket);

  socket.on("disconnectedConsumer", async ({ producerId }) => {
    console.log("disconnected : ", producerId);
  });

  socket.on("connection-success", async ({ socketId }) => {
    console.log(socketId);

    // 1. 서버 라우터의 rtp capabilites를 받아와서 아래 내용을 처리.
    let f = await getRtpCapabilities();
    console.log(f);
    if (f == 0) return;

    // 2. 새로운 Device를 생성
    // device.load()를 통해 라우터의 정보를 알아낸다.
    await createDevice();

    // 3. Server의 Producer를 토대로 새로운 consumer들을 생성.
    await getRemoteStreams();

    // 4. Producer Transport가 없다면, 서버측에 Producer Transport를
    // 생성할것을 요청, 콜백을 통해 producer transport의 params를 가져온다
    await getTransportData();

    // 5. Transport 생성
    // 서버에서 받아온 producer transport의 params를 이용하여
    // 미디어를 보낼 transport를 생성한다.
    await createProduceTransport();

    // 6. LocalStream 가져오기
    // 해당 내용은 webRTC와 동일함.
    await getLocalStream();

    // 7. 다른 소켓들한테 consuming 요청 요구
    await broadcastProdcuer();
  });

  socket.on("createConsumer", async (res) => {
    const producer_id = res.producerId;
    const data = await socket.request("createConsumerTransport", {
      forceTcp: false,
    });
    if (data.error) {
      console.error(data.error);
      return;
    }

    const consumer_transport = await device.createRecvTransport(data);
    console.log("Consumer Transport ID : ", consumer_transport.id);

    consumer_transport.on(
      "connect",
      ({ dtlsParameters }, callback, errback) => {
        socket
          .request("connectConsumerTransportList", {
            transportId: consumer_transport.id,
            dtlsParameters,
          })
          .then(callback)
          .catch(errback);
      }
    );

    consumer_transport.on("connectionstatechange", async (state) => {
      console.log("Consumer Transport Changed to State : ", state);
      if (state == "connected") {
        let length = document
          .querySelector(".slick-track")
          .querySelectorAll(".slick-active").length;

        for (var i = 0; i < length; i++) {
          // 배열 arr의 모든 요소의 인덱스(index)를 출력함.
          let remote_video = document
            .querySelector(".slick-track")
            .querySelectorAll(".slick-active")
            [i].querySelector("video");
          if (remote_video.srcObject == null) {
            remote_video.srcObject = await remote_stream;
            break;
          }
        }
        // find consumer id from consumer transport
        const consumer_id = consumer_dict[consumer_transport.id];
        await socket.request("resume", { consumer_id });
      }
    });
    if (producer_list[producer_id] == true) return;
    producer_list[producer_id] = true;
    let remote_stream = await consume(consumer_transport, producer_id);
    console.log("REMOTE STREAM");
    console.log(remote_stream);
  });

  return (
    <>
      <Sidebar style={{ position: "absolute", zIndex: 5 }} />
      <Bottom style={{ position: "absolute" }} />
      <VideoSlider />
      <Container>
        <Video />
        <NameBlock title={username} />
      </Container>
    </>
  );
}

export default Main;
