import React from 'react';
import Bottom from "../../components/Bottom/Bottom.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import Video from './Video.js';

function Main() {

  return (
    <>
        <Sidebar style={{position:'absolute'}}/>
        <Bottom style={{position:'absolute'}}/>
        <Video/>
    </>
  );
}

export default Main;