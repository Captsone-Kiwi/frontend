import styled from "styled-components";

export const mainContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const interviewContainer = styled.div`
  display: flex;
  width: 80%;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export const Span = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-left: 5px;
`;

export const selectionDiv = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 3px solid #c4c4c4;
`;

export const selectBtn = styled.button`
  width: fit-content;
  color: #7a7a7a;
  background-color: transparent;
  border: none;
  font-size: 16px;
  font-weight: bold;
  margin-right: 20px;
  padding-bottom: 5px;
  margin-bottom: -3px;
  border-bottom: ${(props) => (props.current ? "3px solid #3cb371" : "none")};
  &:hover {
    cursor: pointer;
    border-bottom: 3px solid #3cb371;
  }
`;

export const reserveInterview = styled.button`
  width: fit-content;
  border: 2px solid #3cb371;
  background-color: white;
  color: #3cb371;
  align-self: flex-end;
  padding: 5px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
  }
`;
