import React, {useRef} from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';


const Container = styled.div`
    bottom: 0;
    position: absolute;
    left: 75%;
    transform: translate(-50%, -20%);
    z-index: 1;
`;
export const StyledVideo = styled.video`
    width: 200px;
    height: 150px;
    border: 7px solid #FFFFFF;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 12px;
    object-fit: cover;
    background-color: black;

`;

export const Name = styled.div`
    position: absolute;
    display: flex;
    z-index: 1;
    background-color: black;
    color: white;
    bottom: 11px;
    left: 7px
`;

const NameBlock = ({title}) => (
    <>
      <Name>{title}</Name>
    </>
  )

const Video = () => {
    const location = useLocation().search;
    const {username, room} = queryString.parse(location);
    const videos = useRef([]);

    navigator.mediaDevices.getUserMedia({audio: true, video: true}).then((mediaStream) => {
        videos.current.srcObject = mediaStream;
        videos.current.onloadedmetadata = function(e) {
            videos.current.play();
        };
    })

    return (
        <Container>
            <NameBlock title={username} />
            <StyledVideo ref={videos}  autoPlay />
        </Container>
    );
};

export default Video;