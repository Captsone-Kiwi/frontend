import styled from "styled-components";
import Select from 'react-select'


export const ModalContainer = styled.div`
  position: absolute;
  width: 620px;
  height: 420px;
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
  width: 600px;
  height: 340px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  z-index:2;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 52%;;
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

export const StyledSelect = styled(Select)`
  width: 150px;
  background: #FFFFFF;
  border: 1px solid #929292;
  box-sizing: border-box;
`

export const StyledLabel = styled.div`
  color: #86979E;
  font-size: 10px;
  width: 28px; 
  padding-right: 16px;
  padding-left: 16px;
`