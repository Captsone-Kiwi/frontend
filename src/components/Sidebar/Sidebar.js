import React, { useState } from 'react';
import * as MdIcons from 'react-icons/md';
import * as Io5Icons from "react-icons/io5";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as style from "./styles";
import Timer from '../Timer/Timer.js';
import SettingModal from '../SettingModal/SettingModal.js';
import ExitModal from '../ExitModal/ExitModal.js';
import QuestionBox from '../Evaluation/QuestionBox.js';
import Chatting from '../Chatting/Chatting.js';
import {motion} from "framer-motion";
import Sample from './Sample';

function Sidebar() {

  const [tabState, setTabState] = useState({
    onSet: false,
    onCheck: false,
    onEval: false,
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
                <FaIcons.FaStickyNote id='onCheck' style={{color: tabState.onCheck? '#3CB371':'#7a7a7a', fontSize: '28px', margin: '16px 16px'}} onClick={tabHandler}/>
                <BsIcons.BsCheckCircleFill id='onEval' style={{color: tabState.onEval? '#3CB371':'#7a7a7a', fontSize: '28px', margin: '16px 16px'}} onClick={tabHandler}/>
                <Io5Icons.IoAccessibility id='onTrans' style={{color: tabState.onTrans? '#3CB371':'#7a7a7a', fontSize: '28px', margin: '16px 16px'}} onClick={tabHandler}/>
                <Io5Icons.IoChatbox id='onChat' style={{color: tabState.onChat? '#3CB371':'#7a7a7a', fontSize: '28px', margin: '16px 16px'}} onClick={tabHandler}/>
                <MdIcons.MdExitToApp id='onExit' style={{ color: tabState.onExit? '#3CB371':'#7a7a7a', fontSize: '28px', margin: '16px 16px'}} onClick={tabHandler}/>
                <IoIcons.IoMdStopwatch id='onWatch' style={{color: tabState.onWatch? '#3CB371':'#7a7a7a', fontSize: '30px', margin: '16px 16px'}} onClick={tabHandler}/>
              </style.WrapIcon>
            </motion.div>

          </style.Sidebar>
          { tabState.onEval &&  <QuestionBox/> }
          { tabState.onChat &&  <Chatting/> }
          { tabState.onWatch && <Timer/> }
          { tabState.onCheck && <Sample/> } 

        </style.NavMenu>
        { tabState.onSet && <SettingModal/> }
        { tabState.onExit && <ExitModal/> }

    </>
  );
}

export default Sidebar;