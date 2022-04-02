import styled from "styled-components";


export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border-right: 1px solid #E1E5E3;

  
`

export const WrapIcon = styled.div`
  display: flex;
  height: 300px;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: fit-content;
`

export const NavMenu = styled.div`
  background-color: #f7f7f7;
  width: fit-content;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: end;
  position: absolute;
  top: 0;
  left: 0;
  transition: 850ms;
  z-index:1
`

export const Logo = styled.div`
  background-image: url("Logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  margin: 10px;
  width: 50px;
  height: 40px;
`