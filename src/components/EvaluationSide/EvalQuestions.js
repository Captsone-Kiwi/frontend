import React, { useState } from "react";
import zIndex from "@mui/material/styles/zIndex";
import { keyframes } from "styled-components";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import * as style from "./styles";

function EvalQuestions(props) {
  const Questions = props.questions.evaluationList;
  const [data, setData] = useState(
    props.interviewee.map((Label, _) => ({
      label: Label,
      evaluation: Questions,
    }))
  );
  console.log("data", data);

  const onToggle = (e, index, idx, selectedName) => {
    const array = JSON.parse(JSON.stringify(data));

    const name = array.findIndex((emp) => emp.label === selectedName);
    const temp = array.map((d) => (d.label === selectedName ? { ...d } : null));
    temp[name]["evaluation"][index]["questions"][idx]["data"] = e.target.value;

    const copyArray = data.map((d) =>
      d.label === selectedName ? temp[name] : d
    );
    setData(copyArray);
  };

  const [score, setScore] = useState(Number(0));
  const handleBrushSize = (e, newValue, index, idx, selectedName) => {
    // console.log("e", e.target);
    // console.log("index -> 사람 인덱스", index);
    // console.log("idx -> 문제 인덱스", idx);
    // console.log("interviewee -> 참여자 3명", interviewee);
    setScore(Number(newValue));
    const array = JSON.parse(JSON.stringify(data));

    const name = array.findIndex((emp) => emp.label === selectedName);
    const temp = array.map((d) => (d.label === selectedName ? { ...d } : null));
    temp[name]["evaluation"][index]["questions"][idx]["data"] =
      Number(newValue);

    const copyArray = data.map((d) =>
      d.label === selectedName ? temp[name] : d
    );
    setData(copyArray);
  };

  return (
    <>
      {data.map((question, que_idx) =>
        question.label === props.selectedName
          ? question.evaluation.map((qu, index) =>
              qu.questions.map((q, idx) => (
                <style.QuestionBox>
                  <style.QuestionCategory>
                    <b> {qu.category}</b>
                  </style.QuestionCategory>
                  <style.QuestionTitle>
                    <b> {q.title}</b>
                  </style.QuestionTitle>
                  <FormControl
                    style={{ marginBottom: "10px", alignSelf: "center" }}
                  >
                    {!q.type ? (
                      <style.SizeSlider
                        value={score}
                        onChange={(e, newValue) =>
                          handleBrushSize(
                            e,
                            newValue,
                            index,
                            idx,
                            props.selectedName
                          )
                        }
                        valueLabelDisplay="auto"
                      />
                    ) : (
                      // <RadioGroup
                      //   aria-labelledby="demo-radio-buttons-group-label"
                      //   defaultValue={q.data}
                      //   name="radio-buttons-group"
                      //   style={{ flexDirection: "row", alignItems: "center" }}
                      // >
                      //   <style.LabelLeft>매우 부족</style.LabelLeft>
                      //   {["1", "2", "3", "4", "5"].map((value, i) => (
                      //     <React.Fragment key={i}>
                      //       <FormControlLabel
                      //         value={value}
                      //         style={{ margin: "0px" }}
                      //         control={
                      //           <Radio
                      //             color="success"
                      //             style={{ padding: "6px" }}
                      //             onClick={(e) =>
                      //               onToggle(e, index, idx, props.interviewee)
                      //             }
                      //           />
                      //         }
                      //       />
                      //     </React.Fragment>
                      //   ))}
                      //   <style.LabelRight>매우 우수</style.LabelRight>
                      // </RadioGroup>
                      <input
                        onChange={(e) =>
                          onToggle(e, index, idx, props.selectedName)
                        }
                        value={q.data}
                      />
                    )}
                  </FormControl>
                </style.QuestionBox>
              ))
            )
          : null
      )}
    </>
  );
}

export default EvalQuestions;
