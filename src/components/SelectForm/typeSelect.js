import React, { useMemo } from "react";
import SelectType from "react-select";
import "./styles.css";

function TypeSelect(props) {
  const options = useMemo(
    () => [
      { value: 0, label: "객관식 평가" },
      { value: 1, label: "주관식 평가" },
    ],
    []
  );
  const handleSelect = (e) => {
    const setType = { ...props.evaluationInfo };
    setType["evaluationList"]["questions"][props.index]["type"] = e.value;
    props.setEvaluationInfo(setType);
  };
  return (
    <div style={{ margin: "10px 0", width: "25%" }}>
      <SelectType
        onChange={handleSelect}
        options={options}
        placeholder={"항목 유형 선택"}
        defaultValue={{ value: 0, label: "객관식 평가" }}
      />
    </div>
  );
}

export default TypeSelect;
