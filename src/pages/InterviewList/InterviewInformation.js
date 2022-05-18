import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import interviewAPI from "../../api/interviewAPI";
import AuthContext from "../../store";

function InterviewInformation(props) {
  const navigator = useNavigate();
  const [participant, setParticipant] = useState([
    {
      email: "",
      name: "",
      member_type: 0,
    },
  ]);
  console.log("participant", participant);

  const [state, actions] = useContext(AuthContext);
  useEffect(() => {
    getParticipant();
  }, [state]);

  // 참여자 정보 가져오기
  const getParticipant = async () => {
    await interviewAPI
      .participant(props.interview_id)
      .then((result) => {
        setParticipant(result.data.data);
        console.log("participant result", result.data);
      })
      .catch((err) => console.log("participant error", err));
  };

  // 면접 삭제하기
  const deleteInterview = async () => {
    await interviewAPI
      .deleteInterview(props.interview_id)
      .then((res) => {
        alert("해당 면접 예약을 삭제하시겠습니까?");
        window.location.reload();
        console.log("deleteInterview result", res.data);
      })
      .catch((error) => console.log("deleteInterview error", error));
  };

  //원하는 링크로 이동
  const gotoGdevelop = () => {
    navigator(
      `/main?username=${props.memberInfo.name}&room=${props.interview_id}`
    );
  };

  return (
    <style.interviewDetail>
      <style.leftDetail>
        <style.interviewSchedule>
          <style.interviewDate>{props.startDate}</style.interviewDate>
          <style.interviewTime>{props.startTime}</style.interviewTime>
        </style.interviewSchedule>
        <style.interviewTitle>{props.interview_name}</style.interviewTitle>
        <style.interviewMember>
          {participant.map((e, idx) => (
            <style.intervieweeList>
              {e.name} ({e.email}):
              {e.member_type === 1
                ? " 면접관"
                : e.member_type === 2
                ? " 면접자"
                : null}
            </style.intervieweeList>
          ))}
        </style.interviewMember>
      </style.leftDetail>
      {props.memberType === 1 ? (
        <style.rightDetail>
          <style.greenButton onClick={gotoGdevelop}>시작</style.greenButton>
          <style.Buttons>편집</style.Buttons>
          <style.Buttons onClick={deleteInterview}>삭제</style.Buttons>
        </style.rightDetail>
      ) : props.memberType === 2 ? (
        <style.rightDetail>
          <style.greenButton
            style={{
              width: "75px",
              paddingLeft: "14px",
              height: "30px",
            }}
            onClick={gotoGdevelop}
          >
            입장하기
          </style.greenButton>
        </style.rightDetail>
      ) : null}
    </style.interviewDetail>
  );
}

export default InterviewInformation;
