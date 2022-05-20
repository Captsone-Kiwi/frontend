import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import SizeSlider from "../../components/SizeSlider/sizeslider";
import * as style from "./styles";

function EvalQuestions(props) {
  const Questions = props.questions.evaluationList;
  const [data, setData] = useState(
    props.interviewee.map((Label, _) => ({
      label: Label,
      evaluation: Questions,
    }))
  );
  // console.log("data", data);

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
                    key={idx}
                    style={{
                      marginBottom: "15px",
                      alignSelf: "center",
                      width: "100%",
                    }}
                  >
                    {!q.type ? (
                      <SizeSlider
                        // defaultValue={q.data}
                        storeScore={q.data}
                        data={data}
                        setData={setData}
                        index={index}
                        idx={idx}
                        selectedName={props.selectedName}
                      />
                    ) : (
                      <style.MemoText
                        onChange={(e) =>
                          onToggle(e, index, idx, props.selectedName)
                        }
                        value={q.data}
                        placeholder="이 곳에 의견을 작성해주세요."
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
