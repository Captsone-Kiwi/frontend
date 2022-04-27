import React, { useState } from 'react';
import * as MdIcons from 'react-icons/md';
import * as Io5Icons from "react-icons/io5";
import * as IoIcons from "react-icons/io";
import * as style from "./styles";
import Timer from '../Timer/Timer.js';
import SettingModal from '../SettingModal/SettingModal.js';
import Chatting from '../Chatting/Chatting.js';
import {motion} from "framer-motion";

function Sidebar() {

  const [tabState, setTabState] = useState({
    onSet: false,
    onTrans: false,
    onChat: false,
    onExit: false,
    onWatch: false,
  });


  const tabHandler = (e) => {
    const newTabState = {...tabState};
    const activeTab = e.currentTarget.id;
   
    if (newTabState[activeTab] == true){
      newTabState[activeTab] = false
    }
    else {
      for(let key in newTabState){
        key === activeTab
          ? (newTabState[key] = true)
          : (newTabState[key] = false)
      }
    }

    setTabState(newTabState);
  }

  return (
    <>
        <style.NavMenu>
          <style.Content/>
          <style.Sidebar>
            <style.Logo/>
            <motion.div
              style={{
                position: 'absolute',
                width: '100%',
              }}
              animate={{
                bottom : tabState.onWatch ? "160px" : "0px",
                
                transition: {
                  duration: 0.5,
                  damping: 10,
                },
              }}
            >
              <style.WrapIcon>
                <Io5Icons.IoSettingsSharp id='onSet' style={{color: tabState.onSet? '#3CB371':'#7a7a7a', fontSize: '28px', margin: '16px 16px'}} onClick={tabHandler}/>
                <Io5Icons.IoAccessibility id='onTrans' style={{color: tabState.onTrans? '#3CB371':'#7a7a7a', fontSize: '28px', margin: '16px 16px'}} onClick={tabHandler}/>
                <Io5Icons.IoChatbox id='onChat' style={{color: tabState.onChat? '#3CB371':'#7a7a7a', fontSize: '28px', margin: '16px 16px'}} onClick={tabHandler}/>
                <MdIcons.MdExitToApp id='onExit' style={{ color: tabState.onExit? '#3CB371':'#7a7a7a', fontSize: '28px', margin: '16px 16px'}} onClick={tabHandler}/>
                <IoIcons.IoMdStopwatch id='onWatch' style={{color: tabState.onWatch? '#3CB371':'#7a7a7a', fontSize: '30px', margin: '16px 16px'}} onClick={tabHandler}/>
              </style.WrapIcon>
            </motion.div>

          </style.Sidebar>
          <motion.div
              style={{
                boxShadow: 'rgb(0 0 0 / 10%) 7px 0px 7px 0px',
              }}
              animate={{
                width : tabState.onChat? "100%" : "0",
                height : tabState.onChat? "100%" : "0",
                display : tabState.onChat? "flex" : "none",

                transition: {
                  duration: 0.5,
                  damping: 10,
                },
              }}
            >
          <Chatting style={{display: tabState.onChat ? "visible" : "none"}} />
          </motion.div>
          { tabState.onWatch && <Timer/> } 
        </style.NavMenu>
        { tabState.onSet && <SettingModal/> } 
    </>
  );
}

export default Sidebar;