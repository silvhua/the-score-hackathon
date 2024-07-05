// import "./Calendar.scss";
import Calendar from "react-calendar";
import { useState } from "react";

const CalendarComponent = () => {
  const dateToAddClassTo = Date.now();
  const [value, setValue] = useState(dateToAddClassTo);

  function onChange(nextValue) {
    setValue(nextValue);
  }
  console.log(value);

  return (
    <>
      <Calendar
        onChange={onChange}
        value={value}
        // tileClassName={tileClassName}
      />
    </>
  );
};

export default CalendarComponent;
