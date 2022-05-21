import React, { useState, useCallback, useEffect, useContext } from "react";
import SelectEval from "react-select";
import "./styles.css";
import evaluationAPI from "../../api/evaluationAPI";
import AuthContext from "../../store";

function EvaluationSelect(props) {
  const [value, setValue] = useState();
  const [state, actions] = useContext(AuthContext);

  // const [options, setOptions] = useState({ value: 0, label: "" });

  const handleChange = useCallback((inputValue) => {
    const setCategory = { ...props.evaluationInfo };
    setCategory["evaluationList"][props.index]["category"] = inputValue.value;
    props.setEvaluationInfo(setCategory);
    setValue(inputValue);
  }, []);

  const [options, setOptions] = useState(
    props.evalId.map((e, idx) => ({
      value: e,
      label: "???",
    }))
  );
  console.log("options", options);

  return (
    <div>
      <SelectEval
        onChange={handleChange}
        // options={options}
        placeholder={"평가항목 선택"}
      />
    </div>
  );
}

export default EvaluationSelect;
