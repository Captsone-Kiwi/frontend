import React, { useState, useEffect } from "react";
import TypeSelect from "../../components/SelectForm/typeSelect";
import * as style from "./questionStyles";

function QuestionInput(props) {
  const questionList = (e, index) => {
    const setTitle = { ...props.evaluationInfo };
    setTitle["evaluationList"]["questions"][props.index][e.target.name] =
      e.target.value;
    props.setEvaluationInfo(setTitle);
    props.setCurrQues(index);
  };
  const removeQuestion = (e, index) => {
    const setTitle = { ...props.evaluationInfo };
    // const setRemove = {...props.evaluationInfo };
    if (props.evaluationInfo.evaluationList.questions.length > 1) {
      props.setCurrQues(props.currQues - 1);
      setTitle["evaluationList"]["questions"] = setTitle["evaluationList"][
        "questions"
      ].filter((val, idx) => {
        return idx !== index;
      });
      console.log("!!!!!!", setTitle);
      props.setEvaluationInfo(setTitle);
    } else {
      alert("한 개 이상의 질문 항목을 입력해주세요.");
    }
  };

  useEffect(() => {
    const input = document.querySelector(`.question-input${props.index}`);
    input.value =
      props.evaluationInfo.evaluationList.questions[props.index]["title"];
    const currInput = document.querySelector(
      `.question-input${props.currQues}`
    );
    currInput.focus();
  }, []);

  return (
    <style.EvalDiv>
      <style.QuestionInput
        name="title"
        className={"question-input" + props.index}
        onChange={(e) => {
          questionList(e, props.index);
        }}
        InputProps={{ disableUnderline: true }}
      />
      <style.removeBtn
        name="title"
        onClick={(e) => {
          removeQuestion(e, props.index);
          console.log("index:", props.index);
        }}
      >
        <style.removeImg name="title" src="/images/common/removeBtn.png" />
      </style.removeBtn>
      <TypeSelect
        evaluationInfo={props.evaluationInfo}
        setEvaluationInfo={props.setEvaluationInfo}
        index={props.index}
      />
    </style.EvalDiv>
  );
}

export default QuestionInput;
