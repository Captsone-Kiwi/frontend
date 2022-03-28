import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import "./styles.css";

function TimePick(props) {
  const now = new Date();
  const [selectedTime, setSelectedTime] = useState(now);
  return (
    <DatePicker
      className="time-input"
      selected={selectedTime}
      onChange={(time) => setSelectedTime(time)}
      locale={ko}
      timeIntervals={5}
      showTimeSelect
      showTimeSelectOnly
      timeCaption="Time"
      dateFormat="h : mm"
    />
  );
}

export default TimePick;
