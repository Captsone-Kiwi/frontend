import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import SideMenu from "../../components/SideMenu/sideMenu";
import evaluationAPI from "../../api/evaluationAPI";
import AuthContext from "../../store";

function Resume(props) {
  const navigator = useNavigate();
  const [state, actions] = useContext(AuthContext);
  const [side, setSide] = useState("resume");

  useEffect(() => {
    getEvaluationId();
  }, [state]);

  const [evalId, setEvalId] = useState([]);
  //평가항목 아이디 리스트 가져오기
  const getEvaluationId = async () => {
    await evaluationAPI
      .getEvaluationIdList()
      .then((res) => {
        setEvalId(res.data.data);
        console.log("getEvaluationId result", res.data);
      })
      .catch((error) => console.log("getEvaluationId error", error));
  };

  return (
    <style.mainContainer>
      <SideMenu side={side} setSide={setSide} />
      <style.uploadContainer>
        <style.detailContainer>
          <style.Span>이력서</style.Span>
          <style.selectionDiv>
            <style.uploadBtn onClick={() => navigator("/upload_resume")}>
              이력서 업로드
            </style.uploadBtn>
          </style.selectionDiv>
          <style.infoDiv>
            <style.titleSpan style={{ marginLeft: "10px" }}>
              제목
            </style.titleSpan>
          </style.infoDiv>
        </style.detailContainer>
      </style.uploadContainer>
    </style.mainContainer>
  );
}

export default Resume;
