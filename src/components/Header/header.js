import React, { useEffect, useState, useContext } from "react";
import * as style from "./styles";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigator = useNavigate();

  return (
    <style.Header>
      <style.Logo
        src={process.env.PUBLIC_URL + "/images/common/logo.png"}
        onClick={() => navigator("/")}
      />
      <style.Menu>
        <style.MenuBtn onClick={() => navigator("/solution")}>
          Solution
        </style.MenuBtn>
        <style.MenuBtn onClick={() => navigator("/question")}>
          Question
        </style.MenuBtn>
      </style.Menu>
    </style.Header>
  );
}

export default Header;
