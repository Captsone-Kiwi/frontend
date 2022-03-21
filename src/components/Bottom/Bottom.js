import React, { useState } from 'react';
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as style from "./styles";

function Bottom() {

  const [onCam, setOnCam] = useState(false);
  const [onMic, setOnMic] = useState(false);
  const mic = () => setOnMic(!onMic);
  const cam = () => setOnCam(!onCam);


  return (
    <>
      <style.Container>
          {onMic ? (<BsIcons.BsFillMicFill style={{ color: '#3CB371', fontSize: '28px', margin: '0px 16px'}} onClick={mic}/>
          ) : (<BsIcons.BsFillMicMuteFill style={{ color: '#7A7A7A', fontSize: '28px', margin: '0px 16px'}} onClick={mic}/>)}

          <style.CallButton>
            <MdIcons.MdCallEnd style={{ color: '#fff', fontSize: '24px'}}/>
          </style.CallButton >

          {onCam ? (<BsIcons.BsCameraVideoFill style={{ color: '#3CB371', fontSize: '28px', margin: '0px 16px'}} onClick={cam}/>
          ) : (<BsIcons.BsCameraVideoOffFill style={{ color: '#7A7A7A', fontSize: '28px', margin: '0px 16px'}} onClick={cam}/>)}

        </style.Container>      
    </>
  );
}

export default Bottom;