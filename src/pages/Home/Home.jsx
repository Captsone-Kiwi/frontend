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
            I will always remember The day you kissed my lips Light as a feather
            And it went just like this No, it's never been better Than the
            summer of 2002
          </style.mainTextDetail>
          <style.btnContainer>
            <style.Button onClick={() => navigator("/signup")}>
              Sign Up
            </style.Button>
            <style.Button onClick={() => navigator("/login")}>
              Login
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
