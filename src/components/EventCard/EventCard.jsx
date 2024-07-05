import "./EventCard.scss";
import { formatDate } from "../../utils/utils";
// import SportIcon from "../SportIcon/SportIcon";

const formatter = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
});

const EventCard = ({ name, datetime, location, cost, attendees, icons }) => {
  return (
    <div className="profile-event-card">
      <div className="profile-event-card__content">
        <h3 className="profile-event-card__name">{name}</h3>
        <span className="profile-event-card__date">
          {formatDate(new Date(datetime))}
        </span>
        <div className="profile-event-card__details">
          <span className="profile-event-card__time">
            {formatter.format(Date.parse(datetime))}
          </span>
          <span className="profile-event-card__location">{location}</span>
        </div>
        <div className="profile-event-card__details">
          <span className="profile-event-card__cost">{cost}</span>
          <span className="profile-event-card__attendees">
            {attendees} attendees
          </span>
        </div>
      </div>

      {/* <SportIcon eventName={name} icons={icons} /> */}
    </div>
  );
};

export default EventCard;
