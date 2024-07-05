import "./CommunityCard.scss";

const CommunityCard = ({ name, people }) => {
  return (
    <div className="community-card">
      <h4 className="community-card__title">{name}</h4>
      <span className="community-card__people">{people} people</span>
    </div>
  );
};

export default CommunityCard;
