import React from "react";
import * as style from "./listStyles";

export default function interviewList(props) {
  return (
    <style.Container>
      <style.Span>면접</style.Span>
      <style.selectionDiv>
        <style.selectBtn>예정</style.selectBtn>
        <style.selectBtn>이전</style.selectBtn>
        <style.selectBtn>개인 면접실</style.selectBtn>
        <style.selectBtn>면접 템플릿</style.selectBtn>
      </style.selectionDiv>
    </style.Container>
  );
}
