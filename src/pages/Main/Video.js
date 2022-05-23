// import React, {useRef} from "react";
import React, { useRef } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

// const Container = styled.div`
//     bottom: 0;
//     position: absolute;
//     left: 75%;
//     transform: translate(-50%, -20%);
//     z-index: 1;
// `;
export const StyledVideo = styled.video`
  width: 180px;
  height: 120px;
  box-sizing: border-box;
  border-radius: 12px;
  object-fit: cover;
  background-color: black;
  z-index: 1;
`;

// export const Name = styled.div`
//     position: absolute;
//     display: flex;
//     z-index: 1;
//     background-color: black;
//     color: white;
//     bottom: 11px;
//     left: 7px
// `;

// const NameBlock = ({title}) => (
//     <>
//       <Name>{title}</Name>
//     </>
//   )

const Video = () => {
  // const location = useLocation().search;
  // const {username, room} = queryString.parse(location);
  const videos = useRef([]);

  return (
    <>
      {/* <NameBlock title={username} /> */}
      <StyledVideo
        ref={videos}
        poster="/images/common/poster.png"
        autoPlay
        id="localVideo"
      />

      {/* <NameBlock title="remote1" /> */}
      {/* <StyledVideo ref={videos}  autoPlay id="remoteVideo1" /> */}

      {/* <NameBlock title="remote1" /> */}
      {/* <StyledVideo ref={videos}  autoPlay id="remoteVideo2" /> */}
    </>
  );
};

export default Video;
