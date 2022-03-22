import styled from "styled-components";
import { TextField } from "@material-ui/core";

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
  padding-bottom: 35px;
`;

export const reserveTitle = styled.p`
  width: 160px;
  font-size: 16px;
  font-weight: bold;
  color: #7a7a7a;
  margin-left: 10px;
`;

export const reserveName = styled(TextField)`
  width: 70%;
  .MuiInputBase-input {
    height: 25px;
    border: 1px solid #929292;
    border-radius: 12px;
    color: black;
  }
  .MuiFormControl-root {
    padding: 6px;
  }
`;

export const detailContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

export const interviewerList = styled(TextField)`
  width: 100%;
  .MuiInputBase-input {
    height: 25px;
    border: 1px solid #929292;
    border-radius: 12px;
    color: black;
    margin-bottom: 10px;
  }
  .MuiFormControl-root {
    padding: 6px;
  }
`;

export const addBtn = styled.button`
  align-self: center;
  margin-top: 7px;
  padding: unset;
  background: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const addImg = styled.img`
  width: 30px;
`;

export const inputBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const removeBtn = styled.button`
  align-self: flex-start;
  padding: unset;
  background: transparent;
  border: none;
  margin-top: 7px;
  margin-left: 3px;
  &:hover {
    cursor: pointer;
  }
`;

export const removeImg = styled.img`
  width: 25px;
`;
