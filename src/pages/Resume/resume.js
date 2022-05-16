import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import SideMenu from "../../components/SideMenu/sideMenu";
import AuthContext from "../../store";
import resumeAPI from "../../api/resumeAPI";

function Resume(props) {
  const navigator = useNavigate();
  const [state, actions] = useContext(AuthContext);
  const [side, setSide] = useState("resume");

  const [filename, setFileName] = useState([]);
  console.log("filename list", filename);
  useEffect(() => {
    getResume();
  }, [state]);
  const getResume = async () => {
    await resumeAPI
      .getCreatedResumeList()
      .then((res) => {
        setFileName(res.data.data);
        // console.log("getResume result", res.data);
      })
      .catch((error) => console.log("getResume error", error));
  };

  return (
    <style.mainContainer>
      <SideMenu side={side} setSide={setSide} />
      <style.uploadContainer>
        <style.detailContainer>
          <style.Span>이력서</style.Span>
          <style.selectionDiv>
            <style.uploadBtn onClick={() => navigator("/upload_resume")}>
              이력서 업로드
            </style.uploadBtn>
          </style.selectionDiv>
          <style.infoDiv>
            <style.titleSpan style={{ marginLeft: "10px" }}>
              제목
            </style.titleSpan>
          </style.infoDiv>
          {filename.length === 0 ? (
            <style.noResume>
              <style.noResumeText>등록된 이력서가 없습니다.</style.noResumeText>
              <style.noResumeText>
                새 이력서를 등록하려면 이력서 업로드 버튼을 눌러 진행해주세요.
              </style.noResumeText>
            </style.noResume>
          ) : (
            <>
              {filename.map((e, idx) => (
                <style.evaluationDetail>
                  <style.leftDiv>
                    <style.fileImg src="/images/common/fileIcon.png" />
                    <style.evaluationTitle>{e}</style.evaluationTitle>
                  </style.leftDiv>
                  <style.rightDiv>
                    <style.greenButton>보기</style.greenButton>
                    <style.Buttons>삭제</style.Buttons>
                  </style.rightDiv>
                </style.evaluationDetail>
              ))}
            </>
          )}
        </style.detailContainer>
      </style.uploadContainer>
    </style.mainContainer>
  );
}

export default Resume;
