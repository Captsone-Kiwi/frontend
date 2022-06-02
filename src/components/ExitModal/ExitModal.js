import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";

function ExitModal() {
  const navigator = useNavigate();

  // onClick={exit}

  const exit = () => {
    navigator("/interviewlist");
    window.location.reload();
  };

  return (
    <>
      <style.ModalContainer>
        {/* <style.removeBtn onClick={remove}/> */}
        <style.LogoDiv />
        <style.WrapContainer>
          <style.columnDiv>
            <style.styleLabel1>나가시겠습니까?</style.styleLabel1>
            <style.styleLabel2>
              Yes를 누르시면 마이페이지로 이동합니다.
            </style.styleLabel2>
            <style.btnContainer>
              <style.Button onClick={exit}>Yes</style.Button>
              <style.Button>No</style.Button>
            </style.btnContainer>
          </style.columnDiv>
        </style.WrapContainer>
      </style.ModalContainer>
    </>
  );
}

export default ExitModal;
