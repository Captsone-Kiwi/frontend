import styled from "styled-components";
import Select from 'react-select'


export const ModalContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 320px;
  background: #F7F7F7;
  border-radius: 24px 24px 12px 12px;
  display: flex;
  z-index:2;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;

export const WrapContainer = styled.div`
  position: absolute;
  width: 270px;
  height: 260px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  z-index:2;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 56%;;
  align-items: center;
  justify-content: space-around;
  
`;

export const LogoDiv = styled.div`
  position: absolute;
  width: 60px;
  height: 40px;
  margin-right: 24px;
  background: url(images/common/logo.png);
  background-repeat: no-repeat;
  background-size: contain;
  transform: translate(-50%, 0%);
  left: 50%;
  top: 2%;
  z-index: 3
`;

export const removeBtn = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  background: url(images/common/removeBtn.png);
  background-repeat: no-repeat;
  background-size: contain;
  right: 20px;
  top: 2%;
  z-index: 3
`;

export const columnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const rowDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px
`;

export const styleLabel1 = styled.div`
  text-align: center;
  color: '#111111';
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 10px

`;

export const styleLabel2 = styled.div`
  text-align: center;
  color: #929292;
  font-size: 11px;
`;

export const btnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items : center;
  margin-top: 15px;
`;

export const Button = styled.button`
  width: 90%;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 99px;
  background-color: white;
  border: 2px solid #3cb371;
  color: #3cb371;
  margin: 10px 10px 0 0;
  &:hover {
    cursor: pointer;
    background-color: #3cb371;
    color: white;
  }
`;