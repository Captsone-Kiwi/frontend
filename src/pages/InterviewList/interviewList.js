import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as style from "./styles";
import SideMenu from "../../components/SideMenu/sideMenu";
import AuthContext from "../../store";
import interviewAPI from "../../api/interviewAPI";
import authAPI from "../../api/authAPI";

function InterviewList(props) {
  const navigator = useNavigate();
  const [side, setSide] = useState("interview");
  const [tag, setTag] = useState("new");
  const [state, actions] = useContext(AuthContext);
  const [memberInfo, setMemberInfo] = useState({ memberType: 0 }); // 멤버타입 불러오기
  const [participant, setParticipant] = useState([]);
  const [interviewInfo, setInterviewInfo] = useState({
    interviewName: "",
    startDate: "",
    startTime: "",
    template: 0,
    interviewee: [""],
    interviewer: [""],
  });

  const btnClicked = (e) => {
    e.preventDefault();
    if (e.target.tagName !== "DIV") {
      let target = e.target;
      while (e.target.tagName !== "BUTTON") {
        target = target.parentNode;
      }
      setTag(target.value);
    }
  };
  // 유저 정보 가져오기
  useEffect(() => {
    getMemberInfo();
  }, [state]);
  const getMemberInfo = async () => {
    await authAPI
      .getUser()
      .then((res) => {
        setMemberInfo(res.data.data);
        console.log("getMember result", res.data.data);
      })
      .catch((error) => console.log("getMember error", error));
  };

  //예약된 인터뷰 & 참여자 정보 가져오기
  useEffect(() => {
    getInterviewInfo();
  }, [state]);
  const getInterviewInfo = async () => {
    await interviewAPI
      .getInterview()
      .then((res) => {
        setInterviewInfo(res.data.data);
        console.log("getInterviewInfo result", res.data);
        interviewAPI
          .participant(res.data.data[0].id)
          .then((result) => {
            setParticipant(result.data.data);
            console.log("participant result", result.data);
          })
          .catch((err) => console.log("participant error", err));
      })
      .catch((error) => console.log("getInterviewInfo error", error));
  };

  // 면접 삭제하기
  const deleteInterview = async () => {
    await interviewAPI
      .deleteInterview(interviewInfo[0].id)
      .then((res) => {
        alert("해당 면접 예약을 삭제하시겠습니까?");
        console.log("deleteInterview result", res.data);
      })
      .catch((error) => console.log("deleteInterview error", error));
  };

  return (
    <style.mainContainer>
      <SideMenu side={side} setSide={setSide} />
      <style.interviewContainer>
        <style.Container>
          <style.Span>면접</style.Span>
          <style.selectionDiv onClick={btnClicked}>
            <style.selectBtn value="new" current={tag === "new"}>
              예정
            </style.selectBtn>
            <style.selectBtn value="old" current={tag === "old"}>
              이전
            </style.selectBtn>
            {/* <style.selectBtn value="template" current={tag === "template"}>
              면접 템플릿
            </style.selectBtn> */}
          </style.selectionDiv>
          {memberInfo.memberType === 1 ? (
            <>
              <style.reserveInterview
                onClick={() => navigator("/interviewreserve")}
              >
                면접 예약
              </style.reserveInterview>
              <style.dateDiv>
                <style.interviewSpan style={{ marginLeft: "10px" }}>
                  시간
                </style.interviewSpan>
                <style.interviewSpan>면접명</style.interviewSpan>
                <style.interviewSpan>참여자</style.interviewSpan>
              </style.dateDiv>
              {interviewInfo.map((e, idx) => (
                <style.interviewDetail>
                  <style.leftDetail>
                    <style.interviewSchedule key={idx}>
                      <style.interviewDate>
                        {interviewInfo[idx].startDate}
                      </style.interviewDate>
                      <style.interviewTime>
                        {interviewInfo[idx].startTime}
                      </style.interviewTime>
                    </style.interviewSchedule>
                    <style.interviewTitle key={idx}>
                      {interviewInfo[idx].interview_name}
                    </style.interviewTitle>
                    <style.interviewMember>
                      {participant.map((person) => (
                        <style.intervieweeList key={person}>
                          {person}
                        </style.intervieweeList>
                      ))}
                    </style.interviewMember>
                  </style.leftDetail>
                  <style.rightDetail>
                    <style.greenButton
                      onClick={() =>
                        navigator("/main?username=sohyeon&room=KIWI")
                      }
                      //username => 각자 username
                      //room => 랜덤생성되는 회의 넘버
                    >
                      시작
                    </style.greenButton>
                    <style.Buttons>편집</style.Buttons>
                    <style.Buttons onClick={deleteInterview}>
                      삭제
                    </style.Buttons>
                  </style.rightDetail>
                </style.interviewDetail>
              ))}
            </>
          ) : memberInfo.memberType === 2 ? (
            <>
              <style.dateDiv>
                <style.interviewSpan style={{ marginLeft: "10px" }}>
                  시간
                </style.interviewSpan>
                <style.interviewSpan>면접명</style.interviewSpan>
              </style.dateDiv>
              <style.interviewDetail>
                <style.leftDetail>
                  <style.interviewSchedule>
                    <style.interviewDate>
                      {/* {interviewInfo[0].startDate} */}
                      2022/04/08
                    </style.interviewDate>
                    <style.interviewTime>
                      {/* {interviewInfo[0].startTime} */}
                      15:00
                    </style.interviewTime>
                  </style.interviewSchedule>
                  <style.interviewTitle>
                    {/* {interviewInfo[0].interview_name} */}
                    Kiwi Interview
                  </style.interviewTitle>
                </style.leftDetail>
                <style.rightDetail>
                  <style.greenButton
                    style={{
                      width: "75px",
                      paddingLeft: "14px",
                      height: "30px",
                    }}
                    onClick={() =>
                      navigator("/main?username=sohyeon&room=KIWI")
                    }
                    //username => 각자 username
                    //room => 랜덤생성되는 회의 넘버
                  >
                    입장하기
                  </style.greenButton>
                </style.rightDetail>
              </style.interviewDetail>
            </>
          ) : null}
        </style.Container>
      </style.interviewContainer>
    </style.mainContainer>
  );
}

export default InterviewList;
