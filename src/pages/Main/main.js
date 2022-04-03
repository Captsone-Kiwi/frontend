import React from 'react';
import Bottom from "../../components/Bottom/Bottom.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import Video from './Video.js';
import GdevelopPage from '../../pages/GDevelop/GdevelopPage.js';

function Main() {
  if(!window.location.hash) {
    window.location = window.location + '#loaded';
    window.location.reload();
  }

  return (
    <>
        <Sidebar style={{position:'absolute', zIndex:1}}/>
        <Bottom style={{position:'absolute'}}/>
        <Video style={{position:'absolute'}}/>
    </>
  );
}

export default Main;