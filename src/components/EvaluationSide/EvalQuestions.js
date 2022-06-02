import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import SizeSlider from "../../components/SizeSlider/sizeslider";
import * as style from "./styles";
import { StepLabel } from "@material-ui/core";

function EvalQuestions(props) {
  const Questions = props.questions.evaluationList;

  const [data, setData] = useState(
    props.interviewee.map((Label, _) => ({
      label: Label,
      evaluation: Questions,
    }))
  );
  // console.log("data", data);

  //세션 스토리지 정보 가져오기
  // useEffect(() => {
  //   loadData();
  // }, []);
  // const loadData = () => {
  //   let stored_data = localStorage.getItem("EvalResult");
  //   if (props.isVisit === false) {
  //     stored_data = JSON.parse(stored_data);
  //     console.log("이거", stored_data);
  //     setData(stored_data);
  //   }
  // };
  // console.log("************************************************");

  // useEffect(() => {
  //   localStorage.setItem("EvalResult", JSON.stringify(data));
  // }, [data]);

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
                  <style.EvalInfoDiv>
                    <style.QuestionCategory>
                      <b> {qu.category}</b>
                    </style.QuestionCategory>
                    {!q.type ? (
                      <style.QuestionRange>
                        <b>
                          {"배점: "}
                          {Number(q.range)}
                        </b>
                      </style.QuestionRange>
                    ) : null}
                  </style.EvalInfoDiv>
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
                        key={idx}
                        storeScore={q.data}
                        maxScore={q.range}
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
                        value={q.data === 0 ? null : q.data}
                        placeholder="이곳에 의견을 작성해주세요."
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
