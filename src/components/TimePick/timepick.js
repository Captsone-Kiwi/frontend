import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import "./styles.css";

function TimePick(props) {
  return (
    <DatePicker
      className="time-input"
      selected={props.selectedTime}
      onChange={props.onChange}
      locale={ko}
      timeIntervals={5}
      showTimeSelect
      showTimeSelectOnly
      timeCaption="Time"
      dateFormat="HH : mm"
    />
  );
}

export default TimePick;
