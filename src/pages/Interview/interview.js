import React, { useState, useEffect } from "react";
import * as style from "./styles";
import SideMenu from "../../components/SideMenu/sideMenu";
import InterviewList from "./interviewList";
// import InterviewReserve from "./interviewReserve";

function Interview(props) {
  const [side, setSide] = useState("interview");
  const [tag, setTag] = useState("");
  const [step, setStep] = useState(0);
  const prevStep = () => {
    if (step >= 0) setStep(step - 1);
  };
  const nextStep = () => {
    if (step < 2) setStep(step + 1);
  };

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

  //면접관 리스트
  const [currViewer, setCurrViewer] = useState(0);
  const interviewerList = (e, index) => {
    setReserveInfo({
      ...reserveInfo,
      [e.target.name]: [
        ...reserveInfo[e.target.name].slice(0, index),
        e.target.value,
        ...reserveInfo[e.target.name].slice(index + 1),
      ],
    });
    setCurrViewer(index);
  };
  const addInterviewer = ({ target }) => {
    const name = target.getAttribute("name");
    setCurrViewer(currViewer + 1);
    setReserveInfo({
      ...reserveInfo,
      [name]: [...reserveInfo[name], ""],
    });
  };
  const removeInterviewer = (e, index) => {
    const name = e.target.getAttribute("name");
    if (reserveInfo.interviewer.length > 1) {
      setCurrViewer(currViewer - 1);
      setReserveInfo({
        ...reserveInfo,
        [name]: [
          ...reserveInfo[name].filter((value, idx) => {
            return idx !== index;
          }),
        ],
      });
    } else {
      alert("더이상 삭제할 수 없습니다.");
    }
  };

  function InterviewerInputFrom(props) {
    useEffect(() => {
      const input = document.querySelector(`.viewer-input${props.index}`);
      input.value = reserveInfo.interviewer[props.index];
      const currInput = document.querySelector(`.viewer-input${currViewer}`);
      currInput.focus();
    }, []);
    return (
      <style.inputBox>
        {console.log("currViewer", currViewer)}
        <style.interviewerList
          name="interviewer"
          className={"viewer-input" + props.index}
          onChange={(e) => {
            interviewerList(e, props.index);
          }}
          InputProps={{ disableUnderline: true }}
        />
        <style.removeBtn
          name="interviewer"
          onClick={(e) => {
            removeInterviewer(e, props.index);
          }}
        >
          <style.removeImg
            name="interviewer"
            src="/images/common/removeBtn.png"
          />
        </style.removeBtn>
      </style.inputBox>
    );
  }

  return (
    <style.mainContainer>
      <SideMenu side={side} setSide={setSide} />
      <style.interviewContainer>
        {step === 0 ? (
          // 예정 면접들 보여주는 부분들
          <InterviewList
            step={step}
            setStep={setStep}
            prevStep={prevStep}
            nextStep={nextStep}
            tag={tag}
            setTag={setTag}
          />
        ) : (
          // 면접 예약 버튼 눌렀을 때 실행될 부분들
          <style.Container>
            <style.prevBtn onClick={prevStep}>
              <style.prevImg src="/images/common/prevBtn.png" />
              면접으로 돌아가기
            </style.prevBtn>
            <style.Span>면접 예약</style.Span>
            <style.reserveContainer>
              <style.reserveSection>
                <style.reserveTitle>면접명</style.reserveTitle>
                <style.reserveName
                  name="interviewName"
                  type="text"
                  onChange={reserveUpload}
                  required
                  autoFocus
                  InputProps={{ disableUnderline: true }}
                />
              </style.reserveSection>
              <style.reserveSection>
                <style.reserveTitle>면접 일시</style.reserveTitle>
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
                    <InterviewerInputFrom
                      name="interviewer"
                      index={index}
                      key={index}
                    />
                  ))}
                  <style.addBtn name="interviewer" onClick={addInterviewer}>
                    <style.addImg
                      name="interviewer"
                      src="/images/common/addBtn.png"
                    />
                  </style.addBtn>
                </style.detailContainer>
              </style.reserveSection>
              <style.reserveSection>
                <style.reserveTitle>면접자</style.reserveTitle>
              </style.reserveSection>
            </style.reserveContainer>
          </style.Container>
        )}
      </style.interviewContainer>
    </style.mainContainer>
  );
}

export default Interview;
