import React, { useState } from "react";
import * as style from "./styles";
import SideMenu from "../../components/SideMenu/sideMenu";
import InterviewList from "./interviewList";
import InterviewReserve from "./interviewReserve";

function Interview(props) {
  const [side, setSide] = useState("interview");
  const [step, setStep] = useState(0);
  const prevStep = () => {
    if (step >= 0) setStep(step - 1);
  };
  const nextStep = () => {
    if (step < 2) setStep(step + 1);
  };
  return (
    <style.Container>
      <SideMenu side={side} setSide={setSide} />
      <style.interviewContainer>
        {step === 0 ? (
          <InterviewList
            step={step}
            setStep={setStep}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        ) : (
          <InterviewReserve
            step={step}
            setStep={setStep}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        )}
      </style.interviewContainer>
    </style.Container>
  );
}

export default Interview;
