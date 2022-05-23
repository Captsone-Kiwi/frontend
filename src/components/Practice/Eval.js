import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AbsoluteCenter } from "@chakra-ui/layout";
import AuthContext from "../../store";
import queryString from "query-string";
// API 불러오기
import evaluationAPI from "../../api/evaluationAPI";
import interviewAPI from "../../api/interviewAPI";
// component 불러오기
import EvalList from "./EvalList";
import EvalQuestions from "./EvalQuestions";

function Eval() {
  const [state, actions] = useContext(AuthContext);
  const location = useLocation().search;
  const { username, room } = queryString.parse(location);

  const [questions, setQuestions] = useState({
    name: "",
    evaluationList: [
      {
        category: "",
        title: null,
        type: 0,
        questions: [
          {
            title: "",
            type: 1,
            data: 0,
          },
        ],
      },
    ],
  });
  //   console.log("questions", questions);

  //평가항목 아이디 리스트 가져오기
  //   useEffect(() => {
  //     getEvaluationId();
  //   }, [state]);
  //   const [evalId, setEvalId] = useState([]);
  //   const getEvaluationId = async () => {
  //     await evaluationAPI
  //       .getEvaluationIdList()
  //       .then((res) => {
  //         setEvalId(res.data.data);
  //         console.log("getEvaluationId result", res.data);
  //       })
  //       .catch((error) => console.log("getEvaluationId error", error));
  //   };

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

  useEffect(() => {
    getParticipant();
  }, [state]);
  // 참여자 정보 가져오기
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

  const Questions = questions.evaluationList;
  console.log("Questions", Questions);
  const names = ["백소현", "김찬미", "양진우"];

  const [data, setData] = useState(
    names.map((Label, _) => ({
      label: Label,
      evaluation: questions.evaluationList,
    }))
  );
  console.log("data", data);

  const onToggle = (e, index, idx, selectedName) => {
    const array = JSON.parse(JSON.stringify(data));

    const name = array.findIndex((emp) => emp.label === selectedName);
    const temp = array.map((d) => (d.label === selectedName ? { ...d } : null));
    temp[name]["evaluation"][index]["questions"][idx]["data"] = e.target.value;

    const copyArray = data.map((d) =>
      d.label === selectedName ? temp[name] : d
    );
    setData(copyArray);
  };

  return (
    <>
      <EvalList quests={data} onToggle={onToggle} />
    </>
  );
}

export default Eval;
