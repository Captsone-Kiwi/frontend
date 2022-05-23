import styled from "styled-components";
import { Checkbox } from "semantic-ui-react";

export const mainContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const interviewContainer = styled.div`
  display: flex;
  width: 80%;
`;

//면접 예약 페이지 부분
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export const prevBtn = styled.button`
  width: fit-content;
  border: none;
  background-color: white;
  color: #3cb371;
  font-weight: bold;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;

export const prevImg = styled.img`
  width: 7px;
  margin-right: 5px;
`;

export const Span = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-left: 10px;
`;

export const reserveContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const reserveSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 65px;
`;

export const reserveTitle = styled.p`
  width: 160px;
  font-size: 16px;
  font-weight: bold;
  color: #7a7a7a;
  margin-left: 10px;
  margin-top: 10px;
`;

export const reserveName = styled.input`
  width: 70%;
  height: 30px;
  border: 1px solid #929292;
  border-radius: 12px;
  padding: 6px 10px;
`;

export const detailContainer = styled.div`
  width: 73%;
  display: flex;
  flex-direction: column;
`;

export const reserveTime = styled.div`
  display: flex;
  flex-direction: row;
  width: 72%;
`;

export const reserveDate = styled.div`
  width: 100%;
  min-width: 210px;
  flex-direction: row;
`;

export const calendarImg = styled.img`
  width: 25px;
  height: 25px;
  position: absolute;
  z-index: 1;
  margin-top: 7px;
  margin-left: 12px;
`;

export const reserveHour = styled.div`
  width: 100%;
  min-width: 210px;
  margin-left: 15px;
`;

export const clockImg = styled.img`
  width: 23px;
  height: 23px;
  position: absolute;
  z-index: 1;
  margin-top: 7px;
  margin-left: 12px;
`;

export const createId = styled.div`
  display: flex;
  flex-direction: row;
  width: 72%;
`;

export const IdCheckBox = styled(Checkbox)`
  align-self: center;
  &&& > {
    label:before,
    input:focus ~ label:before,
    label:after {
      background-color: #1c1c1c;
      border: 1px solid white;
      border-radius: 0;
      width: 17px;
      height: 16px;
    }
    input:checked~label:after{
      color: #3CB371;
      font-size: 12px;
    }
`;

export const Text = styled.p`
  font-size: 14px;
  color: black;
  margin-left: 5px;
`;

export const selectTemplate = styled.div`
  display: flex;
  width: 72%;
`;

export const buttonSection = styled.div`
  display: flex;
  align-self: flex-end;
`;

export const Button = styled.button`
  width: 65px;
  height: 35px;
  font-size: 13px;
  font-weight: bold;
  border-radius: 8px;
  background-color: white;
  border: 1px solid #c4c4c4;
  color: black;
  margin: 0 10px 0 0;
  &:hover {
    cursor: pointer;
  }
`;
