import React, { Component } from "react";
import * as moment from "moment";
import * as style from "./styles";
import * as BsIcons from "react-icons/bs";

export default class Timer extends Component {


  state = {
    time: 0,
    isStarted: false,
    stop : false,
    reset : false
  };

  startTimer = () => {
    this.setState({
      isStarted: true,
      time: this.state.time,
    });


    this.timer = setInterval(
      () =>
        this.setState({
          time: this.state.time + 1
        }),
      1000
    );
  };

  stopTimer = () => {
    this.setState({
      isStarted: false,
      stop: true
    });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      time: 0,
      isStarted: false,
      start: false,
      stop: false,
      
    });
  };

  render() {
    return (
      <style.Container>
        <style.TimeCircle>
          <h4 style={{marginBottom: 0, marginTop: "36px"}}>
            {moment()
              .hour(0)
              .minute(0)
              .second(this.state.time)
              .format("HH : mm : ss")}
          </h4>

          {!this.state.isStarted && !this.state.stop && !this.state.reset && <BsIcons.BsFillPlayFill style={{color: this.state.isStarted? '#3CB371':'#7a7a7a', fontSize: '28px', margin: '16px 16px'}} onClick={this.startTimer}/>}
          {this.state.isStarted && <BsIcons.BsPauseFill style={{color: this.state.reset? '#3CB371':'#7a7a7a', fontSize: '28px', margin: '16px 16px'}} onClick={this.stopTimer}/>}
          {!this.state.isStarted && this.state.stop && <BsIcons.BsFillReplyAllFill style={{color: this.state.reset? '#3CB371':'#7a7a7a', fontSize: '28px', margin: '16px 16px'}} onClick={this.resetTimer}/>}

        </style.TimeCircle>
      </style.Container>
    );
  }
}