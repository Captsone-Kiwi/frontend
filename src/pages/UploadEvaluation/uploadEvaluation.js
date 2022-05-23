import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../../components/SideMenu/sideMenu";
import CategorySelect from "../../components/SelectForm/categorySelect";
import TypeSelect from "../../components/SelectForm/typeSelect";
import QuestionInput from "../../components/InputTextForm/QuestionInput";
import MaxScoreInput from "../../components/InputTextForm/maxScoreInput";
import * as style from "./styles";
import evaluationAPI from "../../api/evaluationAPI";

function UploadEvaluation() {
  const navigator = useNavigate();
  const shortid = require("shortid");
  const [side, setSide] = useState("evaluation");

  //평가항목 정보
  const [evaluationInfo, setEvaluationInfo] = useState({
    name: "",
    evaluationList: [
      {
        category: "",
        title: "",
        type: 0,
        data: 0,
      },
    ],
  });
  console.log("평가항목 저장 정보", evaluationInfo);

  // 평가항목 제목 정보 저장
  const [evalName, setEvalName] = useState({ name: "" });
  const evalNameUpload = ({ target }) => {
    let { name, value } = target;
    setEvalName({ ...evalName, [name]: value });
  };
  console.log("평가항목 제목 저장", evalName);

  const [currQues, setCurrQues] = useState(0);

  const removeQuestion = (e, index) => {
    const setTitle = { ...evaluationInfo };
    if (evaluationInfo.evaluationList.length > 1) {
      setCurrQues(currQues - 1);
      setTitle["evaluationList"] = setTitle["evaluationList"].filter(
        (val, idx) => {
          return idx !== index;
        }
      );
      setEvaluationInfo(setTitle);
    } else {
      alert("한 개 이상의 질문 항목을 입력해주세요.");
    }
  };

  const addQuestions = () => {
    setCurrQues(currQues + 1);
    const setQues = { ...evaluationInfo };
    setQues["evaluationList"][currQues + 1] = {
      category: "",
      title: "",
      type: 0,
      data: 0,
    };
    setEvaluationInfo(setQues);
  };

  //평가항목 업로드
  const uploadEvaluation = async (event) => {
    event.preventDefault();
    await evaluationAPI
      .createEvaluation({
        name: evalName.name,
        evaluationList: evaluationInfo.evaluationList,
      })
      .then((res) => {
        console.log("createEvaluation result", res);
        alert("평가 항목 등록 완료");
        navigator("/evaluation");
      })
      .catch((err) => console.log("createEvaluation err", err));
  };

  return (
    <style.mainContainer>
      <SideMenu side={side} setSide={setSide} />
      <style.uploadContainer>
        <style.Container>
          <style.prevBtn onClick={() => navigator("/evaluation")}>
            <style.prevImg src="/images/common/prevBtn.png" />
            뒤로 돌아가기
          </style.prevBtn>
          <style.Span>평가항목 등록</style.Span>
          <style.topDiv>
            <style.EvalTitle
              name="name"
              value={evalName.name}
              type="text"
              onChange={evalNameUpload}
              required
              autoFocus
              InputProps={{ disableUnderline: true }}
              placeholder="평가항목 제목을 입력하세요."
            />
          </style.topDiv>
          <style.middleDiv>
            <style.smallDiv>
              <style.Text>카테고리</style.Text>
            </style.smallDiv>
            <style.smallDiv style={{ margin: "0 260px" }}>
              <style.Text>질문 항목</style.Text>
            </style.smallDiv>
            <style.smallDiv style={{ margin: "0px 30px 0 0" }}>
              <style.Text>항목 유형</style.Text>
            </style.smallDiv>
            <style.smallDiv style={{ margin: "0 -18px 0px 0px" }}>
              <style.Text>최대 점수</style.Text>
            </style.smallDiv>
          </style.middleDiv>
          <style.bottomDiv>
            {evaluationInfo.evaluationList.map((e, index) => (
              <style.EvalDiv>
                <CategorySelect
                  evaluationInfo={evaluationInfo}
                  setEvaluationInfo={setEvaluationInfo}
                  index={index}
                />
                <QuestionInput
                  name="title"
                  index={index}
                  key={index}
                  // key={shortid.generate()}
                  evaluationInfo={evaluationInfo}
                  setEvaluationInfo={setEvaluationInfo}
                  currQues={currQues}
                  setCurrQues={setCurrQues}
                />
                <TypeSelect
                  evaluationInfo={evaluationInfo}
                  setEvaluationInfo={setEvaluationInfo}
                  index={index}
                />
                <MaxScoreInput
                  name="data"
                  index={index}
                  key={index}
                  // key={shortid.generate()}
                  evaluationInfo={evaluationInfo}
                  setEvaluationInfo={setEvaluationInfo}
                  currQues={currQues}
                  setCurrQues={setCurrQues}
                />
                <style.removeBtn
                  name="title"
                  index={index}
                  onClick={(e) => {
                    removeQuestion(e, index);
                    console.log("index:", index);
                  }}
                >
                  <style.removeImg
                    name="title"
                    src="/images/common/deleteBtn.png"
                  />
                </style.removeBtn>
              </style.EvalDiv>
            ))}
            <style.addBtn name="title" onClick={addQuestions}>
              <style.addImg name="title" src="/images/common/addBtn.png" />
            </style.addBtn>
          </style.bottomDiv>
          <style.buttonSection>
            <style.Button
              style={{
                backgroundColor: "#3cb371",
                border: "none",
                color: "white",
              }}
              onClick={uploadEvaluation}
            >
              저장
            </style.Button>
            <style.Button>취소</style.Button>
          </style.buttonSection>
        </style.Container>
      </style.uploadContainer>
    </style.mainContainer>
  );
}
export default UploadEvaluation;
