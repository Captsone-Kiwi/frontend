import React from "react";
import * as style from "./reserveStyles";

export default function interviewReserve(props) {
  return (
    <style.Container>
      <style.prevBtn onClick={props.prevStep}>
        <style.prevImg src="/images/common/prevBtn.png" />
        면접으로 돌아가기
      </style.prevBtn>
      <style.Span>면접 예약</style.Span>
      <style.reserveContainer>
        <style.reserveSection>
          <style.reserveTitle>면접명</style.reserveTitle>
          <style.reserveName
            interviewName="interviewName"
            type="text"
            value={props.reserveUpload.interviewName}
            onChange={props.reserveUpload}
            required
            autoFocus
            InputProps={{ disableUnderline: true }}
          />
        </style.reserveSection>
      </style.reserveContainer>
    </style.Container>
  );
}
