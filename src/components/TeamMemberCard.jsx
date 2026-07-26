import './Cards.css';

const TeamMemberCard = ({ name, role, image, dob, contact, email }) => {
  const handleContactClick = (contactNumber) => {
    // Remove spaces and format for tel: link
    const cleanNumber = contactNumber.replace(/\s+/g, '');
    window.open(`tel:${cleanNumber}`, '_self');
  };

  const handleEmailClick = (emailAddress) => {
    window.open(`mailto:${emailAddress}`, '_self');
  };

  return (
    <div className="team-card-container">
      <div className="team-card">
        {/* Front Side */}
        <div className="team-card-front">
          <div className="team-img-wrapper">
            <img src={image} alt={name} className="team-img" />
          </div>
          <div className="team-info">
            <h3 className="team-name">{name}</h3>
            <p className="team-role">{role}</p>
          </div>
        </div>
        
        {/* Back Side - Details */}
        <div className="team-card-back">
          <div className="team-details-content">
            <div className="detail-item">
              <span className="detail-label">Name</span>
              <span className="detail-value">{name}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Position</span>
              <span className="detail-value">{role}</span>
            </div>
            {dob && (
              <div className="detail-item">
                <span className="detail-label">Date of Birth</span>
                <span className="detail-value">{dob}</span>
              </div>
            )}
            {contact && (
              <div className="detail-item">
                <span className="detail-label">Contact</span>
                <span 
                  className="detail-value clickable-contact" 
                  onClick={() => handleContactClick(contact)}
                  title="Click to call"
                >
                  {contact}
                </span>
              </div>
            )}
            {email && (
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span 
                  className="detail-value clickable-email" 
                  onClick={() => handleEmailClick(email)}
                  title="Click to send email"
                >
                  {email}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamMemberCard;
