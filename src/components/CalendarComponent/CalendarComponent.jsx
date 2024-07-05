// import { useState } from "react";
import "./CalendarComponent.scss";
import Calendar from "react-calendar";
import isSameDate from "../../utils/utils";

const CalendarComponent = (props) => {
  const {eventsData, handleDateClick, selectedDate, eventDates} = props;
  const eventClass = 'react-calendar__tile--event'
  const dateTileClass = 'react-calendar__tile'
  const todaysDate = new Date();

  function tileClassName({ date, view }) {
    let classNames = '';
    // Add class to tiles in month view only
    if (view === 'month') {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      if (eventDates.find(dDate => isSameDate(dDate, date))) {
        classNames = eventClass;
      } else {
        classNames = dateTileClass;
      }
    }
    if (isSameDate(todaysDate, date)) {
      classNames += ' react-calendar__tile--today';
    }

    if (selectedDate && isSameDate(selectedDate, date)) {
      classNames += ' react-calendar__tile--selected';
    }
    return classNames;
  }

  return (
    <>
      <Calendar className='calendar'
        onChange={handleDateClick}
        tileClassName={tileClassName}
      />
    </>
  );
};

export default CalendarComponent;
