import zIndex from "@mui/material/styles/zIndex";
import React, { useState } from "react";
import * as style from "./styles";

function EvalPerson(props) {
  const [isOpenName, setIsOpenName] = useState(false);
  const togglingName = () => setIsOpenName(!isOpenName);
  const onNameClicked = (value) => () => {
    props.setSelectedNames(value);
    setIsOpenName(false);
  };
  return (
    <style.Main>
      <style.DropDownContainer>
        <style.DropDownHeader onClick={togglingName}>
          {props.selectedName}
        </style.DropDownHeader>
        <style.DropDownListContainer>
          {isOpenName && (
            <style.DropDownList>
              {props.interviewee.map((e) => (
                <style.ListItem onClick={onNameClicked(e)} key={Math.random()}>
                  {e}
                </style.ListItem>
              ))}
            </style.DropDownList>
          )}
        </style.DropDownListContainer>
      </style.DropDownContainer>
    </style.Main>
  );
}

export default EvalPerson;
