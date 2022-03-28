import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import "./styles.css";

function DatePick(props) {
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(today);
  return (
    <DatePicker
      className="date-input"
      mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
      locale={ko}
      dateFormat="yyyy / MM / dd (eee)"
      minDate={new Date()}
    />
  );
}

export default DatePick;
