import React from "react";
import * as style from "./styles";
import { useNavigate } from "react-router-dom";
import { StepLabel } from "@material-ui/core";

function Header() {
  const navigator = useNavigate();

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
        <style.menuRight>
          <style.MenuBtn
            style={{ marginRight: "50px" }}
            onClick={() => navigator("/profile")}
          >
            mypage
          </style.MenuBtn>
        </style.menuRight>
      </style.Menu>
    </style.Header>
  );
}

export default Header;
