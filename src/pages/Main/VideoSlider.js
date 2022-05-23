import React, { Component, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledVideo } from "./Video.js";
import styled from "styled-components";
import { useRadio } from "@chakra-ui/radio";
import interviewAPI from "../../api/interviewAPI";
import queryString from "query-string";

export const Video = styled.video`
  width: 180px;
  height: 120px;
  box-sizing: border-box;
  border-radius: 12px;
  object-fit: cover;
  background-color: black;
  z-index: 1;
`;

const Name = styled.div`
  position: absolute;
  bottom: 4px;
  padding: 4px;
  display: flex;
  z-index: 4;
  color: white;
  margin-left: 2px;
  background-color: #1c7b47;
  color: white;
  border-radius: 12px;
  font-size: 14px;
  width: fit-content;
`;

const NameBlock = ({ id }) => (
  <>
    <Name>{id}</Name>
  </>
);

function User({ user }) {
  // console.log(user)
  return (
    <div>
      <NameBlock id={user} style={{ position: "absolute" }} />
      <Video poster="/images/common/poster.png" autoPlay />
    </div>
  );
}

// export default class VideoSlider extends Component {
function VideoSlider() {
  const [state, setState] = useState({
    display: true,
    width: 600,
  });

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const location = useLocation().search;
  const { username, room } = queryString.parse(location);

  // 참여자 정보 가져오기
  useEffect(() => {
    getParticipant();
  }, [room]);
  const [participant, setParticipant] = useState([]);
  const getParticipant = async () => {
    await interviewAPI
      .participant(room)
      .then((result) => {
        setParticipant(result.data.data);
        console.log("participant result", result.data);
      })
      .catch((err) => console.log("participant error", err));
  };

  const users = participant
    .filter((e) => e.name !== username)
    .map((name) => name.name);

  console.log("users", users);

  return (
    <div>
      <button
        className="button"
        onClick={() =>
          setState({
            width: state.width + 100,
          })
        }
      >
        {" "}
        increase{" "}
      </button>
      <button
        className="button"
        onClick={() =>
          setState({
            width: state.width - 100,
          })
        }
      >
        {" "}
        decrease{" "}
      </button>
      <button
        className="button"
        onClick={() =>
          setState({
            display: !state.display,
          })
        }
      >
        {" "}
        toggle{" "}
      </button>
      <div
        style={{
          position: "absolute",
          transform: "translate(-50%, 0%)",
          left: "50%",
          top: "2%",
          width: state.width + "px",
          display: state.display ? "block" : "none",
          zIndex: 3,
        }}
      >
        <Slider {...settings}>
          {users.map((user) => (
            <User user={user} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default VideoSlider;
