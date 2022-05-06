import React, { useState, useEffect } from "react";
import * as style from "./questionStyles";

function QuestionInput(props) {
  const questionList = (e, index) => {
    const setTitle = { ...props.evaluationList };
    setTitle["questions"][props.index][e.target.name] = e.target.value;
    props.setEvaluationList(setTitle);
    // props.currQues(index);
  };
  const removeQuestion = (e, index) => {
    const setTitle = { ...props.evaluationList };
    if (props.evaluationList.questions.length > 1) {
      props.setCurrQues(props.currQues - 1);
      setTitle["questions"] = setTitle["questions"].filter((val, idx) => {
        return idx !== index;
      });
      props.setEvaluationList(setTitle);
    } else {
      alert("한 개 이상의 질문 항목을 입력해주세요.");
    }
  };

  useEffect(() => {
    const input = document.querySelector(`.question-input${props.index}`);
    input.value = props.evaluationList.questions[props.index]["title"];
    // const currInput = document.querySelector(`.question-input${props.currQues}`);
    // currInput.focus();
  }, []);

  return (
    <>
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
    </>
  );
}

export default QuestionInput;
