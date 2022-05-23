import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import SideMenu from "../../components/SideMenu/sideMenu";
import EvaluationInformation from "./evaluationInformation";
import evaluationAPI from "../../api/evaluationAPI";
import AuthContext from "../../store";

function Evaluation(props) {
  const navigator = useNavigate();
  const [state, actions] = useContext(AuthContext);
  const [side, setSide] = useState("evaluation");
  useEffect(() => {
    // getEvaluationInfo();
    getEvaluationId();
  }, [state]);

  const [evalId, setEvalId] = useState([]);
  //평가항목 아이디 리스트 가져오기
  const getEvaluationId = async () => {
    await evaluationAPI
      .getEvaluationIdList()
      .then((res) => {
        setEvalId(res.data.data);
        console.log("getEvaluationId result", res.data);
      })
      .catch((error) => console.log("getEvaluationId error", error));
  };
  console.log("evalId", evalId);

  return (
    <style.mainContainer>
      <SideMenu side={side} setSide={setSide} />
      <style.uploadContainer>
        <style.detailContainer>
          <style.Span>평가항목</style.Span>
          <style.selectionDiv>
            <style.uploadBtn onClick={() => navigator("/upload_evaluation")}>
              평가항목 추가
            </style.uploadBtn>
          </style.selectionDiv>
          <style.infoDiv>
            <style.titleSpan style={{ marginLeft: "10px" }}>
              제목
            </style.titleSpan>
          </style.infoDiv>
          {evalId.length === 0 ? (
            <style.noEvaluation>
              <style.noEvaluationText>
                등록된 평가항목이 없습니다.
              </style.noEvaluationText>
              <style.noEvaluationText>
                새 평가항목을 등록하려면 평가항목 추가 버튼을 눌러 진행해주세요.
              </style.noEvaluationText>
            </style.noEvaluation>
          ) : (
            <>
              {evalId.map((e, idx) => (
                <EvaluationInformation evalId={e} idx={idx} />
              ))}
            </>
          )}
        </style.detailContainer>
      </style.uploadContainer>
    </style.mainContainer>
  );
}

export default Evaluation;
