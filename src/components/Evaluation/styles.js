import styled from "styled-components";

export const QuestionFlex = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
`;

export const QuestionBox = styled.div`
    width: 280px;
    height: 80px;
    margin : 20px;
    border-radius: 8px;
    border : 1px solid #929292;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    z-index: 5;
`;

export const QuestionTitle = styled.div`
    font-style: normal;
    font-weight: 500;
    margin-top: 10px;
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
    color: #DD0000;
`;

export const LabelRight = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 18px;
    color: #3CB371;
`;


export const Main = styled.div`
  font-family: sans-serif;
  background: #fff;
  display: flex;
  flex-direction: row;
`;

export const DropDownContainer = styled.div`
  width: 7.5em;
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
  background: #709D84;
`;

export const DropDownListContainer = styled.div`
  z-index: 100;
  width: 7.5em;
`;

export const DropDownList = styled.ul`
  cursor: pointer;
  padding: 0;
  margin: 0;
  text-align: center;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #7A7A7A;
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

