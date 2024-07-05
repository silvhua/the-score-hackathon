import { useEffect, useState } from "react";

import CalendarComponent from "../../components/CalendarComponent/CalendarComponent";
import data from '../../data/data.json';
import isSameDate from "../../utils/utils.js";


import EventsList from "../../components/EventsList/EventsList.jsx";

const HomePage = () => {
  let eventsData = data.events;
  const [selectedDate, setSelectedDate] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState(eventsData)

  const handleDateClick = (value) => {
    setSelectedDate(value);
  }

  useEffect(() => {
    if (selectedDate) {
      const filteredData = eventsData.filter((object) => {
        const eventDate = new Date(object.datetime);
        return isSameDate(eventDate, selectedDate);
      })
      setFilteredEvents(filteredData)

    }
  }, [selectedDate])
  return (
    <main>
      <CalendarComponent 
        eventsData={eventsData} 
        handleDateClick={handleDateClick}
      />
      <EventsList 
        eventsData={filteredEvents} 
        // filteredEvents={filteredEvents}
      />
    </main>
  
  );
};

export default HomePage;
