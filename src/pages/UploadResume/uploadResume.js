import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../../components/SideMenu/sideMenu";
import FileUpload from "../../components/FileUpload/FileUpload";
import * as style from "./styles";

function UploadResume() {
  const navigator = useNavigate();
  const [side, setSide] = useState("resume");

  return (
    <style.mainContainer>
      <SideMenu side={side} setSide={setSide} />
      <style.uploadContainer>
        <style.Container>
          <style.prevBtn onClick={() => navigator("/resume")}>
            <style.prevImg src="/images/common/prevBtn.png" />
            뒤로 돌아가기
          </style.prevBtn>
          <style.Span>이력서 업로드</style.Span>
          <style.detailText>
            * 이력서는 면접자의 이름으로 설정해주세요.
          </style.detailText>
          <style.resumeUpload>
            <FileUpload />
          </style.resumeUpload>
        </style.Container>
      </style.uploadContainer>
    </style.mainContainer>
  );
}
export default UploadResume;
