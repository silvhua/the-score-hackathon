import { useEffect, useState } from "react";
import "./HomePage.scss";
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
    <main className='home'>
      <CalendarComponent 
        eventsData={eventsData} 
        handleDateClick={handleDateClick}
        selectedDate={selectedDate}
      />
      <EventsList 
        eventsData={filteredEvents} 
      />
    </main>
  
  );
};

export default HomePage;
