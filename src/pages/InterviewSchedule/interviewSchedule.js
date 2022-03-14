import React, { useState } from "react";
import * as style from "./styles";
import SideMenu from "../../components/SideMenu/sideMenu";

function InterviewSchedule(props) {
  const [side, setSide] = useState("interview");
  return (
    <style.Container>
      <SideMenu side={side} setSide={setSide} />
    </style.Container>
  );
}

export default InterviewSchedule;
