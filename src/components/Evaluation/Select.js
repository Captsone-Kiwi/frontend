import React, { useState } from "react";
import Select from "react-select";
import FormControl from "@mui/material/FormControl";
import * as style from "./styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function Selection() {
  function StyledInput(props) {
    return <input placeholder={props.isAnswer.isAnswer}></input>;
  }

  function RadioButton(props) {
    // onChange 바뀔때마다 선택한 값을 QeustionList에 넣어주기 (QuestionList에 값을 넣어줄땐 setQuestionList 사용!)
    const setAnswer = ({ target }) => {
      const setting = { ...props.isAnswer.QuestionList };
      //일단 임시로 0번째 질문에 대한 대답만 들어가게 해뒀는데, [0] 이렇게 대신 index값 props로 받아와서 넣으면 문제마다 대답하는값으로 바뀔듯 !!
      setting[0]["evaluationList"][0]["answer"] = target.value;
      props.isAnswer.setQuestionList(setting);
    };

    return (
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={props.isAnswer.isAnswer}
        name="radio-buttons-group"
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <style.LabelLeft>매우 부족</style.LabelLeft>
        {["1", "2", "3", "4", "5"].map((value, i) => (
          <React.Fragment key={i}>
            <FormControlLabel
              // 여기에 onChange 될때마다 함수 연결
              onChange={setAnswer}
              value={value}
              style={{ margin: "0px" }}
              control={<Radio color="success" style={{ padding: "6px" }} />}
            />
          </React.Fragment>
        ))}
        <style.LabelRight>매우 우수</style.LabelRight>
      </RadioGroup>
    );
  }

  function InputType(props) {
    if (props.isType === 0) {
      return <RadioButton isAnswer={props} />;
    }
    return <StyledInput isAnswer={props} />;
  }
  // 원래 코드
  // function Question({ quest, order }) {
  //   return (
  //     <>
  //       <style.QuestionBox>
  //         <style.QuestionTitle>
  //           <b>{quest.title}</b>
  //         </style.QuestionTitle>
  //         <FormControl>
  //           <InputType
  //             isType={quest.type}
  //             isAnswer={quest.answer}
  //             isIndex={order}
  //           />
  //         </FormControl>
  //       </style.QuestionBox>
  //     </>
  //   );
  // }

  function Question({ quest, order, QuestionList, setQuestionList }) {
    return (
      <>
        <style.QuestionBox>
          <style.QuestionTitle>
            <b>{quest.title}</b>
          </style.QuestionTitle>
          <FormControl>
            <InputType
              isType={quest.type}
              isAnswer={quest.answer}
              isIndex={order}
              QuestionList={QuestionList}
              setQuestionList={setQuestionList}
            />
          </FormControl>
        </style.QuestionBox>
      </>
    );
  }

  const [QuestionList, setQuestionList] = useState([
    {
      name: "test",

      evaluationList: [
        {
          category: "evaluationList1",
          title: "태도가 진지하고 자세가 좋은가?",
          type: 0,
          answer: "1",
        },

        {
          category: "evaluationList1",
          title: "건전한 사고와 협조성, 책임감이 있는가?",
          type: 1,
          answer: "0",
        },
        {
          category: "evaluationList2",
          title: "적절한 판단력과 이해력이 있는가?",
          type: 0,
          answer: "0",
        },
        {
          category: "evaluationList2",
          title: "복장, 두발 등 외관상 깔끔한 느낌을 주는가?",
          type: 1,
          answer: "0",
        },
      ],
    },
  ]);
  console.log("QuestionList 정보", QuestionList);

  const Questions = QuestionList[0].evaluationList;
  const names = ["백소현", "김찬미", "양진우"];
  const data = names.map((Label, _) => ({
    label: Label,
    evaluation: { Questions },
  }));
  const [selectedOption, setSelectedOption] = useState(data[0]);
  const handleChange = (e) => {
    setSelectedOption(e);
  };

  return (
    <div className="App">
      <Select
        isSingle
        placeholder="Select Option"
        value={selectedOption}
        options={data}
        getOptionLabel={(option) => option.label}
        onChange={handleChange}
        menuPortalTarget={document.body}
        style={{ textAlign: "center" }}
      />

      {selectedOption.evaluation.Questions.map((quest, index) => (
        <Question
          quest={quest}
          order={index}
          key={index}
          QuestionList={QuestionList}
          setQuestionList={setQuestionList}
        />
      ))}
    </div>
  );
}
export default Selection;
