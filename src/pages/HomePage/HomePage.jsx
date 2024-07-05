import { useEffect, useState } from "react";

import CalendarComponent from "../../components/CalendarComponent/CalendarComponent";
import data from '../../data/data.json';
import isSameDate from "../../utils/utils.js";

import EventsList from "../../components/EventsList/EventsList.jsx";

const HomePage = () => {
  let eventData = data.events;
  const [selectedDate, setSelectedDate] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState(eventData)

  const handleDateClick = (value) => {
    setSelectedDate(value);
  }

  useEffect(() => {
    if (selectedDate) {
      const filteredData = eventData.filter((object) => {
        const eventDate = new Date(object.datetime);
        return isSameDate(eventDate, selectedDate);
      })
      setFilteredEvents(filteredData)

    }
  }, [selectedDate])

  return (
    <main>
      <CalendarComponent 
        eventData={eventData} 
        handleDateClick={handleDateClick}
        />
      <EventsList 
        eventData={filteredEvents} 
      />
    </main>
  
  );
};

export default HomePage;
