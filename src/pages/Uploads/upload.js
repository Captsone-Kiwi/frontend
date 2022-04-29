import React, { useState } from "react";
import * as style from "./styles";
import SideMenu from "../../components/SideMenu/sideMenu";

function Uploads(props) {
  const [side, setSide] = useState("upload");
  const [tag, setTag] = useState("resume");

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
  return (
    <style.mainContainer>
      <SideMenu side={side} setSide={setSide} />
      <style.uploadContainer>
        <style.detailContainer>
          <style.Span>업로드</style.Span>
          <style.selectionDiv onClick={btnClicked}>
            <style.selectBtn value="resume" current={tag === "resume"}>
              이력서
            </style.selectBtn>
            <style.selectBtn value="evaluation" current={tag === "evaluation"}>
              평가항목
            </style.selectBtn>
            <style.selectBtn value="exam" current={tag === "exam"}>
              시험지
            </style.selectBtn>
          </style.selectionDiv>
        </style.detailContainer>
      </style.uploadContainer>
    </style.mainContainer>
  );
}

export default Uploads;
