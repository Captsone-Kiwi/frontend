import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../../components/SideMenu/sideMenu";
import CategorySelect from "../../components/SelectForm/categorySelect";
import TypeSelect from "../../components/SelectForm/typeSelect";
import * as style from "./styles";
import { StepLabel } from "@material-ui/core";

function UploadEvaluation() {
  const navigator = useNavigate();
  const [side, setSide] = useState("upload");

  //평가항목 정보
  const [evaluationInfo, setEvaluationInfo] = useState({
    interviewName: "",
    category: "",
  });

  const [currQue, setCurrQue] = useState(0);
  const evaluationList = (e, index) => {
    setEvaluationInfo({
      ...evaluationInfo,
      [e.target.name]: [
        ...evaluationInfo[e.target.name].slice(0, index),
        e.target.value,
        ...evaluationInfo[e.target.name].slice(index + 1),
      ],
    });
    setCurrQue(index);
  };
  const removeQuestion = (e, index) => {
    const name = e.target.getAttribute("name");
    if (evaluationInfo.interviewee.length > 1) {
      setCurrQue(currQue - 1);
      setEvaluationInfo({
        ...evaluationInfo,
        [name]: [
          ...evaluationInfo[name].filter((value, idx) => {
            return idx !== index;
          }),
        ],
      });
    } else {
      alert("한 개 이상의 질문 항목을 입력해주세요.");
    }
  };

  //   useEffect(() => {
  //     const input = document.querySelector(`.question-input${index}`);
  //     input.value = evaluationInfo.interviewee[index];
  //     // const currInput = document.querySelector(`.viewee-input${currViewee}`);
  //     //currInput.focus();
  //   }, []);

  return (
    <style.mainContainer>
      <SideMenu side={side} setSide={setSide} />
      <style.uploadContainer>
        <style.Container>
          <style.prevBtn onClick={() => navigator("/upload")}>
            <style.prevImg src="/images/common/prevBtn.png" />
            뒤로 돌아가기
          </style.prevBtn>
          <style.Span>평가항목 등록</style.Span>
          <style.topDiv>
            <style.EvalTitle placeholder="평가항목 제목을 입력하세요." />
            <CategorySelect />
          </style.topDiv>
          <style.middleDiv>
            <style.smallDiv1>
              <style.Text>질문 항목</style.Text>
            </style.smallDiv1>
            <style.smallDiv2>
              <style.Text>항목 유형</style.Text>
            </style.smallDiv2>
          </style.middleDiv>
          <style.EvalDiv>
            <style.QuestionInput />
            <style.removeBtn>
              <style.removeImg src="/images/common/removeBtn.png" />
            </style.removeBtn>
            <TypeSelect />
            {/* {evaluationInfo.map((e, index) => (
              <>
                <style.QuestionInput
                  name="question"
                  className={"question-input" + index}
                  onChange={(e) => {
                    evaluationList(e, index);
                  }}
                  InputProps={{ disableUnderline: true }}
                />
                <style.removeBtn
                  name="question"
                  onClick={(e) => {
                    removeQuestion(e, index);
                  }}
                >
                  <style.removeImg src="/images/common/removeBtn.png" />
                </style.removeBtn>
                <TypeSelect />
              </>
            ))} */}
          </style.EvalDiv>
        </style.Container>
      </style.uploadContainer>
    </style.mainContainer>
  );
}
export default UploadEvaluation;
