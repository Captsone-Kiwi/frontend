import React, { useState, useEffect, useContext } from "react";
import * as style from "./styles";
import interviewAPI from "../../api/interviewAPI";
import AuthContext from "../../store";
import ParticipantList from "./participantList";

function OldInterviewInfo(props) {
  const [participant, setParticipant] = useState([
    {
      email: "",
      name: "",
      member_type: 0,
    },
  ]);
  // console.log("participant", participant);

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
        // console.log("participant result", result.data);
      })
      .catch((err) => console.log("participant error", err));
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
            <ParticipantList memberInfo={props.memberInfo} participant={e} />
          ))}
        </style.interviewMember>
      </style.leftDetail>
      {props.memberType === 1 ? (
        <style.rightDetail>
          <style.greenButton
            style={{
              width: "130px",
              paddingLeft: "14px",
              height: "30px",
            }}
            onClick={() =>
              window.open(
                `http://35.174.145.15:8000/downloadInterviewResult/kiwi_interview`
              )
            }
          >
            면접 결과 다운받기
          </style.greenButton>
        </style.rightDetail>
      ) : props.memberType === 2 ? (
        <style.rightDetail>
          <style.Buttons
            style={{
              width: "fit-content",
              height: "30px",
              backgroundColor: "#C4C4C4",
            }}
          >
            완료된 면접
          </style.Buttons>
        </style.rightDetail>
      ) : null}
    </style.interviewDetail>
  );
}

export default OldInterviewInfo;
