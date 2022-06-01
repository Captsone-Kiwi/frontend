import React from "react";
import * as style from "./styles";
import resumeAPI from "../../api/resumeAPI";

function ResumeList(props) {
  //확장자 뺴고 보내기
  const resume_name = props.filename.split(".");

  // 이력서 삭제하기
  const deleteResume = async () => {
    await resumeAPI
      .deleteResume(resume_name[0])
      .then((res) => {
        alert("해당 이력서를 삭제하시겠습니까?");
        console.log("deleteResume result", res.data);
        window.location.reload();
        // console.log("deleteResume result", res.data);
      })
      .catch((error) => console.log("deleteResume error", error));
  };
  return (
    <style.evaluationDetail>
      <style.leftDiv>
        <style.fileImg src="/images/common/fileIcon.png" />
        <style.evaluationTitle>{props.filename}</style.evaluationTitle>
      </style.leftDiv>
      <style.rightDiv>
        <style.greenButton
        // EDIT
          onClick={() =>
            window.open(
              `http://[API Server IP]:8000/getResume?name=${resume_name[0]}`,
              "_blank"
            )
          }
        >
          보기
        </style.greenButton>
        <style.Buttons onClick={deleteResume}>삭제</style.Buttons>
      </style.rightDiv>
    </style.evaluationDetail>
  );
}

export default ResumeList;
