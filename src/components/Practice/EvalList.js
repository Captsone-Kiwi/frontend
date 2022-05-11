import zIndex from '@mui/material/styles/zIndex';
import React,{useState} from 'react';
import { keyframes } from 'styled-components';
import * as style from "./styles";
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

  
function Evaluation({quest, onToggle, name}) {


    const que = quest.evaluation
    console.log(que)
    return (
        <>
            {que.map((qu,index) =>(
                
                qu.questions.map((q,idx) => (
                    <style.QuestionBox>
                        <style.QuestionCategory><b> {qu.category}</b></style.QuestionCategory>
                        <style.QuestionTitle><b> {q.title}</b></style.QuestionTitle>
                            <FormControl>
                            {!q.type ? <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={q.data}
                                name="radio-buttons-group"
                                style={{flexDirection:'row', alignItems:'center'}}>
                                <style.LabelLeft>매우 부족</style.LabelLeft>
                                    {['1','2','3','4','5'].map((value, i) => (
                                    <React.Fragment key={i}>
                                        <FormControlLabel value={value} style={{margin:'0px'}} control={<Radio color='success' style={{padding:'6px'}} onClick={(e) => onToggle(e,index,idx,name)}/>}/>
                                    </React.Fragment>
                                    ))}
                                <style.LabelRight>매우 우수</style.LabelRight>
                            </RadioGroup>
                            : <input onChange={(e) => onToggle(e,index,idx,name)} value={q.data}/>}
                        </FormControl>
                        </style.QuestionBox>
                ))
                
            ))}
      </>
    );
  }
  
function EvalList({quests, onToggle}) {

    const names = ["백소현", "김찬미", "양진우"];
    const [isOpenName, setIsOpenName] = useState(false);
    const [selectedName, setSelectedNames] = useState(names[0]);
    const togglingName = () => setIsOpenName(!isOpenName);
    const onNameClicked = value => () => {
        setSelectedNames(value);
        setIsOpenName(false);
      };


    console.log(quests)
    return (
        <div>
            <style.Main>
                <style.DropDownContainer>
                    <style.DropDownHeader onClick={togglingName}>
                    {selectedName}
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
            </style.Main>

        {quests.map(quest =>( quest.label === selectedName ?
            <Evaluation
            quest={quest}
            key={quest.label}
            onToggle={onToggle}
            name = {selectedName}
            />
            : null
        ))}
    </div>
    );
  }
  
  export default EvalList;