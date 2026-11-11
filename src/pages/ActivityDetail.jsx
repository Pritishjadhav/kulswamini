import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, BookOpen, TreePine, Users, CheckCircle, Target, Award, Calendar, MapPin, Clock, TrendingUp } from 'lucide-react';
import './About.css';
import './ActivityDetail.css';

const ActivityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const activities = [
    {
      id: 1,
      title: "Social Visits",
      shortDescription: "Spreading joy by visiting orphanages and old age homes regularly to spend quality time with the residents.",
      image: "/events/activity Patoda 1.jpeg",
      icon: Users,
      detailedDescription: "Our social visits program is built on the belief that human connection and compassion can heal hearts and bring joy to those who need it most. We regularly visit orphanages, old age homes, care facilities & Social institutes to provide emotional support, companionship, and practical assistance.",
      objectives: [
        "To gain knowledge of social work, understand social issues, and make a positive impact on society",
        "Bring joy and happiness through interactive activities and programs",
        "Address basic needs",
        "Create awareness about social responsibility in the community",
        "Build long-term relationships with care institutions",
        "Inspire others to engage in regular social service activities"
      ],
      methodology: [
        "Identifying the purpose and location of the social visit",
        "Planning activities and forming groups",
        "Interacting with local people to understand social issues",
        "Collecting information through observation and communication",
        "Conducting awareness and community support activities",
        "Analyzing the visit experience and preparing the final report"
      ],
      impact: "Improved Social Awareness",
      frequency: "Yearly visits to different institutions on rotation basis",
      locations: "Post Patoda (Aadarsh Gram), Dist Chhatrapati Sambhajinagar 431133",
      gallery: [
        "/events/activity Patoda 1.jpeg",
        "/events/activity Patoda 2.jpeg",
        "/events/activity Patoda 3.jpeg",
        "/events/activity Patoda 14.jpeg",
        "/events/activity Patoda 5.jpeg",
        "/events/activity Patoda 6.jpeg",
        "/events/activity Patoda 7.jpeg",
        "/events/activity Patoda 8.jpeg"
      ],
      results: [
        "Gained practical knowledge about social work and community life",
        "Increased awareness of local social and environmental issues",
        "Improved communication and teamwork skills among team members",
        "Successfully interacted with residents and understood their needs",
        "Contributed to community awareness through social activities",
        "Developed a sense of social responsibility and leadership"
      ],
      conclusion: "Social visits remind us of our shared humanity and the power of compassion. Every smile we bring, every hand we hold, and every moment we share creates bonds that transcend age, background, and circumstances. These visits enrich not just the lives of residents but also transform our volunteers into more empathetic human beings."
    },
    {
      id: 2,
      title: "Self Development Workshop",
      shortDescription: "Empowering individuals through skill-building workshops focused on personal growth, leadership, and professional development.",
      image: "/events/Self Development Workshop 1.jpeg",
      icon: Users,
      detailedDescription: "Our focus on practical life skills, leadership development, and positive thinking methodologies.",
      objectives: [
        "To develop practical life skills among participants",
        "To enhance leadership qualities and teamwork abilities",
        "To promote positive thinking and a growth mindset",
        "To improve communication and interpersonal skills",
        "To motivate individuals towards social responsibility and community service",
        "To build self-confidence and encourage personal development"
      ],
      methodology: [
        "Attended the Self Development Workshop and actively participated in all sessions",
        "Learned practical life skills through expert guidance and interactive activities",
        "Observed and understood leadership development techniques shared during the workshop",
        "Participated in group discussions to exchange ideas and experiences",
        "Practiced positive thinking and self-improvement strategies presented in the sessions",
        "Reflected on the learning outcomes and applied the acquired knowledge to personal growth and social responsibility"
      ],
      impact: "The members were inspired to contribute towards social work.",
      frequency: "Yearly sessions at different institutions throughout the year",
      locations: "Snehalaya Ahilyanager",
      gallery: [
        "/events/Self Development Workshop 1.jpeg",
        "/events/Self Development Workshop 3.jpeg",
        "/events/Self Development Workshop 4.jpeg",
        "/events/Self Development Workshop 6.jpeg"
      ],
      results: [
        "Enhanced self-confidence and personal development skills",
        "Gained practical knowledge of leadership and teamwork",
        "Developed a positive mindset towards personal and social growth",
        "Improved communication and interpersonal skills",
        "Increased motivation to participate in social and community service activities",
        "Acquired valuable life skills that can be applied in daily life and future career development"
      ],
      conclusion: "Self-development is the foundation of success. Through our workshops, we empower individuals to unlock their potential, overcome challenges, and achieve their dreams. By investing in personal growth, we create confident leaders who contribute positively to society and inspire others to pursue excellence."
    },

    {
      id: 3,
      title: "Motivational Visits",
      shortDescription: "Empowering youth through inspiring talks at various schools and colleges to foster leadership and positive thinking.",
      image: "/events/ainna hazare 1.jpeg",
      icon: BookOpen,
      detailedDescription: "Our motivational lecture series is designed to inspire and empower young minds with the tools, mindset, and confidence needed to overcome challenges and achieve their dreams. We focus on practical life skills, leadership development, and positive thinking methodologies.",
      objectives: [
        "To understand the importance of social work and community development",
        "To get inspired by the social initiatives of Anna Hazare",
        "To motivate people towards social responsibility and leadership",
        "To observe educational and social activities at the ZP School, Wablewadi",
        "To learn how teamwork and community participation improve society",
        "To develop awareness, communication skills, and practical social experience"
      ],
      methodology: [
        "Planning and organizing the visits to Ralegan Siddhi and ZP School, Wablewadi",
        "Observing social development activities and educational practices",
        "Interacting with local people, teachers, and community members",
        "Collecting information through discussion, observation, and guidance",
        "Understanding the importance of teamwork, leadership, and social responsibility",
        "Analyzing the experience and preparing the final report based on the visits"
      ],
      impact: "The members were inspired to contribute towards social work.",
      frequency: "Yearly sessions at different institutions throughout the year",
      locations: "Ralegan Siddhi Tal-Parner, Dist-Ahillya Nagar, Maharashtra 414302 & ZP School Wablewadi Tal-Shirur, Dist-Pune",
      gallery: [
        "/events/ainna hazare 1.jpeg",
        "/events/ainna hazae 2.jpeg",
        "/events/aadachiwadi.jpeg"
      ],
      results: [
        "Gained knowledge about social work and rural development",
        "Understood the importance of education and community participation",
        "Learned leadership and motivational values from Anna Hazare",
        "Improved communication, observation, and teamwork skills",
        "Developed awareness about social responsibility and public welfare",
        "Got practical exposure to real-life social and educational activities"
      ],
      conclusion: "Motivational visits are investments in human potential. By inspiring young minds today, we're shaping the leaders of tomorrow. The confidence, skills, and positive mindset we help develop will create ripple effects that benefit entire communities for generations."
    },

  ];

  const activity = activities.find(a => a.id === parseInt(id));

  if (!activity) {
    return (
      <div className="page-container">
        <div className="container">
          <h1>Activity not found</h1>
          <button onClick={() => navigate('/activities')} className="btn-primary">
            Back to Activities
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="activity-detail-container animate-fade-in">
      {/* Hero Section */}
      <div className="activity-hero">
        <div className="activity-hero-image">
          <img src={activity.image} alt={activity.title} />
          <div className="activity-hero-overlay">
            <button 
              className="back-button"
              onClick={() => navigate('/activities')}
            >
              <ArrowLeft size={20} />
              Back to Activities
            </button>
            <div className="activity-hero-content">
              <div className="activity-icon-wrapper">
                <activity.icon size={40} />
              </div>
              <h1 className="activity-hero-title">{activity.title}</h1>
              <p className="activity-hero-description">{activity.detailedDescription}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Overview */}
      <section className="activity-overview-section">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-card">
              <Calendar className="overview-icon" size={24} />
              <div>
                <span className="overview-label">Frequency</span>
                <span className="overview-value">{activity.frequency}</span>
              </div>
            </div>
            <div className="overview-card">
              <MapPin className="overview-icon" size={24} />
              <div>
                <span className="overview-label">Locations</span>
                <span className="overview-value">{activity.locations}</span>
              </div>
            </div>
            <div className="overview-card">
              <TrendingUp className="overview-icon" size={24} />
              <div>
                <span className="overview-label">Impact</span>
                <span className="overview-value">{activity.impact}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="activity-objectives-section">
        <div className="container">
          <div className="section-header">
            <Target className="section-icon" size={32} />
            <h2>Our Objectives</h2>
          </div>
          <div className="objectives-grid">
            {activity.objectives.map((objective, index) => (
              <div key={index} className="objective-item">
                <CheckCircle className="objective-icon" size={20} />
                <span>{objective}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="activity-methodology-section">
        <div className="container">
          <div className="section-header">
            <BookOpen className="section-icon" size={32} />
            <h2>Our Methodology</h2>
          </div>
          <div className="methodology-grid">
            {activity.methodology.map((method, index) => (
              <div key={index} className="methodology-item">
                <div className="methodology-number">{index + 1}</div>
                <span>{method}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="activity-impact-section">
        <div className="container">
          <div className="section-header">
            <TrendingUp className="section-icon" size={32} />
            <h2>Impact & Reach</h2>
          </div>
          <div className="impact-content">
            <p>{activity.impact}</p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="activity-gallery-section">
        <div className="container">
          <div className="section-header">
            <h2>Photo Gallery</h2>
          </div>
          <div className="gallery-grid">
            {activity.gallery.map((media, index) => (
              <div key={index} className="gallery-item">
                {media.endsWith('.mp4') ? (
                  <video controls style={{ width: '100%', height: 'auto', borderRadius: '16px' }}>
                    <source src={media} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={media} alt={`${activity.title} - Photo ${index + 1}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="activity-results-section">
        <div className="container">
          <div className="section-header">
            <Award className="section-icon" size={32} />
            <h2>Results & Achievements</h2>
          </div>
          <div className="results-grid">
            {activity.results.map((result, index) => (
              <div key={index} className="result-item">
                <Award className="result-icon" size={20} />
                <span>{result}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="activity-conclusion-section">
        <div className="container">
          <div className="section-header">
            <Heart className="section-icon" size={32} />
            <h2>Our Commitment</h2>
          </div>
          <div className="conclusion-content">
            <p>{activity.conclusion}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivityDetail;