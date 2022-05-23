import React, { useMemo } from "react";
import SelectType from "react-select";
import "./styles.css";

function TypeSelect(props) {
  // 평가항목 유형 선택
  const options = useMemo(
    () => [
      { value: 0, label: "점수형 평가" },
      { value: 1, label: "입력형 평가" },
    ],
    []
  );
  const handleSelect = (e) => {
    const setType = { ...props.evaluationInfo };
    setType["evaluationList"][props.index]["type"] = e.value;
    props.setEvaluationInfo(setType);
  };

  return (
    <div style={{ margin: "8px 0 8px 0px", width: "17%" }}>
      <SelectType
        onChange={handleSelect}
        options={options}
        placeholder={"항목 유형 선택"}
        defaultValue={{ value: 0, label: "점수형 평가" }}
      />
    </div>
  );
}

export default TypeSelect;
