import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import * as style from "./styles";
import EvalPerson from "../EvaluationSide/EvalPerson";
import interviewAPI from "../../api/interviewAPI";
import AuthContext from "../../store";
import queryString from "query-string";
import resumeAPI from "../../api/resumeAPI";

function Sample(props) {
  const [state, actions] = useContext(AuthContext);
  const location = useLocation().search;
  const { username, room } = queryString.parse(location);
  // 참여자 정보 가져오기
  useEffect(() => {
    getParticipant();
    // getEvaluationInfo();
  }, [state]);
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
  // 참여자 중 면접자인 사람만 배열로 뽑아냄
  const interviewee = participant
    .filter((e) => e.member_type === 2)
    .map((name) => name.name);
  // 선택된 면접자
  const [selectedName, setSelectedNames] = useState("면접자 선택");

  // 이력서 가져오기
  // const [filename, setFileName] = useState([]);
  // useEffect(() => {
  //   getResume();
  // }, [state]);
  // const getResume = async () => {
  //   await resumeAPI
  //     .getCreatedResumeList()
  //     .then((res) => {
  //       setFileName(res.data.data);
  //       // console.log("getResume result", res.data);
  //     })
  //     .catch((error) => console.log("getResume error", error));
  // };
  // const selectFile = filename.filter(
  //   (e) => filename.split(".")[0] === interviewee
  // );
  // console.log("selectFile", selectFile);

  // URL 설정부분
  const [embedURL, setEmbedURL] = useState(
    `http://localhost:8000/getResume?name=${selectedName}`
  );
  // const embedURL = decodeURI(
  //   `http://35.174.145.15:8000/getResume?name=${selectedName}`
  // );
  // const [embedURL, setEmbedURL] = useState(
  //   `http://35.174.145.15:8000/getResume?name=${selectedName}`
  // );
  console.log("URL", embedURL);

  return (
    <style.resumeDiv>
      <EvalPerson
        interviewee={interviewee}
        selectedName={selectedName}
        setSelectedNames={setSelectedNames}
        setEmbedURL={setEmbedURL}
      />
      {console.log("selectedName", selectedName)}
      {selectedName === "면접자 선택" ? (
        <style.infoDiv>
          <style.textDiv>
            <style.infoText>우측 상단에서</style.infoText>
            <style.infoText>
              면접자를 선택해 이력서를 확인하세요.
            </style.infoText>
          </style.textDiv>
        </style.infoDiv>
      ) : (
        <iframe
          src={embedURL}
          // style={{ zoom: "100%", width: "340px", height: "100%" }}
          width="340px"
          height="100%"
        ></iframe>
      )}
    </style.resumeDiv>
  );
}

export default Sample;
