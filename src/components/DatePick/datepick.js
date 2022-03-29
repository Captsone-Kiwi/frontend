import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import "./styles.css";

function DatePick(props) {
  return (
    <DatePicker
      className="date-pick"
      mode="single"
      selected={props.selectedDay}
      onSelect={props.setSelectedDay}
      onChange={props.onChange}
      locale={ko}
      dateFormat="yyyy / MM / dd (eee)"
      minDate={new Date()}
    />
  );
}

export default DatePick;
