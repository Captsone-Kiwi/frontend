import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import interviewAPI from "../../api/interviewAPI";
import SideMenu from "../../components/SideMenu/sideMenu";
import DatePick from "../../components/DatePick/datepick";
import TimePick from "../../components/TimePick/timepick";
import SelectTemplate from "../../components/SelectTemplate/selectTemplate";
import InterviewerInput from "../../components/InputTextForm/InterviewerInput";
import IntervieweeInput from "../../components/InputTextForm/IntervieweeInput";

function InterviewReserve(props) {
  const navigator = useNavigate();
  const [side, setSide] = useState("interview");
  const [selectedDay, setSelectedDay] = useState(new Date());
  //면접 예약 정보
  const [reserveInfo, setReserveInfo] = useState({
    interviewName: "",
    startTime: "",
    template: "INT",
    interviewee: [""],
    interviewer: [""],
  });
  console.log("저장되는 정보들", reserveInfo);

  // 면접 이름 정보 저장
  const reserveUpload = ({ target }) => {
    let { name, value } = target;
    setReserveInfo({ ...reserveInfo, [name]: value });
  };

  //시간 정보 저장
  const onChange = () => {
    setReserveInfo({ ...reserveInfo });
  };

  //인터뷰 업로드
  const interviewSubmit = () => {
    console.log("interviewName:", reserveInfo);
    uploadInterview();
  };
  const uploadInterview = async () => {
    const formData = new FormData();
    formData.append("interviewName", reserveInfo.interviewName);
    formData.append("startTime", reserveInfo.startTime);
    formData.append("template", reserveInfo.template);
    formData.append("interviewee", reserveInfo.interviewee);
    formData.append("interviewer", reserveInfo.interviewer);
    await interviewAPI
      .createInterview(formData)
      .then((res) => {
        console.log("인터뷰 예약 업로드", res.data, res);
        alert("업로드 성공");
        navigator("/interviewlist");
      })
      .catch((err) => console.log(err));
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
                    name="startTime"
                    value={reserveInfo.startTime}
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                    onChange={onChange}
                    reserveInfo={reserveInfo}
                    setReserveInfo={setReserveInfo}
                  />
                </style.reserveDate>
                <style.reserveHour>
                  <style.clockImg src="/images/common/clockIcon.png" />
                  <TimePick />
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
                <SelectTemplate />
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
              <style.Button onClick={interviewSubmit}>저장</style.Button>
              <style.Button>취소</style.Button>
            </style.buttonSection>
          </style.reserveContainer>
        </style.Container>
      </style.interviewContainer>
    </style.mainContainer>
  );
}

export default InterviewReserve;
