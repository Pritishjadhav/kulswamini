import './Cards.css';

const ActivityCard = ({ title, description, image, icon: Icon }) => {
  return (
    <div className="card activity-card">
      <div className="card-img-container">
        <img src={image} alt={title} className="card-img" />
        {Icon && (
          <div className="card-icon-badge">
            <Icon size={24} color="white" />
          </div>
        )}
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
      </div>
    </div>
  );
};
export default ActivityCard;
