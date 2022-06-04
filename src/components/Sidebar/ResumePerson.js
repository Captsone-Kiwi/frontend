import zIndex from "@mui/material/styles/zIndex";
import React, { useState } from "react";
import * as style from "./styles";

function ResumePerson(props) {
  const [isOpenName, setIsOpenName] = useState(false);
  const togglingName = () => setIsOpenName(!isOpenName);
  const onNameClicked = (value) => () => {
    props.setSelectedNames(value);
    props.setEmbedURL(`http://35.174.145.15:8000/getResume?name=${value}`);
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

export default ResumePerson;
