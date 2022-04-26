import React from "react";
import * as style from "./styles";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigator = useNavigate();

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
            <style.Button onClick={() => navigator("/interviewlist")}>
              Start Kiwi
            </style.Button>
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
