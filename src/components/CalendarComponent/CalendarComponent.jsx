import { useState } from "react";
import "./CalendarComponent.scss";
import Calendar from "react-calendar";
import isSameDate from "../../utils/utils";
import data from '../../data/data.json';

const CalendarComponent = () => {
  const datesToAddClassTo = [new Date()];
  const className = 'date__today'
  const [value, setValue] = useState(new Date());
  let eventDates = data.events.map(event => new Date(event.datetime));
  console.log(eventDates);

  function tileClassName({ date, view }) {
    // Add class to tiles in month view only
    if (view === 'month') {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      if (eventDates.find(dDate => isSameDate(dDate, date))) {
        return className;
      }
    }
  }

  function onChange(nextValue) {
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
