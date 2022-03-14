import React, { useState } from "react";
import * as style from "./styles";
import SideMenu from "../../components/SideMenu/sideMenu";

function Profile(props) {
  const [side, setSide] = useState("profile");
  return (
    <style.Container>
      <SideMenu side={side} setSide={setSide} />
    </style.Container>
  );
}

export default Profile;
