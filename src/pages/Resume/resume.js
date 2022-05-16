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
  useEffect(() => {
    getResume();
  }, [state]);
  const getResume = async () => {
    await resumeAPI
      .getResume()
      .then((res) => {
        setFileName(res.data.data);
        console.log("getResume result", res.data);
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
        </style.detailContainer>
      </style.uploadContainer>
    </style.mainContainer>
  );
}

export default Resume;
