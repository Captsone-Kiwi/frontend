import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as style from "./styles";
import SideMenu from "../../components/SideMenu/sideMenu";
import AuthContext from "../../store";
import interviewAPI from "../../api/interviewAPI";

function InterviewList(props) {
  const navigator = useNavigate();
  const [side, setSide] = useState("interview");
  const [tag, setTag] = useState("new");
  const [state, actions] = useContext(AuthContext);
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

  useEffect(() => {
    getInterviewInfo();
  }, [state]);
  const getInterviewInfo = async () => {
    await interviewAPI
      .getInterview()
      .then((res) => {
        setInterviewInfo(res.data.data);
        console.log("InterviewInfo", res.data.data);
        console.log("getInterviewInfo result", res.data);
      })
      .catch((error) => console.log("getInterviewInfo error", error));
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
            <style.selectBtn value="template" current={tag === "template"}>
              면접 템플릿
            </style.selectBtn>
          </style.selectionDiv>
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
              <style.interviewMember>
                <style.intervieweeList>
                  interviewee1@google.com
                </style.intervieweeList>
                <style.intervieweeList>
                  interviewee2@google.com
                </style.intervieweeList>
                <style.intervieweeList>
                  interviewee3@google.com
                </style.intervieweeList>
              </style.interviewMember>
            </style.leftDetail>
            <style.rightDetail>
              <style.greenButton
                onClick={() => navigator("/main?username=sohyeon&room=KIWI")}
              >
                시작
              </style.greenButton>
              <style.Buttons>편집</style.Buttons>
              <style.Buttons>삭제</style.Buttons>
            </style.rightDetail>
          </style.interviewDetail>
          {/* {interviewInfo.map((e, idx) => (
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
              </style.leftDetail>
              <style.rightDetail>
                <style.greenButton>시작</style.greenButton>
                <style.Buttons>편집</style.Buttons>
                <style.Buttons>삭제</style.Buttons>
              </style.rightDetail>
            </style.interviewDetail>
          ))} */}
        </style.Container>
      </style.interviewContainer>
    </style.mainContainer>
  );
}

export default InterviewList;
