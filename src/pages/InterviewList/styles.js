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

export const dateDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #eff5f2;
  margin-top: 10px;
  border-radius: 4px;
`;

export const interviewSpan = styled.p`
  font-size: 13px;
  color: black;
  width: 20%;
`;

export const interviewDetail = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  margin: 10px 0;
`;

export const leftDetail = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const rightDetail = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const interviewSchedule = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const interviewDate = styled.p`
  color: #3cb371;
  font-size: 15px;
  font-weight: bold;
  margin: 3px;
`;

export const interviewTime = styled.p`
  color: #3cb371;
  font-size: 15px;
  font-weight: bold;
  margin: 3px;
`;

export const interviewTitle = styled.p`
  color: #3cb371;
  font-size: 15px;
  font-weight: bold;
  width: 60%;
`;

export const greenButton = styled.button`
  width: 45px;
  height: 27px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  align-self: center;
  margin: 3px;
  align-items: center;
  background-color: #3cb371;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export const Buttons = styled.button`
  width: 45px;
  height: 27px;
  padding-left: 9px;
  display: flex;
  flex-direction: row;
  align-self: center;
  margin: 3px;
  align-items: center;
  font-size: 14px;
  background-color: white;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;
