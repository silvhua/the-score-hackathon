import locationIcon from "../../assets/icons/location.svg";
import timeIcon from "../../assets/icons/time.svg";
import dateIcon from "../../assets/icons/date.svg";
import groupIcon from "../../assets/icons/group.svg";
import profileLogo from "../../assets/icons/profile.svg"
import Header from "../../components/Header/Header";
import Data from "../../data/data.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import basketball1 from '../../assets/images/basketball1.jpg';
import basketball2 from '../../assets/images/basketball2.jpg';
import football1 from '../../assets/images/football1.jpg';
import football2 from '../../assets/images/football2.jpg';
import tennis1 from '../../assets/images/tennis1.jpg';
import './EventPage.scss';

const EventPage = () => {
  const [event, setEvent] = useState(null);
  const [registered, setRegistered] = useState(false);
  const { id } = useParams();

  const loadEvent = (eventId) => {
    setEvent(Data.events.find((item) => item.id === Number(eventId)));
  }
  
  const images = {basketball1, basketball2, football1, football2, tennis1};

  const getDate = (datetime) => {
    if (datetime) {
      const date = new Date(datetime);
      const options = { year: "numeric", month: "short", day: "numeric" };
      const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        date
      );
  
      return formattedDate
    }
   
  };

  const getTime = (datetime) => {
    if (datetime) {
      const time = new Date(datetime);
      const options = { hour: 'numeric', hour12: true, minute: 'numeric' };
      const formattedTime = time.toLocaleString('en-US', options);
      return formattedTime;
    }
  };

  const formatDateTime = (datetime) => {
    if (datetime) {
      const date = new Date(datetime);
      const formattedDate = date.toLocaleDateString("en-US");
      const formattedTime = getTime(datetime);
      return `${formattedDate}, ${formattedTime}`;
    
    }
  }

  const register = () => {
    if (!registered) {
      setRegistered(true);
      const newAttendee = {
        id: 16,
        name: "Jessica Taylor"
      }
      setEvent({
        ...event,
        attendees: [
          ...event.attendees,
          newAttendee
        ]
      })
    }
    
  }

  useEffect(() => {
    loadEvent(id);
  },[id])

  return (
    <>
      <Header pageTitle={"Event Details"} />
      <section className="event">
        <div className="event__image-container">
          <img className="event__image" src={images[event?.imgUrl]} alt={"Event Image"} />
        </div>
        <div className="event__content">
          <h3 className="event__name">{event?.name}</h3>
          <div className="event__box event__date">
            <img className="event__icon" src={dateIcon} alt={"Date Icon"} />
            <p className="event__text">{getDate(event?.datetime)}</p>
          </div>
          <div className="event__box event__time">
            <img className="event__icon" src={timeIcon} alt={"Time Icon"} />
            <p className="event__text">{getTime(event?.datetime)}</p>
          </div>
          <div className="event__box event__location">
            <img className="event__icon" src={locationIcon} alt={"Location Icon"}/>
            <p className="event__text">{event?.location}</p>
          </div>
          <div className="event__box event__attendant">
            <img className="event__icon" src={groupIcon} alt={"Group Icon"} />
            <p className="event__text">{event?.attendees?.length} attendees</p>
          </div>
          <div className="event__button-container">
            <button className="event__button" onClick={() => register()}>{registered ? "You're in!" : "Register"}</button>
          </div>
        </div>
      </section>
      <section className="discussion">
        <h3 className="discussion__title">Discussion</h3>
        {event?.comments.map((discussion) => (
          <div className="discussion__item" key={discussion?.id}>
            <div className="discussion__top-container">
              <div className="discussion__user">
                <img className="discussion__icon" src={profileLogo} alt={"Profile Logo"}/>
                <p className="discussion__name">{discussion?.name}</p>
              </div>
              <p className="discussion__date">{formatDateTime(discussion?.datetime)}</p>
            </div>
            <p className="discussion__text">{discussion?.text}</p>
        </div>
        ))}
        
      </section>
    </>)}

export default EventPage;