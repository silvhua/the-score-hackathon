import CommunityCard from "../../components/CommunityCard/CommunityCard";
import EventCard from "../../components/EventCard/EventCard";
import Header from "../../components/Header/Header";
import data from "../../data/data.json";
import "./ProfilePage.scss";

const ProfilePage = () => {
  const events = data.events;
  const joinedEvents = [events[1], events[3]];
  const joinedCommunities = [
    { name: "Ice Warriors", people: 5 },
    { name: "Soccer Stars", people: 9 },
  ];

  const icons = {
    "Baller Meetup": "../../assets/icons/sports-basketball-svgrepo-com.svg",
    "Hoop Heroes Hangout":
      "../../assets/icons/sports-basketball-svgrepo-com.svg",
    "Football Fiesta": "../../assets/icons/sports-football-svgrepo-com.svg",
    "First Down Fanfare": "../../assets/icons/sports-football-svgrepo-com.svg",
    "Tennis Tournament Thrills":
      "../../assets/icons/sports-tennis-svgrepo-com.svg",
  };
  return (
    <section className="profile">
      <Header pageTitle={"Profile"} className="width" />
      <div className="profile-wrp">
        <div className="events-upcoming">
          <h3>Upcoming events</h3>
          <div className="events-upcoming-wrp">
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
        </div>

        <div className="communities-joined">
          <h3>Your Joined Communities</h3>
          <div className="communities-joined-wrp">
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
      </div>
    </section>
  );
};

export default ProfilePage;
