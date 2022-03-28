import React, { useMemo } from "react";
import Select from "react-select";
import "./styles.css";

function SelectTemplate() {
  const options = useMemo(
    () => [
      { value: "small", label: "Small (2~3)" },
      { value: "medium", label: "Medium (4~5)" },
      { value: "large", label: "Large (5~)" },
    ],
    []
  );
  return <Select options={options} placeholder={"템플릿 선택"} />;
}

export default SelectTemplate;
