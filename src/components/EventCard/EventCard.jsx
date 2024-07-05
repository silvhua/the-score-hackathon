import "./EventCard.scss";
import { formatDate } from "../../utils/utils";
import SportIcon from "./SportIcon";

const formatter = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
});

const EventCard = ({ name, datetime, location, cost, attendees }) => {
  return (
    <div className="event-card">
      <div className="event-card__content">
        <h3 className="event-card__name">{name}</h3>
        <span className="event-card__date">
          {formatDate(new Date(datetime))}
        </span>
        <div className="event-card__details">
          <span className="event-card__time">
            {formatter.format(Date.parse(datetime))}
          </span>
          <span className="event-card__location">{location}</span>
        </div>
        <div className="event-card__details">
          <span className="event-card__cost">{cost}</span>
          <span className="event-card__attendees">{attendees} attendees</span>
        </div>
      </div>

      <SportIcon eventName={name} />
    </div>
  );
};

export default EventCard;
