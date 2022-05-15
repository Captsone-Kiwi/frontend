import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import SideMenu from "../../components/SideMenu/sideMenu";
import InterviewInformation from "./InterviewInformation";
import AuthContext from "../../store";
import interviewAPI from "../../api/interviewAPI";
import authAPI from "../../api/authAPI";

function InterviewList(props) {
  const navigator = useNavigate();
  const [side, setSide] = useState("interview");
  const [tag, setTag] = useState("new");
  const [state, actions] = useContext(AuthContext);
  const [memberInfo, setMemberInfo] = useState({ memberType: 0 }); // 멤버타입 불러오기
  const [interviewInfo, setInterviewInfo] = useState([
    {
      interview_name: "",
      startDate: "",
      startTime: "",
      template: 0,
      interviewee: [""],
      interviewer: [""],
    },
  ]);

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
    getMemberInfo();
    getInterviewInfo();
  }, [state]);

  // 유저 정보 가져오기
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
  const getInterviewInfo = async () => {
    await interviewAPI
      .getInterview()
      .then((res) => {
        setInterviewInfo(res.data.data);
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
            {/* <style.selectBtn value="template" current={tag === "template"}>
              면접 템플릿
            </style.selectBtn> */}
          </style.selectionDiv>
          {interviewInfo.length === 0 ? (
            <>
              <style.reserveInterview
                onClick={() => navigator("/interviewreserve")}
              >
                면접 예약
              </style.reserveInterview>
              <style.noInterview>
                <style.noInterviewText>
                  사용자에게 예정된 면접이 없습니다.
                </style.noInterviewText>
                <style.noInterviewText>
                  새 면접을 예약하려면 면접 예약 버튼을 눌러 진행해주세요.
                </style.noInterviewText>
              </style.noInterview>
            </>
          ) : (
            <>
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
                  {interviewInfo.map((e) => (
                    <InterviewInformation
                      memberInfo={memberInfo}
                      startDate={e.startDate}
                      startTime={e.startTime}
                      interview_name={e.interview_name}
                      interview_id={e.id}
                      memberType={memberInfo.memberType}
                    />
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
                  {interviewInfo.map((e) => (
                    <InterviewInformation
                      memberInfo={memberInfo}
                      startDate={e.startDate}
                      startTime={e.startTime}
                      interview_name={e.interview_name}
                      interview_id={e.id}
                      memberType={memberInfo.memberType}
                    />
                  ))}
                </>
              ) : null}
            </>
          )}
        </style.Container>
      </style.interviewContainer>
    </style.mainContainer>
  );
}

export default InterviewList;
