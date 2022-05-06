import React from "react"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import * as style from "./styles";


export default function RadioButton() {
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