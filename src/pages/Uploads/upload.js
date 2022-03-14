import React, { useState } from "react";
import * as style from "./styles";
import SideMenu from "../../components/SideMenu/sideMenu";

function Uploads(props) {
  const [side, setSide] = useState("upload");
  return (
    <style.Container>
      <SideMenu side={side} setSide={setSide} />
    </style.Container>
  );
}

export default Uploads;
