import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, Clock, Heart, TreePine, BookOpen, CheckCircle, Target, Award } from 'lucide-react';
import './About.css';
import './EventDetail.css';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const events = [
    {
      id: 3,
      title: "Green Pune Initiative 2019-20",
      date: "2019-20",
      location: "Pabal near Vigyan Ashram",
      participants: "15+ Volunteers",
      duration: "5+5 hours",
      image: "/events/Event tree plantation 1.jpeg",
      icon: TreePine,
      description: "Independence Day special tree plantation drive where we planted over 500+ native tree saplings to contribute to Pune's green cover. This environmental initiative aimed to combat air pollution and create sustainable green spaces for future generations.",
      highlights: [
        "500+ native tree saplings planted across strategic locations",
        "Environmental awareness sessions for participants",
        "Tree adoption program ensuring long-term care",
        "Collaboration with Vigyan Ashram Pabal",
        "Soil preparation and scientific planting methods used",
        "At-Pabal, Tal-Shirur, Dist-Pune 412403"
      ],
      impact: "Contributed significantly to increasing Pune's green cover and raised environmental awareness among participants.",
      organizer: "Kulswamini Pratishthan Pune",
      gallery: [
        "/events/Event tree plantation 1.jpeg",
        "/events/Event tree plantation 2.jpeg",
        "/events/Event tree plantation 3.jpeg",
        "/events/Event tree plantation 4.jpeg",
        "/events/Event tree plantation 5.jpeg",
        "/events/Event tree plantation 6.jpeg",
        "/events/Event tree plantation 7.jpeg",
        "/events/Event tree plantation 8.jpeg"
      ],
      conclusion: "The Green Pune Initiative showcased our commitment to environmental sustainability. By engaging citizens in hands-on environmental action, we not only improved our city's green cover but also fostered a culture of environmental responsibility that will benefit future generations."
    },
    {
      id: 4,
      title: "Youth Entrepreneur Summit",
      date: "2022",
      location: "At Post Pabal, Tal-Shirur, Dist-Pune, 412403",
      participants: "400+ Students",
      duration: "4 hours",
      image: "/events/Mane 3.jpeg",
      icon: BookOpen,
      description: "An inspiring day-long summit featuring motivational speakers, workshops, and interactive sessions designed to empower young entrepreneurs. This transformative event focused on developing entrepreneurial skills, business mindset, and innovation among youth.",
      highlights: [
        "The renowned entrepreneur and business leader shared his experiences",
        "Interactive entrepreneurship workshops with practical exercises",
        "Networking sessions connecting students with successful entrepreneurs",
        "Startup guidance and business mentorship program",
        "Innovation challenges with real-world business problem",
        "Entrepreneurship program introduction"
      ],
      impact: "Inspired 400+ young minds to pursue entrepreneurship and start their own ventures. Many participants developed business ideas.",
      organizer: "Kulswamini Pratishthan in collaboration with Pune University",
      gallery: [
        "/events/Mane 1.jpeg",
        "/events/Mane 2.jpeg",
        "/events/Mane 3.jpeg"
      ],
      conclusion: "The Youth Entrepreneur Summit successfully ignited the entrepreneurial spirit in young minds. By providing them with business tools, inspiration, and networks, we've created a generation of innovators and job creators who will drive economic growth in our society."
    },
    {
      id: 5,
      title: "Skill Development Workshop",
      date: "November 18, 2023",
      location: "Hadapsar Community Hall",
      participants: "80+ Participants",
      duration: "5 hours",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      icon: Users,
      description: "Comprehensive skill development workshop focusing on digital literacy, communication skills, and entrepreneurship for local community members. This empowerment initiative aimed to enhance employability and create economic opportunities for participants.",
      highlights: [
        "Digital literacy training covering essential computer skills",
        "Communication and soft skills workshops for professional growth",
        "Entrepreneurship guidance with business plan development",
        "Certificate distribution ceremony recognizing achievements",
        "Job placement assistance and career counseling",
        "Follow-up support program for continued learning"
      ],
      impact: "Enhanced employability skills of 80+ community members and provided them with new opportunities. 60% of participants reported improved job prospects, and 15 participants started their own small businesses.",
      organizer: "Kulswamini Pratishthan with local skill development partners",
      gallery: [
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      conclusion: "The Skill Development Workshop demonstrated our commitment to economic empowerment. By providing practical skills and ongoing support, we've helped community members build better futures for themselves and their families."
    },
    {
      id: 6,
      title: "Children's Joy Festival",
      date: "October 14, 2023",
      location: "Bal Bhavan, Pune",
      participants: "120+ Children",
      duration: "6 hours",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      icon: Heart,
      description: "A special celebration organized for underprivileged children featuring games, cultural programs, educational activities, and gift distribution. This heartwarming event aimed to bring joy, learning opportunities, and hope to children from disadvantaged backgrounds.",
      highlights: [
        "Fun games and cultural activities promoting creativity",
        "Educational workshops making learning enjoyable",
        "Nutritious meal distribution ensuring proper nutrition",
        "Gifts and school supplies for all participating children",
        "Health checkups and basic medical care provided",
        "Talent showcase allowing children to display their abilities"
      ],
      impact: "Brought joy to 120+ underprivileged children and provided them with educational materials and memorable experiences. The event boosted children's confidence and provided essential supplies for their education.",
      organizer: "Kulswamini Pratishthan volunteers and local supporters",
      gallery: [
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      conclusion: "The Children's Joy Festival reminded us why we do this work - to see the smiles on children's faces and to give them hope for a brighter future. Every child deserves joy, education, and the opportunity to dream big."
    },
    {
      id: 7,
      title: "Free Health Camp",
      date: "Yearly",
      location: "Tukaram Maharaj & Shri Kanhoraj Maharaj Palkhi Road",
      participants: "500+ Warkaris",
      duration: "6 years",
      image: "/events/warkari 1.jpeg",
      icon: Heart,
      description: "Our free health camp initiative provides essential medical services to 'Aashadhi Warakari'. We organize comprehensive health checkups, medical consultations, and distribute free medicines to 'Aashadhi Warakari'.",
      highlights: [
        "To provide free basic healthcare services to Warkaris",
        "To create awareness about health and hygiene among Warkaris",
        "To identify common health problems through regular medical check-ups",
        "To offer medical guidance and preventive healthcare advice",
        "To promote a healthy lifestyle and disease prevention practices",
        "To encourage community service and social responsibility among volunteers"
      ],
      impact: "Over the past 6 years, our free health check-up camps have benefited more than 500 Warkaris by providing essential healthcare services. Early identification of common health issues helped participants seek timely medical attention.",
      organizer: "Kulswamini Pratishthan Pune",
      gallery: [
        "/events/warkari 1.jpeg",
        "/events/warkari 2.jpeg",
        "/events/warkari 3.jpeg",
        "/events/warkari 4.jpeg",
        "/events/eventtt.jpeg",
        "/events/videooooo.mp4"
      ],
      conclusion: "We are committed to providing free healthcare services, promoting health awareness, and supporting the well-being of Warkaris and the community through regular health check-up camps and social service activities."
    }
  ];

  const event = events.find(e => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="page-container">
        <div className="container">
          <h1>Event not found</h1>
          <button onClick={() => navigate('/events')} className="btn-primary">
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="event-detail-container animate-fade-in">
      {/* Hero Section */}
      <div className="event-hero">
        <div className="event-hero-image">
          <img src={event.image} alt={event.title} />
          <div className="event-hero-overlay">
            <button 
              className="back-button"
              onClick={() => navigate('/events')}
            >
              <ArrowLeft size={20} />
              Back to Events
            </button>
            <div className="event-hero-content">
              <div className="event-icon-wrapper">
                <event.icon size={40} />
              </div>
              <h1 className="event-hero-title">{event.title}</h1>
              <p className="event-hero-description">{event.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <section className="event-details-section">
        <div className="container">
          <div className="event-details-grid">
            <div className="detail-card">
              <Calendar className="detail-icon" size={24} />
              <div>
                <span className="detail-label">Date</span>
                <span className="detail-value">{event.date}</span>
              </div>
            </div>
            <div className="detail-card">
              <MapPin className="detail-icon" size={24} />
              <div>
                <span className="detail-label">Location</span>
                <span className="detail-value">{event.location}</span>
              </div>
            </div>
            <div className="detail-card">
              <Users className="detail-icon" size={24} />
              <div>
                <span className="detail-label">Participants</span>
                <span className="detail-value">{event.participants}</span>
              </div>
            </div>
            <div className="detail-card">
              <Clock className="detail-icon" size={24} />
              <div>
                <span className="detail-label">Duration</span>
                <span className="detail-value">{event.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="event-highlights-section">
        <div className="container">
          <div className="section-header">
            <CheckCircle className="section-icon" size={32} />
            <h2>Event Highlights</h2>
          </div>
          <div className="highlights-grid">
            {event.highlights.map((highlight, index) => (
              <div key={index} className="highlight-item">
                <CheckCircle className="highlight-icon" size={20} />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="event-impact-section">
        <div className="container">
          <div className="section-header">
            <Target className="section-icon" size={32} />
            <h2>Impact & Results</h2>
          </div>
          <div className="impact-content">
            <p>{event.impact}</p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="event-gallery-section">
        <div className="container">
          <div className="section-header">
            <h2>Photo Gallery</h2>
          </div>
          <div className={event.id === 4 ? "gallery-grid-custom" : "gallery-grid"}>
            {event.id === 4 ? (
              <>
                <div className="gallery-item">
                  <img src={event.gallery[0]} alt={`${event.title} - Photo 1`} />
                </div>
                <div className="gallery-right-column">
                  <div className="gallery-item">
                    <img src={event.gallery[1]} alt={`${event.title} - Photo 2`} />
                  </div>
                  <div className="gallery-item">
                    <img src={event.gallery[2]} alt={`${event.title} - Photo 3`} />
                  </div>
                </div>
              </>
            ) : (
              event.gallery.map((media, index) => (
                <div key={index} className="gallery-item">
                  {media.endsWith('.mp4') ? (
                    <video 
                      controls 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        borderRadius: '16px'
                      }}
                    >
                      <source src={media} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img src={media} alt={`${event.title} - Photo ${index + 1}`} />
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="event-conclusion-section">
        <div className="container">
          <div className="section-header">
            <Award className="section-icon" size={32} />
            <h2>Conclusion</h2>
          </div>
          <div className="conclusion-content">
            <p>{event.conclusion}</p>
          </div>
        </div>
      </section>

      {/* Organizer */}
      <section className="event-organizer-section">
        <div className="container">
          <div className="organizer-content">
            <h3>Organized By</h3>
            <p>{event.organizer}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;