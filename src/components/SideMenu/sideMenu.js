import React from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";

function SideMenu(props) {
  const navigator = useNavigate();
  const { side, setSide } = props;
  const btnClicked = (e) => {
    e.preventDefault();
    if (e.target.tagName !== "DIV") {
      let target = e.target;
      setSide(target.value);
    }
  };
  return (
    <style.sideContainer onClick={btnClicked}>
      <style.sideBtn
        onClick={() => navigator("/profile")}
        value="profile"
        current={side === "profile"}
      >
        <style.Span>프로필</style.Span>
      </style.sideBtn>
      <style.sideBtn
        onClick={() => navigator("/interview")}
        value="interview"
        current={side === "interview"}
      >
        <style.Span>면접</style.Span>
      </style.sideBtn>
      <style.sideBtn
        onClick={() => navigator("/upload")}
        value="upload"
        current={side === "upload"}
      >
        <style.Span>업로드</style.Span>
      </style.sideBtn>
    </style.sideContainer>
  );
}

export default SideMenu;
