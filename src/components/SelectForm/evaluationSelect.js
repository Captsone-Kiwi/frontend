import React, { useState, useCallback, useEffect } from "react";
import SelectEval from "react-select";
import "./styles.css";

function EvaluationSelect(props) {
  //미완성
  const [value, setValue] = useState();

  const [options, setOptions] = useState([{ value: 0, label: "" }]);
  console.log("options", options);

  useEffect(() => {
    makeOption();
  }, [props.evaluationName]);
  const makeOption = () => {
    props.evaluationName.map(
      (e, idx) => ((options.value = idx), (options.label = e))
    );
    setOptions(options);
  };

  const handleChange = useCallback((inputValue) => {
    const setCategory = { ...props.evaluationInfo };
    setCategory["evaluationList"][props.index]["category"] = inputValue.value;
    props.setEvaluationInfo(setCategory);
    setValue(inputValue);
  }, []);

  return (
    <div>
      <SelectEval
        onChange={handleChange}
        options={options}
        placeholder={"평가항목 선택"}
      />
    </div>
  );
}

export default EvaluationSelect;
