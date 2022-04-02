import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background: white;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.16);
  z-index: 3;
  align-items: center;
`;

export const Logo = styled.img`
  width: 60px;
  height: 40px;
  margin-right: 24px;
  margin-left: 4rem;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const menuRight = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const menuLeft = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const MenuBtn = styled.button`
  font-size: 14px;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0 1rem;
  color: #7a7a7a;
  &.active {
    color: #3cb371;
  }
`;
