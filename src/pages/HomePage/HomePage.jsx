import { useState } from "react";

import CalendarComponent from "../../components/CalendarComponent/CalendarComponent";
import eventData from '../../data/data.json';

import EventsList from "../../components/EventsList/EventsList.jsx";

const HomePage = () => {

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (value) => {
    setSelectedDate(value);
  }

  // console.log(selectedDate)
  return (
    <main>
      <CalendarComponent 
        eventData={eventData} 
        handleDateClick={handleDateClick}
        />
      <EventsList />
    </main>
  
  );
};

export default HomePage;
