import React, { useState, useEffect } from "react";
import * as style from "./styles";

function InterviewerInput(props) {
  const [currViewer, setCurrViewer] = useState(0);
  const interviewerList = (e, index) => {
    props.setReserveInfo({
      ...props.reserveInfo,
      [e.target.name]: [
        ...props.reserveInfo[e.target.name].slice(0, index),
        e.target.value,
        ...props.reserveInfo[e.target.name].slice(index + 1),
      ],
    });
    setCurrViewer(index);
  };
  const addInterviewer = ({ target }) => {
    const name = target.getAttribute("name");
    setCurrViewer(currViewer + 1);
    props.setReserveInfo({
      ...props.reserveInfo,
      [name]: [...props.reserveInfo[name], ""],
    });
  };
  const removeInterviewer = (e, index) => {
    const name = e.target.getAttribute("name");
    if (props.reserveInfo.interviewer.length > 1) {
      setCurrViewer(currViewer - 1);
      props.setReserveInfo({
        ...props.reserveInfo,
        [name]: [
          ...props.reserveInfo[name].filter((value, idx) => {
            return idx !== index;
          }),
        ],
      });
    } else {
      alert("더이상 삭제할 수 없습니다.");
    }
  };

  useEffect(() => {
    const input = document.querySelector(`.viewer-input${props.index}`);
    input.value = props.reserveInfo.interviewer[props.index];
    // const currInput = document.querySelector(`.viewer-input${currViewer}`);
    // currInput.focus();
  }, []);

  return (
    <style.inputBox>
      <style.interviewerList
        name="interviewer"
        className={"viewer-input" + props.index}
        onChange={(e) => {
          interviewerList(e, props.index);
        }}
        InputProps={{ disableUnderline: true }}
      />
      <style.removeBtn
        name="interviewer"
        onClick={(e) => {
          removeInterviewer(e, props.index);
        }}
      >
        <style.removeImg
          name="interviewer"
          src="/images/common/removeBtn.png"
        />
      </style.removeBtn>
      <style.addBtn name="interviewer" onClick={addInterviewer}>
        <style.addImg name="interviewer" src="/images/common/addBtn.png" />
      </style.addBtn>
    </style.inputBox>
  );
}

export default InterviewerInput;
