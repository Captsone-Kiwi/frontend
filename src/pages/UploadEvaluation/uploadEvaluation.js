import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../../components/SideMenu/sideMenu";
import CategorySelect from "../../components/SelectForm/categorySelect";
import QuestionInput from "../../components/InputTextForm/QuestionInput";
import * as style from "./styles";

function UploadEvaluation() {
  const navigator = useNavigate();
  const shortid = require("shortid");
  const [side, setSide] = useState("upload");

  //평가항목 정보
  const [evaluationInfo, setEvaluationInfo] = useState({
    name: "",
    evaluationList: {
      category: "",
      questions: [
        {
          title: "",
          type: 0,
        },
      ],
    },
  });
  console.log("평가항목 저장 정보", evaluationInfo);

  // 평가항목 제목 정보 저장
  const evalNameUpload = ({ target }) => {
    let { name, value } = target;
    setEvaluationInfo({ ...evaluationInfo, [name]: value });
  };

  const [currQues, setCurrQues] = useState(0);

  const addQuestions = () => {
    setCurrQues(currQues + 1);
    const setQues = { ...evaluationInfo };
    setQues["evaluationList"]["questions"][currQues + 1] = {
      title: "",
      type: 0,
    };
    setEvaluationInfo(setQues);
  };
  console.log("currQues??", currQues);

  return (
    <style.mainContainer>
      <SideMenu side={side} setSide={setSide} />
      <style.uploadContainer>
        <style.Container>
          <style.prevBtn onClick={() => navigator("/upload")}>
            <style.prevImg src="/images/common/prevBtn.png" />
            뒤로 돌아가기
          </style.prevBtn>
          <style.Span>평가항목 등록</style.Span>
          <style.topDiv>
            <style.EvalTitle
              name="name"
              value={evaluationInfo.name}
              type="text"
              onChange={evalNameUpload}
              required
              autoFocus
              InputProps={{ disableUnderline: true }}
              placeholder="평가항목 제목을 입력하세요."
            />
            <CategorySelect
              evaluationInfo={evaluationInfo}
              setEvaluationInfo={setEvaluationInfo}
            />
          </style.topDiv>
          <style.middleDiv>
            <style.smallDiv1>
              <style.Text>질문 항목</style.Text>
            </style.smallDiv1>
            <style.smallDiv2>
              <style.Text>항목 유형</style.Text>
            </style.smallDiv2>
          </style.middleDiv>
          <style.bottomDiv>
            {evaluationInfo.evaluationList.questions.map((e, index) => (
              <QuestionInput
                name="interviewer"
                index={index}
                key={shortid.generate()}
                evaluationInfo={evaluationInfo}
                setEvaluationInfo={setEvaluationInfo}
                currQues={currQues}
                setCurrQues={setCurrQues}
              />
            ))}
            <style.addBtn name="title" onClick={addQuestions}>
              <style.addImg name="title" src="/images/common/addBtn.png" />
            </style.addBtn>
          </style.bottomDiv>
        </style.Container>
      </style.uploadContainer>
    </style.mainContainer>
  );
}
export default UploadEvaluation;
