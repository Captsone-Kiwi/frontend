import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import authAPI from "../../api/authAPI";
import AuthContext from "../../store";

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

  const [memberInfo, setMemberInfo] = useState({ memberType: 0 });
  const [state, actions] = useContext(AuthContext);
  useEffect(() => {
    getMemberInfo();
  }, [state]);
  const getMemberInfo = async () => {
    await authAPI
      .getUser()
      .then((res) => {
        setMemberInfo(res.data.data);
        console.log("getMember result", res.data.data);
      })
      .catch((error) => console.log("getMember error", error));
  };

  return (
    <style.sideContainer onClick={btnClicked}>
      {memberInfo.memberType === 1 ? (
        <>
          <style.sideBtn
            onClick={() => navigator("/interviewlist")}
            value="interview"
            current={side === "interview"}
          >
            <style.Span>면접</style.Span>
          </style.sideBtn>
          <style.sideBtn
            onClick={() => navigator("/evaluation")}
            value="evaluation"
            current={side === "evaluation"}
          >
            <style.Span>평가항목</style.Span>
          </style.sideBtn>
          <style.sideBtn
            onClick={() => navigator("/resume")}
            value="resume"
            current={side === "resume"}
          >
            <style.Span>이력서</style.Span>
          </style.sideBtn>
        </>
      ) : memberInfo.memberType === 2 ? (
        <>
          <style.sideBtn
            onClick={() => navigator("/interviewlist")}
            value="interview"
            current={side === "interview"}
          >
            <style.Span>면접</style.Span>
          </style.sideBtn>
          <style.sideBtn
            onClick={() => navigator("/profile")}
            value="profile"
            current={side === "profile"}
          >
            <style.Span>프로필</style.Span>
          </style.sideBtn>
        </>
      ) : null}
    </style.sideContainer>
  );
}

export default SideMenu;
