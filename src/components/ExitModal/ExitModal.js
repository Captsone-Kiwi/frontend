import React, { useState } from 'react';
import * as style from "./styles";



class ExitModal extends React.Component {
 


render(){

  return (
    <>
      <style.ModalContainer>
        {/* <style.removeBtn onClick={remove}/> */}
        <style.LogoDiv/>
        <style.WrapContainer>
            <style.columnDiv>
                <style.styleLabel1>나가시겠습니까?</style.styleLabel1>
                <style.styleLabel2>Yes를 누르시면 로그아웃되며 메인페이지로 이동합니다.</style.styleLabel2>
                <style.btnContainer>
                    <style.Button onClick={() => navigator("/main")}>
                    Yes
                    </style.Button>
                    <style.Button>
                    No
                    </style.Button>
                </style.btnContainer>
            </style.columnDiv>
        </style.WrapContainer>
      </style.ModalContainer>
    </>
  );
}
}

export default ExitModal;