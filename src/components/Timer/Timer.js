import React, { Component } from "react";
import * as moment from "moment";
import * as style from "./styles";

export default class Timer extends Component {
  state = {
    time: 0,
    isStarted: false
  };

  startTimer = () => {
    this.setState({
      isStarted: true,
      time: this.state.time
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
      isStarted: false
    });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      time: 0,
      isStarted: false
    });
  };

  render() {
    return (
      <style.Container>
        <style.TimeCircle>
          <h4>
            {moment()
              .hour(0)
              .minute(0)
              .second(this.state.time)
              .format("HH : mm : ss")}
          </h4>
          <button onClick={this.startTimer}> start </button>
          <button onClick={this.stopTimer}> stop </button>
          <button onClick={this.resetTimer}> reset </button>
        </style.TimeCircle>
      </style.Container>
    );
  }
}