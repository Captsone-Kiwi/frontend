import React from "react"
import {QuestionList} from "./QuestionList"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import * as style from "./styles";

function RadioButton() {
  return(
    <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue='0'
        name="radio-buttons-group"
        style={{flexDirection:'row', alignItems:'center'}}>
        <style.LabelLeft>매우 부족</style.LabelLeft>
        {['0','1','2','3','4'].map((value, i) => (
          <React.Fragment key={i}>
            <FormControlLabel value={value} style={{margin:'0px'}} control={<Radio color='success' style={{padding:'6px'}}/>}/>
          </React.Fragment>
        ))}
        <style.LabelRight>매우 우수</style.LabelRight>
    </RadioGroup>
  )
}

function StyledInput(){
  return(
    <input></input>
  )
}

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
  const Questions = QuestionList[0].evaluationList;
  return(
      <div>
            {Questions.map((quest, index) => (
                <Question 
                quest={quest} 
                order={index+1} 
                key={index}
                />
            ))}
        </div>
      )
}