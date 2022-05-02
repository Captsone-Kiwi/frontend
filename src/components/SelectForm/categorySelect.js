import React, { useState, useCallback } from "react";
import CreatableSelect from "react-select/creatable";
import "./styles.css";

function CategorySelect() {
  const [value, setValue] = useState();
  const [options, setOptions] = useState([
    { value: "personality", label: "인성 평가" },
    { value: "ability", label: "능력 평가" },
    { value: "major-suitability", label: "전공 적합성" },
    { value: "potential", label: "발전 가능성" },
  ]);

  const handleChange = useCallback((inputValue) => setValue(inputValue), []);

  const handleCreate = useCallback(
    (inputValue) => {
      const newValue = { value: inputValue.toLowerCase(), label: inputValue };
      setOptions([...options, newValue]);
      setValue(newValue);
    },
    [options]
  );

  return (
    <div style={{ width: "170px" }}>
      <CreatableSelect
        isClearable
        placeholder={"카테고리 선택.."}
        value={value}
        options={options}
        onChange={handleChange}
        onCreateOption={handleCreate}
      />
    </div>
  );
}

export default CategorySelect;
