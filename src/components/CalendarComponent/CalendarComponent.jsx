import { useState } from "react";
import "./CalendarComponent.scss";
import Calendar from "react-calendar";
import isSameDate from "../../utils/utils";
import data from '../../data/data.json';

const CalendarComponent = () => {
  const datesToAddClassTo = [new Date()];
  const eventClass = 'react-calendar__tile--event'
  const dateTileClass = 'react-calendar__tile'
  const [value, setValue] = useState(new Date());
  let eventDates = data.events.map(event => new Date(event.datetime));

  function tileClassName({ date, view }) {
    // Add class to tiles in month view only
    if (view === 'month') {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      if (eventDates.find(dDate => isSameDate(dDate, date))) {
        return eventClass;
      } else {
        return dateTileClass;
      }
    }
  }

  function onChange(nextValue) {
    setValue(nextValue);
  }
  return (
    <>
      <Calendar className='calendar'
        onChange={onChange}
        tileClassName={tileClassName}
      />
    </>
  );
};

export default CalendarComponent;
