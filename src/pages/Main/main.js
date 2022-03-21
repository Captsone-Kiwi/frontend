import React from 'react';
import Bottom from "../../components/Bottom/Bottom.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";

function Main() {

  return (
    <>
        <Sidebar style={{position:'absolute'}}/>
        <Bottom style={{position:'absolute'}}/>
    </>
  );
}

export default Main;