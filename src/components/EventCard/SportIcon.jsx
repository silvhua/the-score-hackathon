import "./SportIcon.scss";
import basketballIcon from "../../assets/icons/sports-basketball-svgrepo-com.svg";
import footballIcon from "../../assets/icons/sports-football-svgrepo-com.svg";
import tennisIcon from "../../assets/icons/sports-tennis-svgrepo-com.svg";

const icons = {
  "Baller Meetup": basketballIcon,
  "Hoop Heroes Hangout": basketballIcon,
  "Football Fiesta": footballIcon,
  "First Down Fanfare": footballIcon,
  "Tennis Tournament Thrills": tennisIcon,
};

const SportIcon = ({ eventName }) => {
  const iconSrc = icons[eventName];

  if (!iconSrc) return null;

  return (
    <div className="icons">
      <img src={iconSrc} alt={eventName} className="sport-icon" />
    </div>
  );
};

export default SportIcon;
