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

export const Main = styled.div`
  font-family: sans-serif;
  background: #fff;
  display: flex;
  flex-direction: columns;
  z-index: 10;
  width: 100%;
`;

export const DropDownContainer = styled.div`
  margin: 0 auto;
  display: flex;
  height: fit-content;
  flex-direction: column;
  margin-top: 15px;
  width: 100%;
`;

export const DropDownHeader = styled.div`
  width: 150px;
  align-self: flex-end;
  margin-right: 17px;
  cursor: pointer;
  margin-bottom: 7px;
  border-radius: 20px;
  padding: 0.4em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: #fff;
  background: #709d84;
`;

export const DropDownListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DropDownList = styled.ul`
  position: absolute;
  z-index: 11;
  width: 160px;
  align-self: flex-end;
  cursor: pointer;
  padding: 0;
  margin: 0 20px;
  text-align: center;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #7a7a7a;
  font-size: 18px;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled.li`
  cursor: pointer;
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #000;
  }
`;
