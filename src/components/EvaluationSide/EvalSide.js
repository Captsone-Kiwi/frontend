import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import AuthContext from "../../store";
import queryString from "query-string";
import * as style from "./styles";
// API 불러오기
import evaluationAPI from "../../api/evaluationAPI";
import interviewAPI from "../../api/interviewAPI";
// component 불러오기
import EvalPerson from "./EvalPerson";
import EvalQuestions from "./EvalQuestions";

function EvalSide() {
  const [state, actions] = useContext(AuthContext);
  const location = useLocation().search;
  const { username, room } = queryString.parse(location);
  const [isVisit, setIsVisit] = useState(true);

  useEffect(() => {
    // getParticipant();
    getEvaluationInfo();
  }, []);

  // EvalSide를 실행 시켰을때 세션스토리지 정보 가져오기
  // useEffect(() => {
  //   const stored_data = localStorage.getItem("EvalResult");
  //   if (stored_data == null) {
  //     console.log("트루");
  //     setIsVisit(true);
  //   } else {
  //     console.log("아니야!!");
  //     setIsVisit(false);
  //   }
  // }, []);

  //평가항목 정보 가져오기
  const [questions, setQuestions] = useState([]);
  console.log("questions", questions);
  const Questions = questions.evaluationList;
  console.log("Questions", Questions);
  const getEvaluationInfo = async () => {
    await evaluationAPI
      .getEvaluation(2)
      .then((res) => {
        setQuestions(res.data.data);
        console.log("getEvaluationInfo result", res.data.data);
      })
      .catch((error) => console.log("getEvaluationInfo error", error));
  };

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
  // console.log("============================");
  // console.log("이거???", interviewee);

  // const [data, setData] = useState(
  //   interviewee.map((Label, _) => ({
  //     label: Label,
  //     evaluation: questions.evaluationList,
  //   }))
  // );
  // console.log("data!!!!!!!!!!!!!!!!!!!", data);
  //세션 스토리지 정보 가져오기
  // useEffect(() => {
  //   loadData();
  // }, [isVisit]);
  // const loadData = () => {
  //   let stored_data = localStorage.getItem("EvalResult");
  //   if (isVisit === false) {
  //     stored_data = JSON.parse(stored_data);
  //     console.log("이거~!~!", stored_data);
  //     setData(stored_data);
  //   } else {
  //     return data;
  //   }
  // };

  return (
    <style.EvalSideBack>
      <EvalPerson
        interviewee={interviewee}
        selectedName={selectedName}
        setSelectedNames={setSelectedNames}
      />
      {selectedName === "면접자 선택" ? (
        <style.infoDiv>
          <style.textDiv>
            <style.infoText>우측 상단에서</style.infoText>
            <style.infoText>
              면접자를 선택해 평가를 진행해주세요.
            </style.infoText>
          </style.textDiv>
        </style.infoDiv>
      ) : (
        <EvalQuestions
          // data={data}
          // setData={setData}
          selectedName={selectedName}
          questions={questions}
          interviewee={interviewee}
          // isVisit={isVisit}
        />
      )}
    </style.EvalSideBack>
  );
}

export default EvalSide;
