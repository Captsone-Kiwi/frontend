import zIndex from "@mui/material/styles/zIndex";
import React, { useState } from "react";
import * as style from "./styles";
import EvalQuestions from "./EvalQuestions";

function EvalList({ quests, onToggle }) {
  const names = ["백소현", "김찬미", "양진우"];
  const [isOpenName, setIsOpenName] = useState(false);
  const [selectedName, setSelectedNames] = useState(names[0]);
  const togglingName = () => setIsOpenName(!isOpenName);
  const onNameClicked = (value) => () => {
    setSelectedNames(value);
    setIsOpenName(false);
  };

  console.log(quests);
  return (
    <div>
      <style.Main>
        <style.DropDownContainer>
          <style.DropDownHeader onClick={togglingName}>
            {selectedName}
          </style.DropDownHeader>
          {isOpenName && (
            <style.DropDownListContainer>
              <style.DropDownList>
                {names.map((name) => (
                  <style.ListItem
                    onClick={onNameClicked(name)}
                    key={Math.random()}
                  >
                    {name}
                  </style.ListItem>
                ))}
              </style.DropDownList>
            </style.DropDownListContainer>
          )}
        </style.DropDownContainer>
      </style.Main>

      {quests.map((quest) =>
        quest.label === selectedName ? (
          <EvalQuestions
            quest={quest}
            key={quest.label}
            onToggle={onToggle}
            name={selectedName}
          />
        ) : null
      )}
    </div>
  );
}

export default EvalList;
