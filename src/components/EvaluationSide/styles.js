import styled from "styled-components";
import { Slider as Slider1 } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export const QuestionFlex = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

export const QuestionBox = styled.div`
  width: 290px;
  height: fit-content;
  margin: 20px 15px;
  border-radius: 8px;
  border: 1px solid #929292;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
`;

export const EvalInfoDiv = styled.div`
  display: flex;
  height: fit-content;
  width: 95%;
  justify-content: space-between;
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
export const QuestionRange = styled.div`
  font-style: normal;
  font-weight: 500;
  align-self: flex-end;
  font-size: 7px;
  color: #b40101;
  padding: 17px 12px 0 0;
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

export const EvalSideBack = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const topSection = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  width: 100%;
`;

export const btnDiv = styled.div`
  display: flex;
  z-index: 10;
  width: 100%;
  height: fit-content;
`;

export const saveBtn = styled.button`
  width: fit-content;
  padding: 0 10px;
  height: 30px;
  // margin-top: 30px;
  margin-left: 20px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  border: none;
  background: #3cb371;
  border-radius: 10px;
  align-self: flex-end;
  &:hover {
    cursor: pointer;
  }
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
  height: 100%;
  display: flex;
  align-items: center;
  align-self: center;
`;

export const textDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const infoText = styled.p`
  font-family: sans-serif;
  font-size: 15px;
  font-weight: bold;
  color: #7a7a7a;
  margin-block: 5px;
  width: fit-content;
  align-self: center;
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

export const MemoText = styled.textarea`
  color: black;
  font-size: 14px;
  width: 250px;
  height: 60px;
  align-self: center;
  padding: 5px;
`;

export const SizeSlider = withStyles({
  root: {
    color: "#3CB371",
    height: 8,
    width: "240px",
  },
  thumb: {
    height: 19,
    width: 19,
    backgroundColor: "#3CB371",
    border: "2px solid",
    marginTop: -7,
    marginLeft: -8,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
    "@media.wide": {
      backgroundColor: "rgba(12, 112, 12)",
    },
  },
  active: {},
  valueLabel: {
    left: "-50%",
  },
  track: {
    height: 7,
    borderRadius: 4,
  },
  rail: {
    height: 7,
    borderRadius: 4,
    color: "#d4d4d4",
    opacity: 1,
  },
})(Slider1);
