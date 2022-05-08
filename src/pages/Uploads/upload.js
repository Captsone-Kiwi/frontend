import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import SideMenu from "../../components/SideMenu/sideMenu";
import evaluationAPI from "../../api/evaluationAPI";
import AuthContext from "../../store";

function Uploads(props) {
  const navigator = useNavigate();
  const [state, actions] = useContext(AuthContext);
  const [side, setSide] = useState("upload");
  const [tag, setTag] = useState("resume");

  const btnClicked = (e) => {
    e.preventDefault();
    if (e.target.tagName !== "DIV") {
      let target = e.target;
      while (e.target.tagName !== "BUTTON") {
        target = target.parentNode;
      }
      setTag(target.value);
    }
  };

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
    // getEvaluationInfo();
    getEvaluationId();
  }, [state]);

  //평가항목 아이디 리스트 가져오기
  const getEvaluationId = async () => {
    await evaluationAPI
      .getEvaluationIdList()
      .then((res) => {
        // setEvaluationInfo(res.data.data);
        console.log("getEvaluationId result", res.data);
      })
      .catch((error) => console.log("getEvaluationId error", error));
  };

  //평가항목 정보 가져오기
  // const getEvaluationInfo = async () => {
  //   await evaluationAPI
  //     .getEvaluation()
  //     .then((res) => {
  //       setEvaluationInfo(res.data.data);
  //       console.log("getEvaluationInfo result", res.data);
  //     })
  //     .catch((error) => console.log("getEvaluationInfo error", error));
  // };

  return (
    <style.mainContainer>
      <SideMenu side={side} setSide={setSide} />
      <style.uploadContainer>
        <style.detailContainer>
          <style.Span>업로드</style.Span>
          <style.selectionDiv onClick={btnClicked}>
            <style.selectBtn value="resume" current={tag === "resume"}>
              이력서
            </style.selectBtn>
            <style.selectBtn value="evaluation" current={tag === "evaluation"}>
              평가항목
            </style.selectBtn>
            <style.selectBtn value="exam" current={tag === "exam"}>
              시험지
            </style.selectBtn>
          </style.selectionDiv>
          {tag === "resume" ? (
            <>
              <style.uploadBtn onClick={() => navigator("/resume")}>
                이력서 업로드
              </style.uploadBtn>
              <style.infoDiv>
                <style.titleSpan style={{ marginLeft: "10px" }}>
                  제목
                </style.titleSpan>
              </style.infoDiv>
            </>
          ) : tag === "evaluation" ? (
            <>
              <style.uploadBtn onClick={() => navigator("/evaluation")}>
                평가항목 추가
              </style.uploadBtn>
              <style.infoDiv>
                <style.titleSpan style={{ marginLeft: "10px" }}>
                  제목
                </style.titleSpan>
              </style.infoDiv>
              <style.evaluationDetail>
                <style.evaluationTitle></style.evaluationTitle>
              </style.evaluationDetail>
            </>
          ) : tag === "exam" ? (
            <style.uploadBtn onClick={() => navigator("/exam")}>
              시험지 추가
            </style.uploadBtn>
          ) : null}
        </style.detailContainer>
      </style.uploadContainer>
    </style.mainContainer>
  );
}

export default Uploads;
