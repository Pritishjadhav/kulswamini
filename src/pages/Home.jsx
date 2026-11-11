import { Link } from 'react-router-dom';
import { Heart, BookOpen, TreePine, Users, ArrowRight, Calendar, MapPin, Clock, Star, Award, Target, Zap } from 'lucide-react';
import ActivityCard from '../components/ActivityCard';
import BirthdayNotification from '../components/BirthdayNotification';
import './Home.css';

const Home = () => {
  const activities = [
    {
      id: 1,
      title: "Social Visits",
      description: "Spreading joy by visiting orphanages and old age homes regularly to spend quality time with the residents.",
      image: "/events/activity Patoda 1.jpeg",
      icon: Users,
      link: "/activities/1"
    },
    {
      id: 3,
      title: "Motivational Visits",
      description: "Empowering youth through inspiring talks at various schools and colleges.",
      image: "/events/ainna hazare 1.jpeg",
      icon: BookOpen,
      link: "/activities/3"
    },
    {
      id: 7,
      title: "Free Health Camp",
      description: "Organizing regular health camps to provide free medical checkups and healthcare services to Warkaris.",
      image: "/events/warkari 1.jpeg",
      icon: Heart,
      link: "/events/7"
    }
  ];

  const stats = [
    { number: "10+", label: "Health Camps", icon: Heart },
    { number: "500+", label: "Trees Planted", icon: TreePine },
    { number: "1", label: "Lectures", icon: BookOpen },
    { number: "60+", label: "Volunteers", icon: Users }
  ];

  const features = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "Every initiative is carefully planned to create maximum positive impact in our community."
    },
    {
      icon: Award,
      title: "Recognized Excellence",
      description: "Our work has been acknowledged by local authorities and community leaders."
    },
    {
      icon: Zap,
      title: "Quick Response",
      description: "We mobilize rapidly during emergencies and community needs."
    }
  ];

  return (
    <div className="home-page animate-fade-in">
      <BirthdayNotification />
      
      {/* Clean Professional Hero Section */}
      <section className="hero-section-clean animate-fade-in">
        <div className="hero-bg-clean"></div>
        
        <div className="container hero-container-clean">
          <div className="hero-text-content">
            <div className="hero-badge-clean">
              <span className="badge-dot"></span>
              Est. 2015 • Pune, Maharashtra
            </div>
            
            <h1 className="hero-title-clean">
              Kulswamini
              <span className="title-highlight-green"> Pratishthan,</span>
              <br />
              <span className="title-highlight-saffron">Pune</span>
            </h1>
            
            <h2 className="hero-subtitle-clean">
              Serving Society, Saving Lives
            </h2>
            
            <p className="hero-desc-clean">
              Join hands with Pune's most dedicated volunteers. Together, we conduct life-saving campaigns, 
              foster environmental sustainability, and empower the youth to build a brighter tomorrow.
            </p>
            
            <div className="hero-actions-clean">
              <Link to="/contact" className="btn-primary-clean">
                Join Our Mission
                <ArrowRight className="btn-icon" />
              </Link>
              <Link to="/about" className="btn-secondary-clean">
                Discover Our Work
              </Link>
            </div>
            
            <div className="hero-stats-mini">
              <div className="stat-mini">
                <span className="stat-num">60+</span>
                <span className="stat-text">Volunteers</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-mini">
                <span className="stat-num">11+</span>
                <span className="stat-text">Years of Impact</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-mini">
                <span className="stat-num">10+</span>
                <span className="stat-text">Health Camps</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual-clean">
            <div className="visual-image-wrapper">
              <img 
                src="/events/home.jpeg" 
                alt="Gondan Diwali Special Edition - Kulswamini Pratishthan" 
                className="hero-main-image"
              />
              <div className="image-overlay-gradient"></div>
            </div>
            
            <div className="live-update-card-clean">
              <div className="card-header-clean">
                 <div className="live-indicator-clean">
                    <span className="live-pulse-clean"></span>
                    Coming Soon
                 </div>
              </div>
              <div className="card-body-clean">
                 <div className="card-icon-wrapper">
                    <Calendar size={24} className="card-icon" />
                 </div>
                 <div className="card-info">
                   <h3>Children's Science Exhibition</h3>
                   <div className="card-meta">
                     <span>
                       <MapPin size={16} style={{ flexShrink: 0, marginTop: '2px', color: '#ef4444' }} />
                       ZP Primary School, near Pabal, Tal-Shirur, Dist-Pune 412403
                     </span>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="stats-section-new">
        <div className="container">
          <div className="stats-header">
            <h2>Our Impact in Numbers</h2>
            <p>Making a difference, one initiative at a time</p>
          </div>
          <div className="stats-grid-new">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card-new">
                <div className="stat-icon">
                  <stat.icon className="icon" />
                </div>
                <div className="stat-content">
                  <h3 className="stat-number-new">{stat.number}</h3>
                  <p className="stat-label-new">{stat.label}</p>
                </div>
                <div className="stat-decoration"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us</h2>
            <p>We're committed to creating lasting positive change in our community</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <feature.icon className="icon" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Activities Section */}
      <section className="activities-section-new">
        <div className="container">
          <div className="section-header">
            <h2>Our Key Initiatives</h2>
            <p>Transforming communities through dedicated action and compassionate service</p>
          </div>
          <div className="activities-grid-new">
            {activities.map((activity, index) => (
              <Link 
                key={index} 
                to={activity.link} 
                className="activity-card-new"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="card-image">
                  <img src={activity.image} alt={activity.title} />
                  <div className="card-overlay">
                    <activity.icon className="overlay-icon" />
                  </div>
                </div>
                <div className="card-content">
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                  <div className="card-footer">
                    <span className="learn-more">Learn More</span>
                    <ArrowRight className="arrow-icon" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="activities-cta">
            <Link to="/activities" className="btn-primary-new">
              <span>View All Activities</span>
              <ArrowRight className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="cta-section-new">
        <div className="cta-background">
          <div className="cta-pattern"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Ready to Make a Difference?</h2>
              <p>Join our community of changemakers and help us build a better tomorrow for everyone.</p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn-white-new">
                <span>Become a Member</span>
                <ArrowRight className="btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
