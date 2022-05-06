// https://www.csscodelab.com/reactjs-dropdown-list-example/
// https://github.com/jokamjohn/custom-select-react/blob/master/src/App.js
import React, { useState } from "react";
import * as style from "./styles";



const names = ["백소현", "김찬미", "양진우"];
const interviews = ["evaluationList1", "evaluationList2"];
const evalutions = ["평가항목1", "평가항목2", "평가항목3"];

export default function Dropdown() {
  const [isOpenName, setIsOpenName] = useState(false);
  const [isOpenInter, setIsOpenInter] = useState(false);
  const [isOpenEval, setIsOpenEval] = useState(false);

  
  const [selectedName, setSelectedNames] = useState(null);
  const [selectedInter, setSelectedInter] = useState(null);
  const [selectedEval, setSelectedEval] = useState(null);

  const togglingName = () => setIsOpenName(!isOpenName);
  const togglingInter = () => setIsOpenInter(!isOpenInter);
  const togglingEval = () => setIsOpenEval(!isOpenEval);

  const onNameClicked = value => () => {
    setSelectedNames(value);
    setIsOpenName(false);
  };
  
  const onInterClicked = value => () => {
    setSelectedInter(value);
    setIsOpenInter(false);
  };
  
  const onEvalClicked = value => () => {
    setSelectedEval(value);
    setIsOpenEval(false);
  };
  return (
      <>
        <style.Main>
        <style.DropDownContainer>
            <style.DropDownHeader onClick={togglingName}>
            {selectedName || "Name"}
            </style.DropDownHeader>
            {isOpenName && (
            <style.DropDownListContainer>
                <style.DropDownList>
                {names.map(name => (
                    <style.ListItem onClick={onNameClicked(name)} key={Math.random()}>
                    {name}
                    </style.ListItem>
                ))}
                </style.DropDownList>
            </style.DropDownListContainer>
            )}
        </style.DropDownContainer>

        <style.DropDownContainer>
        <style.DropDownHeader onClick={togglingInter}>
            {selectedInter || "Interview"}
        </style.DropDownHeader>
        {isOpenInter && (
            <style.DropDownListContainer>
            <style.DropDownList>
                {interviews.map(interview => (
                <style.ListItem onClick={onInterClicked(interview)} key={Math.random()}>
                    {interview}
                </style.ListItem>
                ))}
            </style.DropDownList>
            </style.DropDownListContainer>
        )}
        </style.DropDownContainer>

        <style.DropDownContainer>
        <style.DropDownHeader onClick={togglingEval}>
            {selectedEval || "Evaluation"}
        </style.DropDownHeader>
        {isOpenEval && (
            <style.DropDownListContainer>
            <style.DropDownList>
                {evalutions.map(evalution => (
                <style.ListItem onClick={onEvalClicked(evalution)} key={Math.random()}>
                    {evalution}
                </style.ListItem>
                ))}
            </style.DropDownList>
            </style.DropDownListContainer>
        )}
        </style.DropDownContainer>

        </style.Main>
        
  </>
  );
}