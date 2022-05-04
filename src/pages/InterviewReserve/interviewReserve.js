import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import SideMenu from "../../components/SideMenu/sideMenu";
import DatePick from "../../components/DatePick/datepick";
import TimePick from "../../components/TimePick/timepick";
import TemplateSelect from "../../components/SelectForm/templateSelect";
import InterviewerInput from "../../components/InputTextForm/InterviewerInput";
import IntervieweeInput from "../../components/InputTextForm/IntervieweeInput";
import * as style from "./styles";
import interviewAPI from "../../api/interviewAPI";

function InterviewReserve(props) {
  const navigator = useNavigate();
  const [side, setSide] = useState("interview");
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date(0, 0, 0));
  //면접 예약 정보
  const [reserveInfo, setReserveInfo] = useState({
    interviewName: "",
    startDate: "",
    startTime: "",
    template: 0,
    interviewee: [""],
    interviewer: [""],
  });
  console.log("저장되는 정보들", reserveInfo);

  // 면접 이름 정보 저장
  const reserveUpload = ({ target }) => {
    let { name, value } = target;
    setReserveInfo({ ...reserveInfo, [name]: value });
  };

  //날짜 정보 저장
  const dateChange = (e) => {
    const setStartDate = { ...reserveInfo };
    const dateFormat = dayjs(e).format("YYYY년 MM월 DD일");
    setStartDate["startDate"] = dateFormat;
    setReserveInfo(setStartDate);
  };

  //시간 정보 저장
  const timeChange = (time) => {
    setSelectedTime(time);
    const setStartTime = { ...reserveInfo };
    const dateFormat = dayjs(time).format("HH시 mm분");
    setStartTime["startTime"] = dateFormat;
    setReserveInfo(setStartTime);
  };

  //인터뷰 업로드
  const uploadInterview = async (event) => {
    event.preventDefault();
    await interviewAPI
      .createInterview({
        interviewName: reserveInfo.interviewName,
        startDate: reserveInfo.startDate,
        startTime: reserveInfo.startTime,
        template: reserveInfo.template,
        interviewee: reserveInfo.interviewee,
        interviewer: reserveInfo.interviewer,
      })
      .then((res) => {
        console.log("createInterview result", res);
        alert("면접 예약 성공");
        navigator("/interviewlist");
      })
      .catch((err) => console.log("createInterview err", err));
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
                  <style.calendarImg src="/images/common/calendarIcon.png" />
                  <DatePick
                    name="startDate"
                    value={reserveInfo.startTime}
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                    onChange={dateChange}
                  />
                </style.reserveDate>
                <style.reserveHour>
                  <style.clockImg src="/images/common/clockIcon.png" />
                  <TimePick
                    name="startTime"
                    value={reserveInfo.startTime}
                    selectedTime={selectedTime}
                    setSelectedTime={setSelectedTime}
                    onChange={timeChange}
                  />
                </style.reserveHour>
              </style.reserveTime>
            </style.reserveSection>
            <style.reserveSection>
              <style.reserveTitle>면접 ID</style.reserveTitle>
              <style.createId>
                <style.IdCheckBox type="checkbox" />
                <style.Text>자동으로 생성</style.Text>
              </style.createId>
            </style.reserveSection>
            <style.reserveSection>
              <style.reserveTitle>템플릿</style.reserveTitle>
              <style.selectTemplate>
                <TemplateSelect
                  reserveInfo={reserveInfo}
                  setReserveInfo={setReserveInfo}
                />
              </style.selectTemplate>
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
            <style.buttonSection>
              <style.Button
                style={{
                  backgroundColor: "#3cb371",
                  border: "none",
                  color: "white",
                }}
                onClick={uploadInterview}
              >
                저장
              </style.Button>
              <style.Button>취소</style.Button>
            </style.buttonSection>
          </style.reserveContainer>
        </style.Container>
      </style.interviewContainer>
    </style.mainContainer>
  );
}

export default InterviewReserve;
