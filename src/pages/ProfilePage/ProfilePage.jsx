import "./ProfilePage.scss";

const ProfilePage = () => {
  return (
    <section className="profile">
      <div className="heading">Header</div>

      <div className="events">
        <div className="events-upcoming">
          <h3>Upcoming events</h3>
          <div>Upcoming event 1</div>
          <div>Upcoming event 1</div>
        </div>

        <div className="events-joined">
          <h3>You Joined Communities</h3>
          <div className="community-card">
            <h4 className="community-card__title">Community Name</h4>
            <span className="community-card__people">5 people</span>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
