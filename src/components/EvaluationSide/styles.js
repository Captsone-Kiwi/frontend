import styled from "styled-components";

export const QuestionFlex = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

export const QuestionBox = styled.div`
  width: 280px;
  height: fit-content;
  margin: 20px;
  border-radius: 8px;
  border: 1px solid #929292;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
`;

export const QuestionCategory = styled.div`
  font-style: normal;
  font-weight: 500;
  align-self: flex-start;
  font-size: 7px;
  color: green;
  padding: 17px 0 0 12px;
  line-height: 2px;
`;

export const QuestionTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  text-align: center;
`;

export const LabelLeft = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 18px;
  color: #dd0000;
`;

export const LabelRight = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 18px;
  color: #3cb371;
`;

export const EvalSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  overflow: scroll;
`;

export const Main = styled.div`
  font-family: sans-serif;
  background: #fff;
  display: flex;
  flex-direction: columns;
  z-index: 10;
  width: 100%;
`;

export const DropDownContainer = styled.div`
  margin: 0 auto;
  display: flex;
  height: fit-content;
  flex-direction: column;
  margin-top: 15px;
  width: 100%;
`;

export const infoDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 400px;
`;

export const infoText = styled.p`
  font-family: sans-serif;
  font-size: 15px;
  font-weight: bold;
  color: #7a7a7a;
`;

export const DropDownHeader = styled.div`
  width: 150px;
  align-self: flex-end;
  margin-right: 17px;
  cursor: pointer;
  margin-bottom: 7px;
  border-radius: 20px;
  padding: 0.4em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: #fff;
  background: #709d84;
`;

export const DropDownListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DropDownList = styled.ul`
  position: absolute;
  z-index: 11;
  width: 160px;
  align-self: flex-end;
  cursor: pointer;
  padding: 0;
  margin: 0 20px;
  text-align: center;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #7a7a7a;
  font-size: 18px;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled.li`
  cursor: pointer;
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #000;
  }
`;
