import { Link } from "react-router-dom";
import "./EventsList.scss";
import Placeholder from '../../components/Placeholder/Placeholder';
import { formatDate } from "../../utils/utils";
import avatar from '../../assets/icons/Mohan-muruge.jpg';
import downArrow from '../../assets/icons/arrow_drop_down-24px.svg'

const EventsList = (props) => {
  const {
    eventsData, selectedDate, subtitle, 
    setFilteredEvents, allEventsData, setSelectedDate,
    toggleExpander, setToggleExpander
  } = props;

  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
  });


  const handleToggleclick = () => {
    setFilteredEvents(allEventsData);
    setSelectedDate(null);
    setToggleExpander(!toggleExpander);
  }

  if (!eventsData) {
    return <Placeholder />
  }
  console.log(toggleExpander)

  return (
    <article className='events'>
      
      <h2 className='home__subtitle'>{subtitle}</h2>
      {eventsData.map((event) => {
        let eventDate;
        subtitle !== 'Upcoming Events'  ? eventDate = '': eventDate = formatDate(new Date(event.datetime))
        return (
          <section className="containers" key={event.id}>
            <Link to={`/event/${event.id}`} className="event-card__container">
              <section className="event-card">
                <div className="card-banner">
                  <div className="event__title">
                    <h3>{event.name}</h3>
                    <p className='event__date'>{eventDate}</p>
                  </div>
                </div>
                <div className="event__details">
                  <div className="event__details--col-1">
                    <div className="time">
                      {formatter.format(Date.parse(event.datetime))}
                    </div>
                    <div className="cost">
                      {event.cost}
                    </div>
                  </div>
                  <div className="event__details--col-2">
                    <div className="location">{event.location}</div>
                    <div className="avatars">
                      {event.attendees.map((attendee) => {
                        return (
                          <div className="avatar-div" key={attendee.id}>
                            <img 
                              src={avatar} className="avatar-div__img" 
                              alt={attendee.name} title={attendee.name}
                            />
                          </div>
                          )
                        }
                      )
                    }
                    </div>
                    <div className="attendees">
                      {event.attendees.length} attendees
                    </div>
                  </div>
                </div>
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
    <div 
      className={toggleExpander || selectedDate ? "expand-toggle" : "expand-toggle hidden"} 
      onClick={handleToggleclick}
      >
      <p className="expand-toggle__text">Show all...</p>
      <img src={downArrow} alt="down arrow" className="expand-toggle__arrow" />
    </div>
    </article>
  );
};

export default EventsList;
