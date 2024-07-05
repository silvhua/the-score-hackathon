import { Link } from "react-router-dom";
import "./EventsList.scss";
import eventsData from "../../data/data.json";

// this component will take in filtered data
const EventsList = () => {
  //   const formatter = new Intl.DateTimeFormat("en-US", {
  //     day: "2-digit",
  //     month: "2-digit",
  //     year: "numeric",
  //   });

  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
  });

  return (
    <main>
      {eventsData.events.map((event) => {
        return (
          // console.log(event);
          <section className="containers" key={event.id}>
            <Link to={`/event/${event.id}`} className="event-card__container">
              <section className="event-card">
                {/* <div className="text"> */}
                {/* <div className="event__title">
                  {event.name} */}
                <div className="card-banner">
                  <div className="event__title">{event.name}</div>

                  {/* {event.name === "Baller Meetup" ||
                  event.name === "Hoop Heroes Hangout" ? (
                    <img
                      src="./src/assets/icons/sports-basketball-svgrepo-com.svg"
                      alt="basketball"
                      className="basketball"
                    ></img>
                  ) : (
                    ""
                  )} */}
                </div>
                <div className="event__details">
                  <div className="event__details--col-1">
                    <div className="time">
                      {formatter.format(Date.parse(event.datetime))}
                    </div>
                    <div className="cost">
                      {event.id % 2 === 0 ? "$$" : "FREE"}
                    </div>
                  </div>
                  <div className="event__details--col-2">
                    <div className="location">{event.location}</div>
                    <div className="attendees">
                      {" "}
                      {event.attendees.length} attendees
                    </div>
                  </div>
                </div>
                {/* </div> */}
                {/* <div className="icon"></div> */}
              </section>
              <div className="icons">
                {event.name === "Baller Meetup" ||
                event.name === "Hoop Heroes Hangout" ? (
                  <img
                    src="./src/assets/icons/sports-basketball-svgrepo-com.svg"
                    alt="basketball"
                    className="sport-icon"
                  ></img>
                ) : (
                  ""
                )}
              </div>
              <div className="icons">
                {event.name === "Football Fiesta" ||
                event.name === "First Down Fanfare" ? (
                  <img
                    src="./src/assets/icons/sports-football-svgrepo-com.svg"
                    alt="basketball"
                    className="sport-icon"
                  ></img>
                ) : (
                  ""
                )}
              </div>
              <div className="icons">
                {event.name === "Tennis Tournament Thrills" ? (
                  <img
                    src="./src/assets/icons/sports-tennis-svgrepo-com.svg"
                    alt="basketball"
                    className="sport-icon"
                  ></img>
                ) : (
                  ""
                )}
              </div>
            </Link>
          </section>
        );
      })}
    </main>
  );
};

export default EventsList;