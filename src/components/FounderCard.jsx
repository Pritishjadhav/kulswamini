import './Cards.css';

const FounderCard = ({ name, role, image, dob, contact, email }) => {
  const handleContactClick = (contactNumber) => {
    const cleanNumber = contactNumber.replace(/\s+/g, '');
    window.open(`tel:${cleanNumber}`, '_self');
  };

  const handleEmailClick = (emailAddress) => {
    window.open(`mailto:${emailAddress}`, '_self');
  };

  return (
    <div className="founder-card-special">
      <div className="founder-card-content">
        {/* Profile Image */}
        <div className="founder-img-wrapper">
          <img src={image} alt={name} className="founder-img" />
        </div>
        
        {/* Founder Information */}
        <div className="founder-info">
          <h3 className="founder-name">{name}</h3>
          <p className="founder-role">{role}</p>
          
          {/* Details Section */}
          <div className="founder-details">
            {dob && (
              <div className="founder-detail-item">
                <span className="founder-detail-label">Date of Birth</span>
                <span className="founder-detail-value">{dob}</span>
              </div>
            )}
            {contact && (
              <div className="founder-detail-item">
                <span className="founder-detail-label">Contact</span>
                <span 
                  className="founder-detail-value clickable-contact" 
                  onClick={() => handleContactClick(contact)}
                  title="Click to call"
                >
                  {contact}
                </span>
              </div>
            )}
            {email && (
              <div className="founder-detail-item">
                <span className="founder-detail-label">Email</span>
                <span 
                  className="founder-detail-value clickable-email" 
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

export default FounderCard;