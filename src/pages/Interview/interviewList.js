import React from "react";
import * as style from "./listStyles";

export default function interviewList(props) {
  const { tag, setTag } = props;
  const btnClicked = (e) => {
    e.preventDefault();
    if (e.target.tagName !== "DIV") {
      let target = e.target;
      while (e.target.tagName !== "BUTTON") {
        target = target.parentNode;
      }
      setTag(target.value);
    }
  };
  return (
    <style.Container>
      <style.Span>면접</style.Span>
      <style.selectionDiv onClick={btnClicked}>
        <style.selectBtn value="new" current={tag === "new"}>
          예정
        </style.selectBtn>
        <style.selectBtn value="old" current={tag === "old"}>
          이전
        </style.selectBtn>
        <style.selectBtn value="indi" current={tag === "indi"}>
          개인 면접실
        </style.selectBtn>
        <style.selectBtn value="template" current={tag === "template"}>
          면접 템플릿
        </style.selectBtn>
      </style.selectionDiv>
    </style.Container>
  );
}
