import React, { useState, useCallback } from "react";
import CreatableSelect from "react-select/creatable";
import "./styles.css";

function CategorySelect(props) {
  const [value, setValue] = useState();

  const [options, setOptions] = useState([
    { value: "인성 평가", label: "인성 평가" },
    { value: "능력 평가", label: "능력 평가" },
    { value: "전공 적합성", label: "전공 적합성" },
    { value: "발전 가능성", label: "발전 가능성" },
  ]);

  const handleChange = useCallback((inputValue) => {
    const setCategory = { ...props.evaluationInfo };
    setValue(inputValue);
    setCategory["evaluationList"]["category"] = inputValue.value;
    props.setEvaluationInfo(setCategory);
  }, []);

  const handleCreate = useCallback(
    (inputValue) => {
      const newValue = { value: inputValue.toLowerCase(), label: inputValue };
      const setCategory = { ...props.evaluationInfo };
      setOptions([...options, newValue]);
      setValue(newValue);
      setCategory["evaluationList"]["category"] = newValue.value;
      props.setEvaluationInfo(setCategory);
    },
    [options]
  );

  return (
    <div style={{ width: "170px" }}>
      <CreatableSelect
        // isClearable
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
