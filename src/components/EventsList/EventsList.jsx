import { Link } from "react-router-dom";
import "./EventsList.scss";
import eventsData from "../../data/data.json";

const EventsList = () => {
  //   console.log(eventsData.events.length);

  return (
    <main>
      {eventsData.events.map((event) => {
        return (
          // console.log(event);
          <section className="event-card__container" key={event.id}>
            <Link to={`/event/${event.id}`}>
              <section className="event-card"></section>
            </Link>
          </section>
        );
      })}
    </main>
  );
};

export default EventsList;
