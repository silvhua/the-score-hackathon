import { Link } from "react-router-dom";
import "./EventsList.scss";
import eventsData from "../../data/data.json";

// this component will take in filtered data
const EventsList = () => {
  //   console.log(eventsData.events.length);

  return (
    <main>
      {eventsData.events.map((event) => {
        return (
          // console.log(event);
          <section className="containers" key={event.id}>
            <Link to={`/event/${event.id}`} className="event-card__container">
              <section className="event-card">{event.name}</section>
            </Link>
          </section>
        );
      })}
    </main>
  );
};

export default EventsList;
