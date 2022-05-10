import React, { useRef, useState } from 'react';
import EvalList from './EvalList';
import evaluationAPI from "../../api/evaluationAPI";

function Eval() {


  const [questions, setQuestions] = useState(
    {
      "name": "평가항목 Test Test",
      "evaluationList": [
          {
              "category": "태도 역량",
              "title": null,
              "type": 0,
              "questions": [
                  {
                      "title": "태도가 진지하고 자세가 좋은가?",
                      "type": 1,
                      "data": 0
                  }
              ]
          },
          {
              "category": "협업 역량",
              "title": null,
              "type": 0,
              "questions": [
                  {
                      "title": "건전한 사고와 협조성, 책임감이 있는가?",
                      "type": 1,
                      "data": 0
                  }
              ]
          },
          {
              "category": "직무 역량",
              "title": null,
              "type": 0,
              "questions": [
                  {
                      "title": "적절한 판단력과 이해력이 있는가?",
                      "type": 0,
                      "data": 0
                  },
                  {
                      "title": "복장, 두발 등 외관상 깔끔한 느낌을 주는가?",
                      "type": 0,
                      "data": 0
                  }
              ]
          },
          {
              "category": "자기 표현력",
              "title": null,
              "type": 0,
              "questions": [
                  {
                      "title": "자기소개 및 지원동기",
                      "type": 0,
                      "data": 0
                  }
              ]
          },
          {
              "category": "리더십 역량",
              "title": null,
              "type": 0,
              "questions": [
                  {
                      "title": "리더로써 경험",
                      "type": 0,
                      "data": 0
                  }
              ]
          }
      ]
  }
);


const Questions = questions.evaluationList;
    const names = ["백소현", "김찬미", "양진우"];
    const [selectedName, setSelectedNames] = useState('백소현');

    const [data, setData] = useState(
        names.map((Label,_) => (
            {"label" : Label, "evaluation" : Questions}
        ))
    )

  const onToggle = (e, index, idx) => {
    const name = data.findIndex((emp) => emp.label === '김찬미');
    console.log(name);
    data[name]['evaluation'][index]['questions'][idx]['data'] = e.target.value;
    setData(data);
    console.log(data);

    // console.log(data[0][0])
    // const index = data.findIndex((emp) => emp.label === '백소현');
    // data.  = [...this.state.employees]; // important to create a copy, otherwise you'll modify state outside of setState call
    // employees[index] = employee;
    // this.setState({employees});

      // const temp = data.map(d =>
      //   d.label === selectedName ? {
      //       ...d, evaluation:{...d.evaluation,
      //         [index]: {...d.evaluation[index],
      //         questions : {...d.evaluation[index].questions,
      //         [idx]: {
      //           ...d.evaluation[index].questions[idx],
      //           data : e.target.value
      //                 }
      //               }
      //             }
      //           }
      //         } : d
    // );
    // setData(temp)
    // console.log("temp",temp)
  };

  return (
    <>
      <EvalList quests={data} onToggle={onToggle}/>
    </>
  );
}

export default Eval;