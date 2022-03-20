import styled from "styled-components";
import { TextField } from "@material-ui/core";

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
`;

export const reserveTitle = styled.p`
  width: 160px;
  font-size: 16px;
  font-weight: bold;
  color: #7a7a7a;
  margin-left: 10px;
`;

export const reserveName = styled(TextField)`
  width: 600px;
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
