import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../../components/SideMenu/sideMenu";
import CategorySelect from "../../components/SelectForm/categorySelect";
import TypeSelect from "../../components/SelectForm/typeSelect";
import QuestionInput from "../../components/InputTextForm/QuestionInput";
import * as style from "./styles";
import evaluationAPI from "../../api/evaluationAPI";

function UploadEvaluation() {
  const navigator = useNavigate();
  const shortid = require("shortid");
  const [side, setSide] = useState("upload");

  //평가항목 정보
  // const [evaluationInfo, setEvaluationInfo] = useState({
  //   name: "",
  //   evaluationList: [
  //     {
  //       category: "",
  //       questions: [
  //         {
  //           title: "",
  //           type: 0,
  //         },
  //       ],
  //     },
  //   ],
  // });
  const [evaluationName, setEvaluationName] = useState({ name: "" });
  // const [categoryList, setCategoryList] = useState({
  //   evaluationList: [
  //     {
  //       category: "자기 표현력",
  //     },
  //     {
  //       category: "협업 역량",
  //     },
  //     {
  //       category: "직무 역량",
  //     },
  //     {
  //       category: "태도 역량",
  //     },
  //   ],
  // });
  // console.log("categoryList", categoryList);
  const [evaluationList, setEvaluationList] = useState({
    category: "",
    questions: [
      {
        title: "",
        type: 0,
      },
    ],
  });
  console.log("평가항목 저장 정보", evaluationList);

  const [categoryList, setCategoryList] = useState([evaluationList]);
  console.log("categoryList", categoryList);

  // 평가항목 제목 정보 저장
  const evalNameUpload = ({ target }) => {
    let { name, value } = target;
    setEvaluationName({ ...evaluationName, [name]: value });
  };

  const [currQues, setCurrQues] = useState(0);

  const addQuestions = () => {
    setCurrQues(currQues + 1);
    const setQues = { ...evaluationList };
    setQues["questions"][currQues + 1] = { title: "", type: 0 };
    setEvaluationList(setQues);
  };
  console.log("currQues??", currQues);

  //평가항목 업로드
  const uploadEvaluation = async (event) => {
    event.preventDefault();
    await evaluationAPI
      .createEvaluation({
        name: evaluationName.name,
        evaluationList: [evaluationList],
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
          <style.prevBtn onClick={() => navigator("/upload")}>
            <style.prevImg src="/images/common/prevBtn.png" />
            뒤로 돌아가기
          </style.prevBtn>
          <style.Span>평가항목 등록</style.Span>
          <style.topDiv>
            <style.EvalTitle
              name="name"
              value={evaluationName.name}
              type="text"
              onChange={evalNameUpload}
              required
              autoFocus
              InputProps={{ disableUnderline: true }}
              placeholder="평가항목 제목을 입력하세요."
            />
            <CategorySelect
              categoryList={categoryList}
              setCategoryList={setCategoryList}
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
            {evaluationList.questions.map((e, index) => (
              <style.EvalDiv>
                <QuestionInput
                  name="interviewer"
                  index={index}
                  key={index}
                  // key={shortid.generate()}
                  evaluationList={evaluationList}
                  setEvaluationList={setEvaluationList}
                  currQues={currQues}
                  setCurrQues={setCurrQues}
                />
                <TypeSelect
                  evaluationList={evaluationList}
                  setEvaluationList={setEvaluationList}
                  index={index}
                />
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
