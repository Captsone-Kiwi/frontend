/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import * as style from "./questionStyles";

function MaxScoreInput(props) {
  const scoreList = (e, index) => {
    const setTitle = { ...props.evaluationInfo };
    setTitle["evaluationList"][props.index][e.target.name] = e.target.value;
    props.setEvaluationInfo(setTitle);
    // console.log("index", index);
    // props.currQues(index);
  };
  useEffect(() => {
    // const input = document.querySelector(`.maxScore-input${props.index}`);
    // input.value = props.evaluationInfo.evaluationList[props.index]["title"];
    // const currInput = document.querySelector(`.question-input${props.currQues}`);
    // currInput.focus();
  }, []);

  return (
    <style.ScoreInput
      name="range"
      id="score-input"
      className={"maxScore-input" + props.index}
      onChange={(e) => {
        scoreList(e, props.index);
      }}
      InputProps={{ disableUnderline: true }}
      disabled={
        props.evaluationInfo.evaluationList[props.index].type === 1
          ? true
          : false
      }
    />
  );
}

export default MaxScoreInput;
