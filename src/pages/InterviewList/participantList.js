import React from "react";
import * as style from "./styles";

function ParticipantList(props) {
  return (
    <style.intervieweeList>
      {console.log("props.participant", props.participant)}
      {console.log("props.memberInfo", props.memberInfo)}
      {props.participant.name} ({props.participant.email}):
      {props.participant.member_type === 1
        ? props.memberInfo.name === props.participant.name
          ? " 본인"
          : " 면접관"
        : props.participant.member_type === 2
        ? " 면접자"
        : null}
    </style.intervieweeList>
  );
}

export default ParticipantList;
