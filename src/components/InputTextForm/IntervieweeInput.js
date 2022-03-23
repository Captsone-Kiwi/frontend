import React, { useState, useEffect } from "react";
import * as style from "./styles";

function IntervieweeInput(props) {
  const [currViewee, setCurrViewee] = useState(0);
  const intervieweeList = (e, index) => {
    props.setReserveInfo({
      ...props.reserveInfo,
      [e.target.name]: [
        ...props.reserveInfo[e.target.name].slice(0, index),
        e.target.value,
        ...props.reserveInfo[e.target.name].slice(index + 1),
      ],
    });
    setCurrViewee(index);
  };
  const addInterviewee = ({ target }) => {
    const name = target.getAttribute("name");
    setCurrViewee(currViewee + 1);
    props.setReserveInfo({
      ...props.reserveInfo,
      [name]: [...props.reserveInfo[name], ""],
    });
  };
  const removeInterviewee = (e, index) => {
    const name = e.target.getAttribute("name");
    if (props.reserveInfo.interviewee.length > 1) {
      setCurrViewee(currViewee - 1);
      props.setReserveInfo({
        ...props.reserveInfo,
        [name]: [
          ...props.reserveInfo[name].filter((value, idx) => {
            return idx !== index;
          }),
        ],
      });
    } else {
      alert("최소 한 명 이상의 면접자를 입력해주세요.");
    }
  };
  useEffect(() => {
    const input = document.querySelector(`.viewee-input${props.index}`);
    input.value = props.reserveInfo.interviewee[props.index];
    // const currInput = document.querySelector(`.viewee-input${currViewee}`);
    //currInput.focus();
  }, []);
  return (
    <style.inputBox>
      <style.interviewerList
        name="interviewee"
        className={"viewee-input" + props.index}
        onChange={(e) => {
          intervieweeList(e, props.index);
        }}
        InputProps={{ disableUnderline: true }}
      />
      <style.removeBtn
        name="interviewee"
        onClick={(e) => {
          removeInterviewee(e, props.index);
        }}
      >
        <style.removeImg
          name="interviewee"
          src="/images/common/removeBtn.png"
        />
      </style.removeBtn>
      <style.addBtn name="interviewee" onClick={addInterviewee}>
        <style.addImg name="interviewee" src="/images/common/addBtn.png" />
      </style.addBtn>
    </style.inputBox>
  );
}

export default IntervieweeInput;
