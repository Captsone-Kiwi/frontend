import React from "react";
import * as style from "./styles";

function ParticipantList(props) {
  return (
    <style.intervieweeList>
      {props.participant.name} ({props.participant.email}):
      {props.memberInfo.name === props.participant.name
        ? " 본인"
        : props.participant.member_type === 2
        ? " 면접자"
        : props.participant.member_type === 1
        ? " 면접관"
        : null}
    </style.intervieweeList>
  );
}

export default ParticipantList;
