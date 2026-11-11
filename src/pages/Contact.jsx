import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="page-container animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">We would love to hear from you. Get in touch with us!</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          {/* Join the Movement Section */}
          <div style={{
            background: 'linear-gradient(135deg, var(--color-saffron) 0%, #ff8c42 100%)',
            padding: '3rem 2rem',
            borderRadius: '12px',
            marginBottom: '3rem',
            textAlign: 'center',
            color: 'white',
            boxShadow: '0 10px 30px rgba(255, 103, 0, 0.2)'
          }}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', fontWeight: '700'}}>Join the Movement</h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto'}}>
              Whether you are a professional looking to volunteer, a student eager to learn, or a donor wishing to make a difference—your contribution matters. Together, we can transform Maharashtra.
            </p>
          </div>

          <div className="grid md:grid-cols-2" style={{gap: '3rem'}}>
            {/* Contact Info */}
            <div>
              <h2 className="section-title" style={{textAlign: 'left'}}>Get in Touch</h2>
              <p style={{color: '#666', marginBottom: '2rem'}}>
                Whether you want to volunteer, donate, or simply learn more about our work, please don't hesitate to reach out.
              </p>
              
              <div style={{display: 'grid', gap: '1.5rem'}}>
                <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                  <div style={{color: 'var(--color-saffron)', marginTop: '4px'}}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{fontSize: '1.1rem', marginBottom: '4px', color: 'var(--color-text)'}}>Office Location</h4>
                    <p style={{color: '#666'}}>Manas B-1, Samarth Nagari, Sector No. 3, Spine Road, Bhosari, Pune 411039, F.No. 46452</p>
                  </div>
                </div>

                <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                  <div style={{color: 'var(--color-saffron)', marginTop: '4px'}}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{fontSize: '1.1rem', marginBottom: '4px', color: 'var(--color-text)'}}>Phone Number</h4>
                    <a 
                      href="tel:+919922401862" 
                      style={{
                        color: '#007bff', 
                        textDecoration: 'none',
                        borderBottom: '1px solid transparent',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderBottom = '1px solid #007bff';
                        e.target.style.color = '#0056b3';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderBottom = '1px solid transparent';
                        e.target.style.color = '#007bff';
                      }}
                    >
                      +91 99224 01862
                    </a>
                  </div>
                </div>

                <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                  <div style={{color: 'var(--color-saffron)', marginTop: '4px'}}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{fontSize: '1.1rem', marginBottom: '4px', color: 'var(--color-text)'}}>Email Address</h4>
                    <a 
                      href="mailto:kulswaminipratistanpune@gmail.com" 
                      style={{
                        color: '#007bff', 
                        textDecoration: 'none',
                        borderBottom: '1px solid transparent',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderBottom = '1px solid #007bff';
                        e.target.style.color = '#0056b3';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderBottom = '1px solid transparent';
                        e.target.style.color = '#007bff';
                      }}
                    >
                      kulswaminipratistanpune@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                  <div style={{color: 'var(--color-saffron)', marginTop: '4px'}}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 style={{fontSize: '1.1rem', marginBottom: '4px', color: 'var(--color-text)'}}>Working Hours</h4>
                    <p style={{color: '#666'}}>Monday - Saturday: 9:00 - 18:00 </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{background: 'white', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)'}}>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-text)'}}>Send us a Message</h3>
              <form onSubmit={e => e.preventDefault()} style={{display: 'flex', flexDirection: 'column', gap: '1.25rem'}}>
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-text)'}}>Full Name</label>
                  <input type="text" placeholder="John Doe" style={{width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #ddd', fontFamily: 'inherit'}} />
                </div>
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-text)'}}>Email Address</label>
                  <input type="email" placeholder="john@example.com" style={{width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #ddd', fontFamily: 'inherit'}} />
                </div>
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-text)'}}>Subject</label>
                  <select style={{width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #ddd', fontFamily: 'inherit', backgroundColor: 'white'}}>
                    <option value="">Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Volunteer Registration</option>
                    <option>Donation Information</option>
                    <option>Blood Donation Camp</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-text)'}}>Message</label>
                  <textarea rows="4" placeholder="How can we help you?" style={{width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #ddd', fontFamily: 'inherit', resize: 'vertical'}}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{width: '100%', marginTop: '0.5rem'}}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
