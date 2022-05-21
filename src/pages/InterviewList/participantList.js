import React from "react";
import * as style from "./styles";

function ParticipantList(props) {
  return (
    <style.intervieweeList>
      {props.participant.name} ({props.participant.email}):
      {props.participant.member_type === 1
        ? " 면접관"
        : props.participant.member_type === 2
        ? " 면접자"
        : null}
    </style.intervieweeList>
  );
}

export default ParticipantList;
