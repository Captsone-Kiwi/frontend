import React, { useMemo, useEffect, useState } from "react";
import SelectTemplate from "react-select";
import "./styles.css";

function TemplateSelect(props) {
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
    <SelectTemplate
      onChange={handleSelect}
      options={options}
      placeholder={"템플릿 선택"}
    />
  );
}

export default TemplateSelect;
