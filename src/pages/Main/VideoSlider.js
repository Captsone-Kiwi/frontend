import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledVideo } from './Video.js';
import styled from "styled-components";

export const Video = styled.video`
    width: 180px;
    height: 120px;
    box-sizing: border-box;
    border-radius: 12px;
    object-fit: cover;
    background-color: black;
    z-index:1;
`;

const Name = styled.div`
    position: absolute;
    bottom: 4px;
    padding: 4px;
    display: flex;
    z-index: 4;
    background-color: black;
    color: white;
    border-radius: 20px;
`;

const NameBlock = ({title}) => (
    <>
      <Name>{title}</Name>
    </>
  )
  
function User({ user }) {
    return (
      <div>
        <NameBlock title={user.username} style={{position:'absolute'}}/>
        <Video autoPlay id={user.id}/>
      </div>
    );
  }

export default class VideoSlider extends Component {
  state = {
    display: true,
    width: 600,
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    const users = [
        {
          id: "remoteVideo1",
          username: 'sohyeon',
          email: 'sohyeon@gmail.com'
        },
        {
          id: "remoteVideo2",
          username: 'jinwoo',
          email: 'jinwoo@example.com'
        },
        {
          id: "remoteVideo3",
          username: 'chanmi',
          email: 'chanmi@example.com'
        },
        {
            id: "remoteVideo4",
            username: 'professor',
            email: 'professor@example.com'
          }
      ];

    return (
      <div>
        <button
          className="button"
          onClick={() =>
            this.setState({
              width: this.state.width + 100
            })
          }
        >
          {" "}
          increase{" "}
        </button>
        <button
          className="button"
          onClick={() =>
            this.setState({
              width: this.state.width - 100
            })
          }
        >
          {" "}
          decrease{" "}
        </button>
        <button
          className="button"
          onClick={() =>
            this.setState({
              display: !this.state.display
            })
          }
        >
          {" "}
          toggle{" "}
        </button>
        <div
          style={{
            position: 'absolute',
            transform: 'translate(-50%, 0%)',
            left: '50%',
            top: '2%',
            width: this.state.width + "px",
            display: this.state.display ? "block" : "none",
            zIndex:3
          }}
        >
          <Slider {...settings}>
            {users.map(user => (
                <User user={user} />
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}