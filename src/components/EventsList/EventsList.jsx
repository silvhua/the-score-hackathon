import { useState } from "react";
import { Link } from "react-router-dom";
import "./EventsList.scss";
import eventsData from "../../data/data.json";

export const EventsList = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventsDataParsed = JSON.parse(eventsData);
  console.log(eventsDataParsed);
  return <>{"eventsDataParsed"}</>;
};
