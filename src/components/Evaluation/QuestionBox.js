import React, {useState} from "react"
import {QuestionList} from "./QuestionList"
import RadioButton from "./RadioButton.js"
import StyledInput from "./StyledInput.js"
import FormControl from '@mui/material/FormControl';
import * as style from "./styles";


function InputType(props) {
  if(props.isType === 0) {
      return <RadioButton/>;
  }
  return <StyledInput/>;
}


function Question({quest, order}){
    return(
      <>
      <style.QuestionBox>
          <style.QuestionTitle><b>{quest.questions[0].title}</b></style.QuestionTitle>
            <FormControl>
          <style.QuestionTitle>{quest.title}</style.QuestionTitle>
          
          <InputType isType={quest.questions[0].type}/>
          

          </FormControl>
        </style.QuestionBox>
      </>
    )
}

export default function QuestionBox(){
  const names = ["백소현", "김찬미", "양진우"];
  const interviews = ["evaluationList1", "evaluationList2"];
  const evalutions = ["평가항목1", "평가항목2", "평가항목3"];

  const [isOpenName, setIsOpenName] = useState(false);
  const [isOpenInter, setIsOpenInter] = useState(false);
  const [isOpenEval, setIsOpenEval] = useState(false);


  const [selectedName, setSelectedNames] = useState(['김찬미']);
  const [selectedInter, setSelectedInter] = useState('Interview');
  const [selectedEval, setSelectedEval] = useState('Evaluation');

  const togglingName = () => setIsOpenName(!isOpenName);
  const togglingInter = () => setIsOpenInter(!isOpenInter);
  const togglingEval = () => setIsOpenEval(!isOpenEval);

  const onNameClicked = value => () => {
    setSelectedNames([value]);
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

  const Questions = QuestionList[0].evaluationList;
  return(
      <div>
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
            {names.map((value, i) => (
              Questions.map((quest, index) => (
                  <Question 
                  quest={quest} 
                  order={index+1} 
                  key={index}
                  name={value}
                  />
              ))
            ))}
        </div>
      )
}