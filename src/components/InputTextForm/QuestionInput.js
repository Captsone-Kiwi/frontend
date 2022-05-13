import React, { useState, useEffect } from "react";
import * as style from "./questionStyles";

function QuestionInput(props) {
  const questionList = (e, index) => {
    const setTitle = { ...props.evaluationInfo };
    setTitle["evaluationList"][props.index][e.target.name] = e.target.value;
    props.setEvaluationInfo(setTitle);
    // props.currQues(index);
  };
  const removeQuestion = (e, index) => {
    const setTitle = { ...props.evaluationInfo };
    if (props.evaluationInfo.evaluationList.length > 1) {
      props.setCurrQues(props.currQues - 1);
      setTitle["evaluationList"] = setTitle["evaluationList"].filter(
        (val, idx) => {
          return idx !== index;
        }
      );
      props.setEvaluationInfo(setTitle);
    } else {
      alert("한 개 이상의 질문 항목을 입력해주세요.");
    }
  };

  useEffect(() => {
    const input = document.querySelector(`.question-input${props.index}`);
    input.value = props.evaluationInfo.evaluationList[props.index]["title"];
    // const currInput = document.querySelector(`.question-input${props.currQues}`);
    // currInput.focus();
  }, []);

  return (
    <style.QuestionInput
      name="title"
      className={"question-input" + props.index}
      onChange={(e) => {
        questionList(e, props.index);
      }}
      InputProps={{ disableUnderline: true }}
    />
  );
}

export default QuestionInput;
