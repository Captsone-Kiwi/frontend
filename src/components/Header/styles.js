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
  &:hover {
    cursor: pointer;
  }
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

export const userName = styled.p`
  font-size: 15px;
  color: #929292;
  margin-right: 55px;
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

export const LoginButton = styled.button`
  width: 80px;
  height: 30px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 99px;
  background-color: rgba(60, 179, 113, 0.2);
  border: 2px solid rgba(60, 179, 113, 0.2);
  color: #3cb371;
  margin: 0 10px 0 0;
  &:hover {
    cursor: pointer;
  }
`;

export const SignUpButton = styled.button`
  width: 80px;
  height: 30px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 99px;
  background-color: #3cb371;
  border: 2px solid #3cb371;
  color: white;
  margin: 0 55px 0 0;
  &:hover {
    cursor: pointer;
  }
`;

export const profileIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  background-repeat: no-repeat;
  background-size: contain;
  &:hover {
    cursor: pointer;
  }
`;
