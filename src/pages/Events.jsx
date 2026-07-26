import { useNavigate } from 'react-router-dom';
import { Calendar, Users, Heart, TreePine, BookOpen, Handshake, ArrowRight } from 'lucide-react';
import './About.css'; // Reusing page-header classes
import './Events.css'; // Event-specific styles

const Events = () => {
  const navigate = useNavigate();
  const events = [
    {
      id: 3,
      title: "Green Pune Initiative 2019-20",
      date: "2019-20",
      participants: "15+ Volunteers",
      image: "/events/Event tree plantation 1.jpeg",
      icon: TreePine
    },
    {
      id: 4,
      title: "Youth Entrepreneur Summit",
      date: "2022",
      participants: "400+ Students",
      image: "/events/Mane 3.jpeg",
      icon: BookOpen
    },
    {
      id: 7,
      title: "Free Health Camp",
      date: "Yearly",
      participants: "500+ Warkaris",
      image: "/events/warkari 1.jpeg",
      icon: Heart
    },
    {
      id: 1,
      title: "Mega Blood Donation Camp 2024",
      date: "March 15, 2024",
      participants: "150+ Donors",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: Heart
    },
    {
      id: 2,
      title: "Community Unity Drive",
      date: "February 20, 2024",
      participants: "500+ Volunteers",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: Handshake
    },
    {
      id: 5,
      title: "Skill Development Workshop",
      date: "November 18, 2023",
      participants: "80+ Participants",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: Users
    },
    {
      id: 6,
      title: "Children's Joy Festival",
      date: "October 14, 2023",
      participants: "120+ Children",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: Heart
    }
  ];

  return (
    <div className="page-container animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Events & Gallery</h1>
          <p className="page-subtitle">Discover our impactful events and community initiatives that are making a difference.</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="events-grid">
            {events.map((event) => (
              <div 
                key={event.id} 
                className="event-card"
                onClick={() => navigate(`/events/${event.id}`)}
              >
                <div className="event-image-container">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="event-image"
                  />
                  <div className="event-overlay">
                    <event.icon className="event-icon" size={32} />
                    <span className="view-details">
                      View Details
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
                <div className="event-card-content">
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-meta">
                    <span className="event-date">
                      <Calendar size={14} />
                      {event.date}
                    </span>
                    <span className="event-participants">
                      <Users size={14} />
                      {event.participants}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Events;
