import "./EventCard.scss";
import { formatDate } from "../../utils/utils";
import dateIcon from "../../assets/icon/date-white.svg";
import groupIcon from "../../assets/icon/group-white.svg";
import locationIcon from "../../assets/icon/location-white.svg";
import timeIcon from "../../assets/icon/time-white.svg";

const formatter = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
});

const EventCard = ({ name, datetime, location, cost, attendees }) => {
  return (
    <div className="profile-event-card">
      <div className="profile-event-card__content">
        <h3 className="profile-event-card__name">{name}</h3>
        <div className="icon-wrp">
          <img src={dateIcon} alt="date icon" />
          <span className="profile-event-card__date">
            {formatDate(new Date(datetime))}
          </span>
        </div>
        <div className="profile-event-card__details">
          <div className="icon-wrp">
            <img src={timeIcon} alt="time icon" />
            <span className="profile-event-card__time">
              {formatter.format(Date.parse(datetime))}
            </span>
          </div>
          <div className="icon-wrp">
            <img src={locationIcon} alt="location icon" />
            <span className="profile-event-card__location">{location}</span>
          </div>
        </div>
        <div className="profile-event-card__details">
          <div className="icon-wrp">
            <img className="icon-price" src={groupIcon} alt="location icon" />
            <span className="profile-event-card__cost">{cost}</span>
          </div>
          <div className="icon-wrp">
            <img src={groupIcon} alt="location icon" />
            <span className="profile-event-card__attendees">
              {attendees} attendees
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
