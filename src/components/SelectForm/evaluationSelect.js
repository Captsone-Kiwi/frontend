import React, { useState, useMemo } from "react";
import SelectEval from "react-select";
import "./styles.css";

function EvaluationSelect(props) {
  const handleSelect = (e) => {
    const setTemplate = { ...props.reserveInfo };
    setTemplate["template"] = e.value;
    props.setReserveInfo(setTemplate);
  };

  const options = useMemo(() =>
    props.evalInfo.map((e, idx) => ({
      value: e.id,
      label: e.name,
    }))
  );
  console.log("options", options);

  return (
    <div style={{ width: "100%" }}>
      <SelectEval
        onChange={handleSelect}
        options={options}
        placeholder={"평가항목 선택"}
      />
    </div>
  );
}

export default EvaluationSelect;
