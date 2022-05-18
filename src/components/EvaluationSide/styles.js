import styled from "styled-components";

export const QuestionFlex = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

export const QuestionBox = styled.div`
  width: 280px;
  height: 100px;
  margin: 20px;
  border-radius: 8px;
  border: 1px solid #929292;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const QuestionTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  text-align: center;
`;

export const QuestionCategory = styled.div`
  font-style: normal;
  font-weight: 500;
  margin-top: 10px;
  font-size: 7px;
  color: green;
  align-self: end;
  padding-right: 10px;
  line-height: 2px;
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

export const Main = styled.div`
  font-family: sans-serif;
  background: #fff;
  display: flex;
  flex-direction: columns;
  z-index: 10;
`;

export const DropDownContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const DropDownHeader = styled.div`
  cursor: pointer;
  margin-bottom: 0.8em;
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
`;

export const DropDownList = styled.ul`
  position: absolute;
  z-index: 11;
  width: 80%;
  cursor: pointer;
  padding: 0;
  margin: 0;
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
