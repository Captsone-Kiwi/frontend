import React, { useState, useCallback, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import "./styles.css";

function CategorySelect(props) {
  const [value, setValue] = useState();

  // const [options, setOptions] = useState([
  //   { value: "자기 표현력", label: "자기 표현력" },
  //   { value: "협업 역량", label: "협업 역량" },
  //   { value: "직무 역량", label: "직무 역량" },
  //   { value: "태도 역량", label: "태도 역량" },
  // ]);

  const [options, setOptions] = useState([
    { value: 0, label: "자기 표현력" },
    { value: 1, label: "협업 역량" },
    { value: 2, label: "직무 역량" },
    { value: 3, label: "태도 역량" },
  ]);

  // const setCategory = { ...props.categoryList };
  // setCategory[0] = { category: "자기 표현력" };
  // setCategory[1] = { category: "협업 역량" };
  // setCategory[2] = { category: "직무 역량" };
  // setCategory[3] = { category: "태도 역량" };
  // props.setCategoryList(setCategory);

  const handleChange = useCallback((inputValue) => {
    setValue(inputValue);
  }, []);

  const [currIdx, setCurrIdx] = useState(3);
  const handleCreate = useCallback(
    (inputValue) => {
      const newValue = { value: currIdx + 1, label: inputValue };
      setOptions([...options, newValue]);
      setValue(newValue);
      const setCategory = { ...props.categoryList };
      setCategory["evaluationList"][currIdx + 1] = {
        category: newValue.label,
      };
      props.setCategoryList(setCategory);
      setCurrIdx(currIdx + 1);
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
