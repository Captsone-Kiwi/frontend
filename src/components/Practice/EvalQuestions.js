import React, { useState } from "react";
import zIndex from "@mui/material/styles/zIndex";
import { keyframes } from "styled-components";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import * as style from "./styles";

function EvalQuestions({ quest, onToggle, name }) {
  const que = quest.evaluation;
  console.log(que);
  return (
    <>
      {que.map((qu, index) =>
        qu.questions.map((q, idx) => (
          <style.QuestionBox>
            <style.QuestionCategory>
              <b> {qu.category}</b>
            </style.QuestionCategory>
            <style.QuestionTitle>
              <b> {q.title}</b>
            </style.QuestionTitle>
            <FormControl>
              {!q.type ? (
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={q.data}
                  name="radio-buttons-group"
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <style.LabelLeft>매우 부족</style.LabelLeft>
                  {["1", "2", "3", "4", "5"].map((value, i) => (
                    <React.Fragment key={i}>
                      <FormControlLabel
                        value={value}
                        style={{ margin: "0px" }}
                        control={
                          <Radio
                            color="success"
                            style={{ padding: "6px" }}
                            onClick={(e) => onToggle(e, index, idx, name)}
                          />
                        }
                      />
                    </React.Fragment>
                  ))}
                  <style.LabelRight>매우 우수</style.LabelRight>
                </RadioGroup>
              ) : (
                <input
                  onChange={(e) => onToggle(e, index, idx, name)}
                  value={q.data}
                />
              )}
            </FormControl>
          </style.QuestionBox>
        ))
      )}
    </>
  );
}

export default EvalQuestions;
