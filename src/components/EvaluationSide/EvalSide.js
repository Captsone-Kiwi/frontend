import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AbsoluteCenter } from "@chakra-ui/layout";
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

  // const [questions, setQuestions] = useState({
  //   name: "",
  //   evaluationList: [
  //     {
  //       category: "",
  //       title: null,
  //       type: 0,
  //       questions: [
  //         {
  //           title: "",
  //           type: 1,
  //           data: 0,
  //         },
  //       ],
  //     },
  //   ],
  // });

  const [questions, setQuestions] = useState([]);

  //평가항목 정보 가져오기
  useEffect(() => {
    getEvaluationInfo();
  }, [state]);
  const getEvaluationInfo = async () => {
    await evaluationAPI
      .getEvaluation(10)
      .then((res) => {
        setQuestions(res.data.data);
        // console.log("getEvaluationInfo result", res.data);
      })
      .catch((error) => console.log("getEvaluationInfo error", error));
  };

  // 참여자 정보 가져오기
  useEffect(() => {
    getParticipant();
  }, [state]);
  const [participant, setParticipant] = useState([]);
  const getParticipant = async () => {
    await interviewAPI
      .participant(room)
      .then((result) => {
        setParticipant(result.data.data);
        // console.log("participant result", result.data);
      })
      .catch((err) => console.log("participant error", err));
  };
  // 참여자 중 면접자인 사람만 배열로 뽑아냄
  const interviewee = participant
    .filter((e) => e.member_type === 2)
    .map((name) => name.name);
  // 선택된 면접자
  const [selectedName, setSelectedNames] = useState("면접자 선택");

  return (
    <style.EvalSide>
      <EvalPerson
        interviewee={interviewee}
        selectedName={selectedName}
        setSelectedNames={setSelectedNames}
      />
      {selectedName === "면접자 선택" ? (
        <style.infoDiv>
          <style.infoText>면접자를 선택해 평가를 진행해주세요.</style.infoText>
        </style.infoDiv>
      ) : (
        <EvalQuestions
          questions={questions}
          interviewee={interviewee}
          selectedName={selectedName}
        />
      )}
    </style.EvalSide>
  );
}

export default EvalSide;
