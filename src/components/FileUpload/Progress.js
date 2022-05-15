import React from "react";
import PropTypes from "prop-types";

function Progress(props) {
  return (
    <div
      className="progress"
      style={{ backgroundColor: "#E1E5E3", borderRadius: "12px" }}
    >
      <div
        className="progress-bar progress-bar-striped bg-success"
        role="progressbar"
        style={{
          width: `${props.percentage}%`,
          backgroundColor: "#3CB371",
          borderRadius: "12px",
          height: "fit-content",
        }}
      >
        <p
          style={{
            marginLeft: "10px",
            marginBlock: "0px",
            fontWeight: "500",
            padding: "7px 12px",
          }}
        >
          {props.percentage}%
        </p>
      </div>
    </div>
  );
}

Progress.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default Progress;
