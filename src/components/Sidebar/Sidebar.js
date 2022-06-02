import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

import * as MdIcons from "react-icons/md";
import * as Io5Icons from "react-icons/io5";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as style from "./styles";

import Timer from "../Timer/Timer.js";
import SettingModal from "../SettingModal/SettingModal.js";
import ExitModal from "../ExitModal/ExitModal.js";
import EvalSide from "../EvaluationSide/EvalSide.js";
import Chatting from "../Chatting/Chatting.js";
import { motion } from "framer-motion";
import Sample from "./Sample";
import queryString from "query-string";

import authAPI from "../../api/authAPI";
import interviewAPI from "../../api/interviewAPI";
import AuthContext from "../../store";

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
    const newTabState = { ...tabState };
    const activeTab = e.currentTarget.id;

    if (newTabState[activeTab] === true) {
      // if (activeTab === "onEval"){
      //   alert
      // }
      newTabState[activeTab] = false;
    } else {
      for (let key in newTabState) {
        key === activeTab
          ? (newTabState[key] = true)
          : (newTabState[key] = false);
      }
    }

    setTabState(newTabState);
  };

  const [memberInfo, setMemberInfo] = useState({ memberType: 0 });
  const [state, actions] = useContext(AuthContext);
  useEffect(() => {
    getMemberInfo();
  }, [state]);
  const getMemberInfo = async () => {
    await authAPI
      .getUser()
      .then((res) => {
        setMemberInfo(res.data.data);
        console.log("getMember result", res.data.data);
      })
      .catch((error) => console.log("getMember error", error));
  };

  //예약된 인터뷰 & 참여자 정보 가져오기
  const location = useLocation().search;
  const { username, room } = queryString.parse(location);
  const [interviewInfo, setInterviewInfo] = useState([
    {
      interview_name: "",
      startDate: "",
      startTime: "",
      template: 0,
      interviewee: [""],
      interviewer: [""],
    },
  ]);
  // console.log("interviewInfo", interviewInfo);

  // 선택한 템플릿 골라내기
  const selectedTemplate = interviewInfo.filter((e) => e.id == room);
  // .map((temp) => temp.temp);

  // console.log("selectedTemplate", selectedTemplate);

  useEffect(() => {
    getInterviewInfo();
  }, [state]);
  const getInterviewInfo = async () => {
    await interviewAPI
      .getInterview()
      .then((res) => {
        setInterviewInfo(res.data.data);
        // console.log("getInterviewInfo result", res.data);
      })
      .catch((error) => console.log("getInterviewInfo error", error));
  };

  return (
    <>
      <style.NavMenu>
        <style.Content />
        <style.Sidebar>
          <style.Logo />
          {/* 면접관인 경우 */}
          {memberInfo.memberType === 1 ? (
            <motion.div
              style={{
                position: "absolute",
                width: "100%",
              }}
              animate={{
                bottom: tabState.onWatch ? "160px" : "10px",

                transition: {
                  duration: 0.5,
                  damping: 10,
                },
              }}
            >
              <style.WrapIcon>
                <Io5Icons.IoSettingsSharp
                  id="onSet"
                  style={{
                    color: tabState.onSet ? "#3CB371" : "#7a7a7a",
                    fontSize: "28px",
                    margin: "16px 16px",
                  }}
                  onClick={tabHandler}
                />
                <FaIcons.FaStickyNote
                  id="onCheck"
                  style={{
                    color: tabState.onCheck ? "#3CB371" : "#7a7a7a",
                    fontSize: "28px",
                    margin: "16px 16px",
                  }}
                  onClick={tabHandler}
                />
                <BsIcons.BsCheckCircleFill
                  id="onEval"
                  style={{
                    color: tabState.onEval ? "#3CB371" : "#7a7a7a",
                    fontSize: "28px",
                    margin: "16px 16px",
                  }}
                  onClick={tabHandler}
                />
                <Io5Icons.IoChatbox
                  id="onChat"
                  style={{
                    color: tabState.onChat ? "#3CB371" : "#7a7a7a",
                    fontSize: "28px",
                    margin: "16px 16px",
                  }}
                  onClick={tabHandler}
                />
                <MdIcons.MdExitToApp
                  id="onExit"
                  style={{
                    color: tabState.onExit ? "#3CB371" : "#7a7a7a",
                    fontSize: "28px",
                    margin: "16px 16px",
                  }}
                  onClick={tabHandler}
                />
                <IoIcons.IoMdStopwatch
                  id="onWatch"
                  style={{
                    color: tabState.onWatch ? "#3CB371" : "#7a7a7a",
                    fontSize: "30px",
                    margin: "16px 16px",
                  }}
                  onClick={tabHandler}
                />
              </style.WrapIcon>
            </motion.div>
          ) : (
            // 면접자인 경우 -> 평가항목, 이력서 안보이게 하기
            <motion.div
              style={{
                position: "absolute",
                width: "100%",
              }}
              animate={{
                bottom: tabState.onWatch ? "160px" : "0px",

                transition: {
                  duration: 0.5,
                  damping: 10,
                },
              }}
            >
              <style.WrapIcon style={{ height: "320px" }}>
                <Io5Icons.IoSettingsSharp
                  id="onSet"
                  style={{
                    color: tabState.onSet ? "#3CB371" : "#7a7a7a",
                    fontSize: "28px",
                    margin: "16px 16px",
                  }}
                  onClick={tabHandler}
                />
                <Io5Icons.IoChatbox
                  id="onChat"
                  style={{
                    color: tabState.onChat ? "#3CB371" : "#7a7a7a",
                    fontSize: "28px",
                    margin: "16px 16px",
                  }}
                  onClick={tabHandler}
                />
                <MdIcons.MdExitToApp
                  id="onExit"
                  style={{
                    color: tabState.onExit ? "#3CB371" : "#7a7a7a",
                    fontSize: "28px",
                    margin: "16px 16px",
                  }}
                  onClick={tabHandler}
                />
                <IoIcons.IoMdStopwatch
                  id="onWatch"
                  style={{
                    color: tabState.onWatch ? "#3CB371" : "#7a7a7a",
                    fontSize: "30px",
                    margin: "16px 16px",
                  }}
                  onClick={tabHandler}
                />
              </style.WrapIcon>
            </motion.div>
          )}
        </style.Sidebar>

        {tabState.onEval && (
          <EvalSide tabState={tabState} selectedTemplate={selectedTemplate} />
        )}
        {tabState.onChat && <Chatting />}
        {tabState.onWatch && <Timer />}
        {tabState.onCheck && <Sample name={"백소현"} />}
      </style.NavMenu>
      {tabState.onSet && <SettingModal />}
      {tabState.onExit && <ExitModal />}
    </>
  );
}

export default Sidebar;
