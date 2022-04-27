import React from 'react';
import Bottom from "../../components/Bottom/Bottom.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import Video from './Video.js';
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import GdevelopPage from '../../pages/GDevelop/GdevelopPage.js';

function Main() {

  const Container = styled.div`
    position: absolute;
    bottom: 0;
    width: 200px;
    height: 150px;
    left: 75%;
    border-radius: 20px;
    z-index: 1;
    border: 7px solid #FFFFFF;

`;

  const Name = styled.div`
    position: absolute;
    display: flex;
    z-index: 1;
    background-color: black;
    color: white;
    bottom: 0px;
    left: 0px;
    font-size: 12px;
    padding: 2px;
    border-radius: 20px;

`;

const NameBlock = ({title}) => (
    <>
      <Name>{title}</Name>
    </>
  )


  if(!window.location.hash) {
    window.location = window.location + '#loaded';
    window.location.reload();
  }

  const location = useLocation().search;
  const {username, room} = queryString.parse(location);

  return (
    <>
        <Sidebar style={{position:'absolute', zIndex:1}}/>
        <Bottom style={{position:'absolute'}}/>
        <Container>
            <Video/>
            <NameBlock title={username} />
        </Container>

    </>
  );
}

export default Main;