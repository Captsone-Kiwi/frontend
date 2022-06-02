import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div``;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border-right: 1px solid #e1e5e3;
`;

export const WrapIcon = styled.div`
  display: flex;
  height: 400px;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: fit-content;
`;

export const NavMenu = styled.div`
  background-color: #fff;
  width: fit-content;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  top: 0;
  left: 0;
  transition: 850ms;
  position: absolute;
  z-index: 5;
`;

export const Logo = styled.div`
  background-image: url("Logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  margin: 10px;
  width: 50px;
  height: 40px;
`;

export const resumeDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  overflow-y: auto;
  overflow-x: auto;
`;

export const infoDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  align-self: center;
`;

export const textDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const infoText = styled.p`
  font-family: sans-serif;
  font-size: 15px;
  font-weight: bold;
  color: #7a7a7a;
  margin-block: 5px;
  width: fit-content;
  align-self: center;
`;
