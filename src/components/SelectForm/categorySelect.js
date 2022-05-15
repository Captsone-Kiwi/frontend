import React, { useState, useCallback, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import "./styles.css";

function CategorySelect(props) {
  const [value, setValue] = useState();

  const [options, setOptions] = useState([
    { value: "자기 표현력", label: "자기 표현력" },
    { value: "협업 역량", label: "협업 역량" },
    { value: "직무 역량", label: "직무 역량" },
    { value: "태도 역량", label: "태도 역량" },
  ]);

  // const [options, setOptions] = useState([
  //   { value: 0, label: "자기 표현력" },
  //   { value: 1, label: "협업 역량" },
  //   { value: 2, label: "직무 역량" },
  //   { value: 3, label: "태도 역량" },
  // ]);

  const handleChange = useCallback((inputValue) => {
    const setCategory = { ...props.evaluationInfo };
    setCategory["evaluationList"][props.index]["category"] = inputValue.value;
    props.setEvaluationInfo(setCategory);
    setValue(inputValue);
  }, []);

  const handleCreate = useCallback(
    (inputValue) => {
      const newValue = { value: inputValue.toLowerCase(), label: inputValue };
      const setCategory = { ...props.evaluationInfo };
      setCategory["evaluationList"][props.index]["category"] = newValue.value;
      props.setEvaluationInfo(setCategory);
      setOptions([...options, newValue]);
      setValue(newValue);
    },
    [options]
  );

  return (
    <div style={{ margin: "8px 0", width: "17%" }}>
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
