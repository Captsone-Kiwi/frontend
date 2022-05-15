import styled from "styled-components";

export const mainContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const uploadContainer = styled.div`
  display: flex;
  width: 80%;
`;

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

export const resumeUpload = styled.div`
  width: 100%;
  display: flex;
  min-height: 700px;
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
