import { useNavigate } from 'react-router-dom';
import { Heart, BookOpen, TreePine, Users, ArrowRight } from 'lucide-react';
import './About.css'; // Reusing page-header classes
import './Activities.css';

const Activities = () => {
  const navigate = useNavigate();

  const activities = [
    {
      id: 1,
      title: "Social Visits",
      description: "Spreading joy by visiting orphanages and old age homes regularly to spend quality time with the residents.",
      image: "/events/activity Patoda 1.jpeg",
      icon: Users
    },
    {
      id: 2,
      title: "Self Development Workshop",
      description: "Empowering individuals through skill-building workshops focused on personal growth, leadership, and professional development.",
      image: "/events/Self Development Workshop 1.jpeg",
      icon: Users
    },
    {
      id: 3,
      title: "Motivational Visits",
      description: "Empowering youth through inspiring talks at various schools and colleges to foster leadership and positive thinking.",
      image: "/events/ainna hazare 1.jpeg",
      icon: BookOpen
    }
  ];

  return (
    <div className="page-container animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our Activities</h1>
          <p className="page-subtitle">Discover the various initiatives we undertake to serve society.</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="activities-grid">
            {activities.map((activity) => (
              <div 
                key={activity.id}
                className="activity-card"
                onClick={() => navigate(`/activities/${activity.id}`)}
              >
                <div className="activity-image-container">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="activity-image"
                  />
                  <div className="activity-overlay">
                    <activity.icon className="activity-icon" size={32} />
                    <span className="view-details">
                      Learn More
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
                <div className="activity-card-content">
                  <h3 className="activity-title">{activity.title}</h3>
                  <p className="activity-description">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Activities;
