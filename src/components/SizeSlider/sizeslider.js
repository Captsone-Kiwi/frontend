import React, { useState } from "react";
import * as style from "./styles";

function SizeSlider(props) {
  const [score, setScore] = useState(Number(0));
  const storeScore = props.storeScore;
  console.log("qqqqq", Number(storeScore));

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
        key={props.idx}
        // defaultValue={Number(props.storeScore)}
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
        marks
        min={0}
        max={100}
        aria-labelledby="input-slider"
      />
      <style.Input
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
          max: 100,
          type: "number",
          "aria-labelledby": "input-slider",
        }}
      />
    </style.SliderBox>
  );
}

export default SizeSlider;
