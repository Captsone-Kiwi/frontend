import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledVideo } from "./Video.js";
import styled from "styled-components";
import { useRadio } from "@chakra-ui/radio";

export const Video = styled.video`
  width: 180px;
  height: 120px;
  box-sizing: border-box;
  border-radius: 12px;
  object-fit: cover;
  background-color: black;
  z-index: 1;
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

const NameBlock = ({id}) => (
    <>
      <Name>{id}</Name>
    </>
  )
  
function User({ user}) {
    // console.log(user)
    return (
      <div>
        <NameBlock id={user.name} style={{position:'absolute'}}/>
        <Video autoPlay id={user.id}/>
      </div>
    );
  }

export default class VideoSlider extends Component{


  state = {
    display: true,
    width: 600,
  };

  render() {


    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

    const users = [
        {
          "email": "test23",
          "name": "professor"
      },
      {
          "email": "test",
          "name": "chanmi"
      },
      {
        "email": "test",
        "name": "jinwoo"
      },
      {
        "email": "test",
        "name": "daeyoung"
      }
    ]

    return (
      <div>
        <button
          className="button"
          onClick={() =>
            this.setState({
              width: this.state.width + 100,
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
              width: this.state.width - 100,
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
              display: !this.state.display,
            })
          }
        >
          {" "}
          toggle{" "}
        </button>
        <div
          style={{
            position: "absolute",
            transform: "translate(-50%, 0%)",
            left: "50%",
            top: "2%",
            width: this.state.width + "px",
            display: this.state.display ? "block" : "none",
            zIndex: 3,
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
