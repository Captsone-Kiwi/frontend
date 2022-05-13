/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import * as style from "./questionStyles";

function MaxScoreInput(props) {
  //   const questionList = (e, index) => {
  //     const setTitle = { ...props.evaluationInfo };
  //     setTitle["evaluationList"][props.index][e.target.name] = e.target.value;
  //     props.setEvaluationInfo(setTitle);
  //     // props.currQues(index);
  //   };

  console.log("index", props.index);

  useEffect(() => {
    // const input = document.querySelector(`.maxScore-input${props.index}`);
    // input.value = props.evaluationInfo.evaluationList[props.index]["title"];
    // const currInput = document.querySelector(`.question-input${props.currQues}`);
    // currInput.focus();
  }, []);

  return (
    <style.ScoreInput
      name="maxScore"
      id="score-input"
      // className={"maxScore-input" + props.index}
      // onChange={(e) => {
      //   questionList(e, props.index);
      // }}
      InputProps={{ disableUnderline: true }}
    />
  );
}

export default MaxScoreInput;
