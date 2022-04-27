import React, { useState } from 'react';
import * as BsIcons from "react-icons/bs";
import * as style from "./styles";
import $ from 'jquery'; 
import "./styles.css";
import Video from '../../pages/Main/Video.js';
import { render } from '@testing-library/react';


class SettingModal extends React.Component {
  componentDidMount() {
    // 출력 선택
    const videoElement = document.querySelector('video');
    const audioInputSelect = document.querySelector('select#audioSource');
    const audioOutputSelect = document.querySelector('select#audioOutput');
    const videoSelect = document.querySelector('select#videoSource');
    const selectors = [audioInputSelect, audioOutputSelect, videoSelect];
    
    audioOutputSelect.disabled = !('sinkId' in HTMLMediaElement.prototype);
    
    function gotDevices(deviceInfos) {
      // Handles being called several times to update labels. Preserve values.
      const values = selectors.map(select => select.value);
      selectors.forEach(select => {
        while (select.firstChild) {
          select.removeChild(select.firstChild);
        }
      });
      for (let i = 0; i !== deviceInfos.length; ++i) {
        const deviceInfo = deviceInfos[i];
        const option = document.createElement('option');
        option.value = deviceInfo.deviceId;
        if (deviceInfo.kind === 'audioinput') {
          option.text = deviceInfo.label || `microphone ${audioInputSelect.length + 1}`;
          audioInputSelect.appendChild(option);
        } else if (deviceInfo.kind === 'audiooutput') {
          option.text = deviceInfo.label || `speaker ${audioOutputSelect.length + 1}`;
          audioOutputSelect.appendChild(option);
        } else if (deviceInfo.kind === 'videoinput') {
          option.text = deviceInfo.label || `camera ${videoSelect.length + 1}`;
          videoSelect.appendChild(option);
        } else {
          console.log('Some other kind of source/device: ', deviceInfo);
        }
      }
      selectors.forEach((select, selectorIndex) => {
        if (Array.prototype.slice.call(select.childNodes).some(n => n.value === values[selectorIndex])) {
          select.value = values[selectorIndex];
        }
      });
    }
    
    navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);
    
    // Attach audio output device to video element using device/sink ID.
    function attachSinkId(element, sinkId) {
      if (typeof element.sinkId !== 'undefined') {
        element.setSinkId(sinkId)
            .then(() => {
              console.log(`Success, audio output device attached: ${sinkId}`);
            })
            .catch(error => {
              let errorMessage = error;
              if (error.name === 'SecurityError') {
                errorMessage = `You need to use HTTPS for selecting audio output device: ${error}`;
              }
              console.error(errorMessage);
              // Jump back to first output device in the list as it's the default.
              audioOutputSelect.selectedIndex = 0;
            });
      } else {
        console.warn('Browser does not support output device selection.');
      }
    }
    
    function changeAudioDestination() {
      const audioDestination = audioOutputSelect.value;
      attachSinkId(videoElement, audioDestination);
    }
    
    function gotStream(stream) {
      window.stream = stream; // make stream available to console
      videoElement.srcObject = stream;
      // Refresh button list in case labels have become available
      return navigator.mediaDevices.enumerateDevices();
    }
    
    function handleError(error) {
      console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
    }
    
    function start() {
      if (window.stream) {
        window.stream.getTracks().forEach(track => {
          track.stop();
        });
      }
      const audioSource = audioInputSelect.value;
      const videoSource = videoSelect.value;
      const constraints = {
        audio: {deviceId: audioSource ? {exact: audioSource} : undefined},
        video: {deviceId: videoSource ? {exact: videoSource} : undefined}
      };
      navigator.mediaDevices.getUserMedia(constraints).then(gotStream).then(gotDevices).catch(handleError);
    }
    
    audioInputSelect.onchange = start;
    audioOutputSelect.onchange = changeAudioDestination;
    
    videoSelect.onchange = start;
    
    start();
    
    // 파장
    function SoundMeter(context) {
      this.context = context;
      this.instant = 0.0;
      this.slow = 0.0;
      this.clip = 0.0;
      this.script = context.createScriptProcessor(2048, 1, 1);
      const that = this;
      this.script.onaudioprocess = function(event) {
        const input = event.inputBuffer.getChannelData(0);
        let i;
        let sum = 0.0;
        let clipcount = 0;
        for (i = 0; i < input.length; ++i) {
          sum += input[i] * input[i];
          if (Math.abs(input[i]) > 0.99) {
            clipcount += 1;
          }
        }
        that.instant = Math.sqrt(sum / input.length);
        that.slow = 0.95 * that.slow + 0.05 * that.instant;
        that.clip = clipcount / input.length;
      };
    }
    
    SoundMeter.prototype.connectToSource = function(stream, callback) {
      console.log('SoundMeter connecting');
      try {
        this.mic = this.context.createMediaStreamSource(stream);
        this.mic.connect(this.script);
        // necessary to make sample run, but should not be.
        this.script.connect(this.context.destination);
        if (typeof callback !== 'undefined') {
          callback(null);
        }
      } catch (e) {
        console.error(e);
        if (typeof callback !== 'undefined') {
          callback(e);
        }
      }
    };
    
    SoundMeter.prototype.stop = function() {
      console.log('SoundMeter stopping');
      this.mic.disconnect();
      this.script.disconnect();
    };


 


    const instantMeter = document.querySelector('#instant meter');
    const instantValueDisplay = document.querySelector('#instant .value');

    const constraints = window.constraints = {
      audio: true,
      video: false
    };
    
    let meterRefresh = null;

    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      window.audioContext = new AudioContext();
    } catch (e) {
      alert('Web Audio API not supported.');
    }

    navigator.mediaDevices
    .getUserMedia(constraints)
    .then(handleSuccess)
    .catch(handleError);

    $('#audioSource').on('change', function() {
      window.stream.getTracks().forEach(track => track.stop());
      window.soundMeter.stop();
      window.audioContext.close();
      clearInterval(meterRefresh);
      instantMeter.value = instantValueDisplay.innerText = '';
      
        try {
          window.AudioContext = window.AudioContext || window.webkitAudioContext;
          window.audioContext = new AudioContext();
        } catch (e) {
          alert('Web Audio API not supported.');
        }

        navigator.mediaDevices
        .getUserMedia(constraints)
        .then(handleSuccess)
        .catch(handleError);
      });
    
  
  

  function handleSuccess(stream) {
    // Put variables in global scope to make them available to the
    // browser console.
    window.stream = stream;
    const soundMeter = window.soundMeter = new SoundMeter(window.audioContext);
    soundMeter.connectToSource(stream, function(e) {
      if (e) {
        alert(e);
        return;
      }
      meterRefresh = setInterval(() => {
        instantMeter.value = instantValueDisplay.innerText =
          soundMeter.instant.toFixed(2);
      }, 200);
    });
  }
  function handleError(error) {
    console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
  }  
}


render(){

  return (
    <>
      <style.ModalContainer>
        {/* <style.removeBtn onClick={remove}/> */}
        <style.LogoDiv/>
        <style.WrapContainer>
            <Video/>
            <style.columnDiv>
            <style.rowDiv>
                <BsIcons.BsCameraVideoFill style={{ color: '#86979E', fontSize: '28px', margin: '0px 16px'}}/>
                <select id="videoSource"></select>
              </style.rowDiv>

              <style.rowDiv>
                <BsIcons.BsFillMicFill style={{ color: '#86979E', fontSize: '28px', margin: '0px 16px'}}/>
                <select id="audioSource"></select>
              </style.rowDiv>
              
              <div id="instant">
                <style.rowDiv>
                  <style.StyledLabel>input</style.StyledLabel>
                  <meter high="0.25" max="1" value="0"></meter>
                  <div className="value"></div>
                </style.rowDiv>
              </div>
              <style.rowDiv>
                <BsIcons.BsFillVolumeUpFill style={{ color: '#86979E', fontSize: '28px', margin: '0px 16px'}}/>
                <select id="audioOutput"></select>
              </style.rowDiv>
              
            </style.columnDiv>
        </style.WrapContainer>
      </style.ModalContainer>
    </>
  );
}
}

export default SettingModal;