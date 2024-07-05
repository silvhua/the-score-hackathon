import CommunityCard from "../../components/CommunityCard/CommunityCard";
import EventCard from "../../components/EventCard/EventCard";
import Header from "../../components/Header/Header";
import data from "../../data/data.json";
import "./ProfilePage.scss";

import basketballIcon from "../../assets/icons/sports-basketball-svgrepo-com.svg";
import footballIcon from "../../assets/icons/sports-football-svgrepo-com.svg";
import tennisIcon from "../../assets/icons/sports-tennis-svgrepo-com.svg";

const ProfilePage = () => {
  const events = data.events;
  const joinedEvents = [events[1], events[3]];
  const joinedCommunities = [
    { name: "Ice Warriors", people: 5 },
    { name: "Soccer Stars", people: 9 },
  ];

  const icons = {
    "Baller Meetup": basketballIcon,
    "Hoop Heroes Hangout": basketballIcon,
    "Football Fiesta": footballIcon,
    "First Down Fanfare": footballIcon,
    "Tennis Tournament Thrills": tennisIcon,
  };
  return (
    <section className="profile">
      <Header pageTitle={"Profile"} className="header-width" />
      <div className="profile-wrp">
        <div className="events-upcoming">
          <h3>Upcoming events</h3>
          {joinedEvents.map((joinedEvent, i) => {
            return (
              <EventCard
                icons={icons}
                key={i}
                name={joinedEvent.name}
                datetime={joinedEvent.datetime}
                location={joinedEvent.location}
                cost={joinedEvent.cost}
                attendees={joinedEvent.attendees.length}
              />
            );
          })}
        </div>

        <div className="communities-joined">
          <h3>You Joined Communities</h3>

          {joinedCommunities.map((joinedCommunity, i) => {
            return (
              <CommunityCard
                key={i}
                name={joinedCommunity.name}
                people={joinedCommunity.people}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
