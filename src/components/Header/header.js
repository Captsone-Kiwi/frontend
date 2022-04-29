import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import authAPI from "../../api/authAPI";
import AuthContext from "../../store";

function Header() {
  const navigator = useNavigate();
  const [state, actions] = useContext(AuthContext);
  console.log("state : ", state);
  const [userInfo, setUserInfo] = useState({ name: "" });

  const logout = async () => {
    await authAPI
      .authLogout()
      .then((result) => {
        alert("로그아웃 되었습니다.");
        actions.setLoginState(false);
        navigator("/");
      })
      .catch((err) => console.log("authLogout error", err));
  };

  useEffect(() => {
    getUserInfo();
  }, [state]);
  const getUserInfo = async () => {
    await authAPI
      .getUser()
      .then((res) => {
        setUserInfo(res.data.data);
        console.log("getUser result", res);
      })
      .catch((error) => console.log("getUser error", error));
  };

  return (
    <style.Header>
      <style.Logo
        src={process.env.PUBLIC_URL + "/images/common/logo.png"}
        onClick={() => navigator("/")}
      />
      <style.Menu>
        <style.menuLeft>
          <style.MenuBtn onClick={() => navigator("/solution")}>
            Solution
          </style.MenuBtn>
          <style.MenuBtn onClick={() => navigator("/question")}>
            Question
          </style.MenuBtn>
        </style.menuLeft>
        {state.logged ? (
          <style.menuRight>
            {/* <style.MenuBtn style={{ marginRight: "50px" }} onClick={logout}>
              Logout
            </style.MenuBtn> */}
            <style.profileIcon
              src={process.env.PUBLIC_URL + "/images/common/profile.png"}
              onClick={() => navigator("/interviewlist")}
            />
            <style.userName>{userInfo.name}</style.userName>
          </style.menuRight>
        ) : (
          <style.menuRight>
            <style.LoginButton onClick={() => navigator("/login")}>
              로그인
            </style.LoginButton>
            <style.SignUpButton onClick={() => navigator("/signup")}>
              회원가입
            </style.SignUpButton>
          </style.menuRight>
        )}
      </style.Menu>
    </style.Header>
  );
}

export default Header;
