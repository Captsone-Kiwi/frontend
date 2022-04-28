import React, {useRef} from "react";
import styled from "styled-components";

export const StyledVideo = styled.video`
    width: 180px;
    height: 120px;
    box-sizing: border-box;
    border-radius: 12px;
    object-fit: cover;
    background-color: black;
    z-index:1;
`;


const Video = () => {
    
    const videos = useRef([]);
    navigator.mediaDevices.getUserMedia({audio: false, video: true}).then((mediaStream) => {
        videos.current.srcObject = mediaStream;
        videos.current.onloadedmetadata = function(e) {
            videos.current.play();
        };
    })

    return (
        
        <StyledVideo ref={videos}  autoPlay />
    );
};

export default Video;