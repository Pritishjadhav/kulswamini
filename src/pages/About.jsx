import { HeartHandshake, Target, Users, Award, Calendar, Heart, TreePine, BookOpen, Droplet, Stethoscope, Leaf, HandHeart, BookText, Trophy, Palette, GraduationCap, UserCheck } from 'lucide-react';
import './About.css';

const About = () => {
  const impactAreas = [
    {
      icon: Droplet,
      title: "Healthcare for All",
      description: "Organizing blood donation drives and health check-up camps. Providing free medicines and expert medical care to pilgrims during the annual Ashadhi Wari to Pandharpur."
    },
    {
      icon: Leaf,
      title: "Environmental Guardianship",
      description: "Tackling climate challenges by planting trees with sustainable water supply systems in drought-prone regions of Pabal (Shirur)."
    },
    {
      icon: HandHeart,
      title: "Disaster Relief",
      description: "Standing by citizens during floods and heavy rains through direct on-ground aid and contributions to the Sakal Relief Fund."
    },
    {
      icon: BookText,
      title: "Literary Excellence",
      description: "Since 2014, publishing 'Gondan,' our annual Diwali Ank. Distributed freely with insights from eminent scientists, thinkers, and writers."
    },
    {
      icon: Trophy,
      title: "Empowering the Next Gen",
      description: "Hosting career guidance seminars, essay competitions, and poetry meets (Kavi Sammelans) to give young talent a platform to shine."
    }
  ];

  const corePillars = [
    {
      icon: GraduationCap,
      number: "01",
      title: "Education & Youth Empowerment",
      description: "Education is the greatest equalizer. We aim to set up and support institutes from primary schools to specialized technical and research centers.",
      points: [
        "Personality development and career counseling",
        "Language studies and skill enhancement",
        "IIT, medical, law, and engineering guidance for economically weaker sections"
      ]
    },
    {
      icon: Stethoscope,
      number: "02",
      title: "Healthcare & Rehabilitation",
      description: "Ensuring that poverty never stands in the way of health.",
      points: [
        "Diagnostic camps for gynecology, ophthalmology, and disability support",
        "Permanent rehabilitation centers for the elderly and disabled",
        "Free medical services for the destitute"
      ]
    },
    {
      icon: Palette,
      number: "03",
      title: "Arts, Sports, & Culture",
      description: "Preserving our heritage while nurturing modern talent.",
      points: [
        "Promoting Marathi language through literature festivals",
        "Traditional celebrations and cultural events",
        "Professional coaching and equipment for budding athletes"
      ]
    },
    {
      icon: UserCheck,
      number: "04",
      title: "Women's Empowerment (Swayamsiddha)",
      description: "Strengthening the backbone of the family by fostering financial independence.",
      points: [
        "Training in food processing, tailoring, and fashion design",
        "Handicraft arts like bamboo craft and doll making",
        "Micro-entrepreneurship for household industries"
      ]
    },
    {
      icon: Target,
      number: "05",
      title: "Social & National Duty",
      description: "Building 'Responsible Citizens' who embrace values of brotherhood, secularism, and environmental duty.",
      points: [
        "Inspiring youth to look beyond self-interest",
        "Promoting community service and civic responsibility",
        "Environmental awareness and sustainable practices"
      ]
    }
  ];

  const timeline = [
    { 
      year: "2014", 
      title: "Foundation & Vision", 
      description: "Kulswamini Pratishthan was established with a vision to serve society through dedicated community service. Started with a small group of 7 passionate members in Pune.",
      achievements: ["Registered as NGO", "First 7 members", "Initial community outreach"]
    },
    { 
      year: "2019", 
      title: "Expansion & Growth", 
      description: "Extended our reach to multiple districts across Maharashtra, establishing regional chapters and increasing our member base to 25 active members.",
      achievements: ["5 district chapters", "25 members", "First blood donation camp"]
    },
    { 
      year: "2020", 
      title: "Digital Transformation", 
      description: "Embraced technology to coordinate volunteer activities efficiently during the pandemic. Launched online platforms for better communication and organized virtual motivational sessions.",
      achievements: ["Digital platform launch", "Virtual programs", "COVID-19 relief work"]
    },
    { 
      year: "2024", 
      title: "Major Milestone", 
      description: "Completed 50+ blood donation camps and 10,000+ tree plantations. Recognized by Maharashtra Government for outstanding community service and environmental conservation efforts.",
      achievements: ["50+ blood camps", "10,000+ trees planted", "Government recognition"]
    }
  ];

  return (
    <div className="page-container animate-fade-in">
      {/* Enhanced Page Header */}
      <div className="page-header-enhanced">
        <div className="header-overlay"></div>
        <div className="container">
          <div className="header-content">
            <div className="header-badge">
              <span className="badge-dot"></span>
              EST. 2015 • PUNE, MAHARASHTRA
            </div>
            <h1 className="page-title-enhanced">About Kulswamini Pratishthan</h1>
            <p className="page-subtitle-enhanced">
              Dedicated to serving society through compassionate action, environmental stewardship, 
              and empowering communities across Maharashtra for over a decade.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Story Section */}
      <section className="story-section-enhanced">
        <div className="container">
          <div className="story-grid-enhanced">
            <div className="story-content-enhanced">
              <div className="story-header">
                <div className="section-badge-story">Our Journey</div>
                <h2 className="story-title-enhanced">Who We Are</h2>
                <p className="story-lead-enhanced">
                  Kulswamini Pratishthan is a dedicated socio-cultural organization based in Pune, committed to the holistic development of Maharashtra. Since our establishment in 2014, we have acted as a bridge between tradition and progress. From promoting Marathi literature and arts to spearheading environmental and humanitarian causes, we believe in building a society where every citizen can thrive.
                </p>
              </div>
              
              <div className="story-highlights-enhanced">
                <div className="highlight-card">
                  <div className="highlight-icon-wrapper life-saving">
                    <Heart className="highlight-icon" />
                  </div>
                  <div className="highlight-content">
                    <h4>Life-Saving Missions</h4>
                    <p>Regular blood donation camps that have saved countless lives across Pune and surrounding areas</p>
                  </div>
                </div>
                
                <div className="highlight-card">
                  <div className="highlight-icon-wrapper environmental">
                    <TreePine className="highlight-icon" />
                  </div>
                  <div className="highlight-content">
                    <h4>Environmental Impact</h4>
                    <p>Large-scale tree plantation drives contributing to a greener, more sustainable Maharashtra</p>
                  </div>
                </div>
                
                <div className="highlight-card">
                  <div className="highlight-icon-wrapper youth-empowerment">
                    <BookOpen className="highlight-icon" />
                  </div>
                  <div className="highlight-content">
                    <h4>Youth Empowerment</h4>
                    <p>Motivational lectures inspiring the next generation of leaders and change-makers</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="story-visual-enhanced">
              <div className="image-container-enhanced">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Our volunteers in action" 
                  className="story-main-image-enhanced"
                />
                <div className="image-overlay-enhanced"></div>
                
                <div className="floating-stats-enhanced">
                  <div className="stat-bubble primary">
                    <span className="stat-number-bubble">11+</span>
                    <span className="stat-label-bubble">Years</span>
                  </div>
                  <div className="stat-bubble secondary">
                    <span className="stat-number-bubble">30+</span>
                    <span className="stat-label-bubble">Volunteers</span>
                  </div>
                </div>
                
                <div className="volunteer-badge">
                  <Users className="volunteer-icon" />
                  <span>Trusted by 30+ Volunteers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="impact-section">
        <div className="container">
          <div className="section-header-impact">
            <div className="impact-badge">
              <span className="badge-icon">✨</span>
              OUR IMPACT
            </div>
            <h2>Actions Speak Louder</h2>
            <p>We do not just envision change; we create it. Our journey so far includes:</p>
          </div>
          
          <div className="impact-grid">
            {impactAreas.map((area, index) => (
              <div key={index} className="impact-card">
                <div className="impact-icon-wrapper">
                  <area.icon className="impact-icon" />
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="pillars-section">
        <div className="container">
          <div className="section-header-pillars">
            <div className="pillars-badge">
              <span className="badge-icon">🎯</span>
              CORE PILLARS
            </div>
            <h2>Our Objectives</h2>
            <p>Five fundamental pillars that guide our mission and drive our initiatives</p>
          </div>
          
          <div className="pillars-grid">
            {corePillars.map((pillar, index) => (
              <div key={index} className="pillar-card">
                <div className="pillar-header">
                  <div className="pillar-number">{pillar.number}</div>
                  <div className="pillar-icon-box">
                    <pillar.icon className="pillar-icon" />
                  </div>
                </div>
                <h3>{pillar.title}</h3>
                <p className="pillar-description">{pillar.description}</p>
                <ul className="pillar-points">
                  {pillar.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Principles Section */}
      <section className="principles-section-modern">
        <div className="principles-bg-overlay"></div>
        <div className="container">
          <div className="principles-header">
            <div className="principles-intro">
              <h2>What Drives Us Forward</h2>
              <p>Three pillars that define our commitment to positive change</p>
            </div>
          </div>
          
          <div className="principles-showcase">
            <div className="principle-card mission-card">
              <div className="card-background">
                <div className="card-pattern"></div>
              </div>
              <div className="card-content">
                <div className="principle-header">
                  <div className="principle-number">01</div>
                  <div className="principle-icon-wrapper">
                    <Target className="principle-icon" />
                  </div>
                </div>
                <h3>Our Mission</h3>
                <p>Empowering communities through dedicated service, environmental stewardship, and sustainable development initiatives that create lasting positive impact.</p>
                <div className="principle-features">
                  <span className="feature-tag">Community Service</span>
                  <span className="feature-tag">Environmental Care</span>
                  <span className="feature-tag">Sustainable Growth</span>
                </div>
              </div>
            </div>
            
            <div className="principle-card vision-card">
              <div className="card-background">
                <div className="card-pattern"></div>
              </div>
              <div className="card-content">
                <div className="principle-header">
                  <div className="principle-number">02</div>
                  <div className="principle-icon-wrapper">
                    <Users className="principle-icon" />
                  </div>
                </div>
                <h3>Our Vision</h3>
                <p>A thriving society where every individual has access to opportunities, youth lead positive change, and environmental sustainability guides our collective future.</p>
                <div className="principle-features">
                  <span className="feature-tag">Equal Opportunities</span>
                  <span className="feature-tag">Youth Leadership</span>
                  <span className="feature-tag">Green Future</span>
                </div>
              </div>
            </div>
            
            <div className="principle-card values-card">
              <div className="card-background">
                <div className="card-pattern"></div>
              </div>
              <div className="card-content">
                <div className="principle-header">
                  <div className="principle-number">03</div>
                  <div className="principle-icon-wrapper">
                    <HeartHandshake className="principle-icon" />
                  </div>
                </div>
                <h3>Our Values</h3>
                <div className="values-grid">
                  <div className="value-item">
                    <div className="value-dot compassion"></div>
                    <span>Compassion</span>
                  </div>
                  <div className="value-item">
                    <div className="value-dot integrity"></div>
                    <span>Integrity</span>
                  </div>
                  <div className="value-item">
                    <div className="value-dot service"></div>
                    <span>Service</span>
                  </div>
                  <div className="value-item">
                    <div className="value-dot stewardship"></div>
                    <span>Stewardship</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section className="timeline-section-enhanced">
        <div className="timeline-bg-pattern"></div>
        <div className="container">
          <div className="section-header-timeline">
            <div className="timeline-badge">
              <span className="timeline-badge-dot"></span>
              OUR LEGACY
            </div>
            <h2>Our Journey Through Time</h2>
            <p>Milestones that shaped our mission and expanded our impact across Maharashtra</p>
          </div>
          <div className="timeline-enhanced">
            <div className="timeline-line"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`timeline-item-enhanced ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-marker-enhanced">
                  <div className="marker-inner">
                    <span className="marker-year">{item.year}</span>
                  </div>
                  <div className="marker-pulse"></div>
                </div>
                <div className="timeline-content-enhanced">
                  <div className="timeline-card">
                    <div className="card-header-timeline">
                      <div className="year-badge">{item.year}</div>
                      <h4 className="timeline-title-enhanced">{item.title}</h4>
                    </div>
                    <p className="timeline-description-enhanced">{item.description}</p>
                    <div className="timeline-achievements">
                      {item.achievements.map((achievement, idx) => (
                        <span key={idx} className="achievement-tag">
                          {achievement}
                        </span>
                      ))}
                    </div>
                    <div className="card-decoration"></div>
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

export default About;
