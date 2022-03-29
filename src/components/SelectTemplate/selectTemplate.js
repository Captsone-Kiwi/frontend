import React, { useMemo } from "react";
import Select from "react-select";
import "./styles.css";

function SelectTemplate(props) {
  const options = useMemo(
    () => [
      { value: 1, label: "Small (2~3)" },
      { value: 2, label: "Medium (4~5)" },
      { value: 3, label: "Large (5~)" },
    ],
    []
  );
  const handleSelect = (e) => {
    const setTemplate = { ...props.reserveInfo };
    setTemplate["template"] = e.value;
    props.setReserveInfo(setTemplate);
  };
  return (
    <Select
      onChange={handleSelect}
      options={options}
      placeholder={"템플릿 선택"}
    />
  );
}

export default SelectTemplate;
