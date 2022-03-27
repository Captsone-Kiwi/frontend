import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import SideMenu from "../../components/SideMenu/sideMenu";
import DatePick from "../../components/DatePick/datepick";
import InterviewerInput from "../../components/InputTextForm/InterviewerInput";
import IntervieweeInput from "../../components/InputTextForm/IntervieweeInput";

function InterviewReserve(props) {
  const navigator = useNavigate();
  const [side, setSide] = useState("interview");
  //면접 예약 정보
  const [reserveInfo, setReserveInfo] = useState({
    interviewName: "",
    startTime: "",
    template: "INT",
    interviewee: [""],
    interviewer: [""],
  });

  const reserveUpload = ({ target }) => {
    let { name, value } = target;
    setReserveInfo({ ...reserveInfo, [name]: value });
  };

  return (
    <style.mainContainer>
      <SideMenu side={side} setSide={setSide} />
      <style.interviewContainer>
        {/* 면접 예약 버튼 눌렀을 때 실행될 부분들 */}
        <style.Container>
          <style.prevBtn onClick={() => navigator("/interviewlist")}>
            <style.prevImg src="/images/common/prevBtn.png" />
            면접으로 돌아가기
          </style.prevBtn>
          <style.Span>면접 예약</style.Span>
          <style.reserveContainer>
            <style.reserveSection>
              <style.reserveTitle>면접명</style.reserveTitle>
              <style.reserveName
                name="interviewName"
                value={reserveInfo.interviewName}
                type="text"
                onChange={reserveUpload}
                required
                autoFocus
                InputProps={{ disableUnderline: true }}
              />
            </style.reserveSection>
            <style.reserveSection>
              <style.reserveTitle>면접 일시</style.reserveTitle>
              <style.reserveTime>
                <style.reserveDate>
                  <DatePick />
                </style.reserveDate>
              </style.reserveTime>
            </style.reserveSection>
            <style.reserveSection>
              <style.reserveTitle>면접 ID</style.reserveTitle>
            </style.reserveSection>
            <style.reserveSection>
              <style.reserveTitle>템플릿</style.reserveTitle>
            </style.reserveSection>
            <style.reserveSection>
              <style.reserveTitle>면접관</style.reserveTitle>
              <style.detailContainer>
                {reserveInfo.interviewer.map((e, index) => (
                  <InterviewerInput
                    name="interviewer"
                    index={index}
                    key={index}
                    reserveInfo={reserveInfo}
                    setReserveInfo={setReserveInfo}
                  />
                ))}
              </style.detailContainer>
            </style.reserveSection>
            <style.reserveSection>
              <style.reserveTitle>면접자</style.reserveTitle>
              <style.detailContainer>
                {reserveInfo.interviewee.map((e, index) => (
                  <IntervieweeInput
                    name="interviewee"
                    index={index}
                    key={index}
                    reserveInfo={reserveInfo}
                    setReserveInfo={setReserveInfo}
                  />
                ))}
              </style.detailContainer>
            </style.reserveSection>
          </style.reserveContainer>
        </style.Container>
      </style.interviewContainer>
    </style.mainContainer>
  );
}

export default InterviewReserve;
