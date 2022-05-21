import React, { useState } from "react";
import * as style from "./styles";

function SizeSlider(props) {
  // 저장되는 값들 -> data
  const [score, setScore] = useState(Number(props.storeScore));
  // 평가항목에서 설정한 최대 점수값 -> range
  const [maxScore, setMaxScore] = useState(Number(props.maxScore));

  const handleBrushSize = (e, newValue, index, idx, selectedName) => {
    const array = JSON.parse(JSON.stringify(props.data));

    const name = array.findIndex((emp) => emp.label === selectedName);
    const temp = array.map((d) => (d.label === selectedName ? { ...d } : null));
    temp[name]["evaluation"][index]["questions"][idx]["data"] =
      Number(newValue);

    const copyArray = props.data.map((d) =>
      d.label === selectedName ? temp[name] : d
    );
    props.setData(copyArray);
    setScore(Number(newValue));
  };

  const handleInputChange = (e, newValue, index, idx, selectedName) => {
    const array = JSON.parse(JSON.stringify(props.data));

    const name = array.findIndex((emp) => emp.label === selectedName);
    const temp = array.map((d) => (d.label === selectedName ? { ...d } : null));
    temp[name]["evaluation"][index]["questions"][idx]["data"] = Number(
      e.target.value
    );

    const copyArray = props.data.map((d) =>
      d.label === selectedName ? temp[name] : d
    );
    props.setData(copyArray);
    setScore(e.target.value === "" ? "" : Number(e.target.value));
  };

  const handleBlur = () => {
    if (score < 0) {
      setScore(0);
    } else if (score > 10) {
      setScore(10);
    }
  };

  return (
    <style.SliderBox>
      <style.SizeSlider
        defaultValue={score}
        key={props.idx}
        value={score}
        onChange={(e, newValue) =>
          handleBrushSize(
            e,
            newValue,
            props.index,
            props.idx,
            props.selectedName
          )
        }
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={maxScore}
        aria-labelledby="input-slider"
      />
      <style.Input
        defaultValue={score}
        value={score}
        size="small"
        onChange={(e, newValue) =>
          handleInputChange(
            e,
            newValue,
            props.index,
            props.idx,
            props.selectedName
          )
        }
        onBlur={handleBlur}
        inputProps={{
          step: 1,
          min: 0,
          max: maxScore,
          type: "number",
          "aria-labelledby": "input-slider",
        }}
      />
    </style.SliderBox>
  );
}

export default SizeSlider;
