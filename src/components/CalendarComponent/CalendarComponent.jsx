import { useState } from "react";
import "./CalendarComponent.scss";
import Calendar from "react-calendar";
import isSameDate from "../../utils";

const CalendarComponent = () => {
  const datesToAddClassTo = [new Date()];
  const className = 'date__today'
  const [value, setValue] = useState(new Date());

  function tileClassName({ date, view }) {
    // Add class to tiles in month view only
    if (view === 'month') {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      if (datesToAddClassTo.find(dDate => isSameDate(dDate, date))) {
        return className;
      }
    }
  }

  function onChange(nextValue) {
    console.log('next value', nextValue.setHours(0, 0,0,0));
    console.log('today value', datesToAddClassTo[0]);
    setValue(nextValue);
  }
  return (
    <><h1 className='calendar'>Calendar</h1>
      <Calendar
        onChange={onChange}
        tileClassName={tileClassName}
      />
    </>
  );
};

export default CalendarComponent;
