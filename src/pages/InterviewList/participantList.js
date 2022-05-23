import React from "react";
import * as style from "./styles";

function ParticipantList(props) {
  return (
    <style.intervieweeList>
      {props.participant.name} ({props.participant.email}):
      {props.participant.member_type === 1
        ? props.memberInfo.name === props.participant.name
          ? " 본인"
          : " 면접관"
        : props.participant.member_type === 2
        ? props.memberInfo.name === props.participant.name
          ? " 본인"
          : " 면접관"
        : null}
    </style.intervieweeList>
  );
}

export default ParticipantList;
