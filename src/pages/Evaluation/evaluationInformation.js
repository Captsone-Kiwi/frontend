import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import evaluationAPI from "../../api/evaluationAPI";
import AuthContext from "../../store";

function EvaluationInformation(props) {
  const navigator = useNavigate();
  const [state, actions] = useContext(AuthContext);

  const [evaluationInfo, setEvaluationInfo] = useState({
    name: "",
    evaluationList: [
      {
        category: "",
        title: "",
        type: 0,
      },
    ],
  });

  useEffect(() => {
    getEvaluationInfo();
  }, [state]);

  //평가항목 정보 가져오기
  const getEvaluationInfo = async () => {
    await evaluationAPI
      .getEvaluation(props.evalId)
      .then((res) => {
        setEvaluationInfo(res.data.data);
        console.log("getEvaluationInfo result", res.data);
      })
      .catch((error) => console.log("getEvaluationInfo error", error));
  };

  // 평가항목 삭제하기
  const deleteEvaluation = async () => {
    await evaluationAPI
      .deleteEvaluation(props.evalId)
      .then((res) => {
        alert("해당 평가항목을 삭제하시겠습니까?");
        window.location.reload();
        console.log("deleteEvaluation result", res.data);
      })
      .catch((error) => console.log("deleteEvaluation error", error));
  };

  return (
    <style.evaluationDetail>
      <style.leftDiv>
        <style.fileImg src="/images/common/fileIcon.png" />
        <style.evaluationTitle>{evaluationInfo.name}</style.evaluationTitle>
      </style.leftDiv>
      <style.rightDiv>
        <style.greenButton>편집</style.greenButton>
        <style.Buttons onClick={deleteEvaluation}>삭제</style.Buttons>
      </style.rightDiv>
    </style.evaluationDetail>
  );
}

export default EvaluationInformation;
