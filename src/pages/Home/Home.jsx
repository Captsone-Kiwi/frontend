import React, { useState, useEffect } from "react";
import * as style from "./styles";
import { useNavigate } from "react-router-dom";
import authAPI from "../../api/authAPI";

function Home() {
  const navigator = useNavigate();
  const [user, setUserInfo] = useState();

  const checkUser = async () => {
    await authAPI
      .getUser()
      .then((res) => {
        setUserInfo(res.data.data);
        navigator("/interviewlist");
        console.log("checkUser result", res);
      })
      .catch((error) => {
        alert("로그인을 해야 이용할 수 있습니다.");
        navigator("/login");
        console.log("checkUser error", error);
      });
  };

  return (
    <style.Container>
      <style.mainContainer>
        <style.mainImg src="/images/home/homeImg.png" />
        <style.textContainer>
          <style.mainText>The real feeling of the interview</style.mainText>
          <style.mainTextBold>
            enjoy the <span style={{ color: "#3CB371" }}>Kiwi</span>
          </style.mainTextBold>
          <style.mainTextDetail>
            Metabus System Optimized for Non-face-to-face Interviews
          </style.mainTextDetail>
          <style.mainTextDetail>
            Reduce recruitment costs for businesses and job seekers
          </style.mainTextDetail>
          <style.mainTextDetail>
            by developing a meta-bus system optimized
          </style.mainTextDetail>
          <style.mainTextDetail>
            for non-face-to-face interviews through the device-free web
          </style.mainTextDetail>
          <style.btnContainer>
            <style.Button onClick={checkUser}>Start Kiwi</style.Button>
          </style.btnContainer>
        </style.textContainer>
      </style.mainContainer>
      <style.imgContainer>
        <style.roomImg src="/images/home/roomImg1.png" />
        <style.roomImg src="/images/home/roomImg2.png" />
      </style.imgContainer>
      <style.imgContainer>
        <style.roomImg src="/images/home/roomImg3.png" />
        <style.roomImg src="/images/home/roomImg4.png" />
      </style.imgContainer>
      <style.adContainer>
        <style.adText>Simple video conferencing and messaging</style.adText>
        <style.adImg src="/images/home/advantages.png" />
      </style.adContainer>
    </style.Container>
  );
}
export default Home;
