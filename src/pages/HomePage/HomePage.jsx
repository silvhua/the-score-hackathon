import { useEffect, useState } from "react";
import "./HomePage.scss";
import CalendarComponent from "../../components/CalendarComponent/CalendarComponent";
import data from "../../data/data.json";
import isSameDate, { formatDate } from "../../utils/utils.js";
import Header from "../../components/Header/Header.jsx";

import EventsList from "../../components/EventsList/EventsList.jsx";

const HomePage = () => {
  let eventsData = data.events;
  const [selectedDate, setSelectedDate] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState(null);
  const [subtitle, setSubtitle] = useState();
  const [toggleExpander, setToggleExpander] = useState(true);
  let eventDates = eventsData.map(event => new Date(event.datetime));

  const handleDateClick = (value) => {
    setSelectedDate(value);
    if (selectedDate && !toggleExpander) {
    setToggleExpander(true);
    }
  }
  

  useEffect(() => {
    if (
      selectedDate &&
      eventDates.find((eventDate) => isSameDate(selectedDate, eventDate))
    ) {
      const filteredData = eventsData.filter((object) => {
        const eventDate = new Date(object.datetime);
        return isSameDate(eventDate, selectedDate);
      });
      setFilteredEvents(filteredData);
      setSubtitle(`Events for ${formatDate(selectedDate)}`);
    } else if (!toggleExpander) {
      setFilteredEvents(eventsData);
    } else {
      const nextEvents = eventsData.filter(
        (object) => new Date(object.datetime) > new Date()
      );
      setFilteredEvents(nextEvents.slice(0, 3));
      setSubtitle("Upcoming Events");
    }
  }, [selectedDate]);
  return (
    <>
      <Header pageTitle={"Toronto Community"} />
      <main>
        <div className="home">
          <h1 className="home__title">
            Welcome to the Score's {data.location} Community
          </h1>
          <div className="home__body">
            <CalendarComponent
              eventsData={eventsData}
              handleDateClick={handleDateClick}
              selectedDate={selectedDate}
              eventDates={eventDates}
              toggleExpander={toggleExpander}
              setToggleExpander={setToggleExpander}
            />
            <EventsList
              eventsData={filteredEvents}
              selectedDate={selectedDate}
              subtitle={subtitle}
              setFilteredEvents={setFilteredEvents}
              allEventsData={eventsData}
              setSelectedDate={setSelectedDate}
              toggleExpander={toggleExpander}
              setToggleExpander={setToggleExpander}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
