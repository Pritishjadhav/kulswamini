import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const FacebookIcon = () => <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const TwitterIcon = () => <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const InstagramIcon = () => <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
import './Footer.css';

const Footer = () => {
  const handlePhoneClick = (phoneNumber) => {
    const cleanNumber = phoneNumber.replace(/\s+/g, '');
    window.open(`tel:${cleanNumber}`, '_self');
  };

  const handleEmailClick = (email) => {
    window.open(`mailto:${email}`, '_self');
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3 className="footer-title">Kulswamini Pratishthan Pune</h3>
          <p className="footer-text">
            Serving Society, Saving Lives. We are dedicated to various social causes including blood donation, tree plantation, and motivational lectures.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="Twitter"><TwitterIcon /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/activities">Activities</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-subtitle">Contact Us</h4>
          <ul className="footer-contact">
            <li><MapPin size={18} /> Manas B-1, Samarth Nagari, Sector No. 3, Spine Road, Bhosari, Pune 411039</li>
            <li>
              <Phone size={18} /> 
              <span 
                className="clickable-contact" 
                onClick={() => handlePhoneClick('+91 99224 01862')}
                title="Click to call"
              >
                +91 99224 01862
              </span>
            </li>
            <li>
              <Mail size={18} /> 
              <span 
                className="clickable-email" 
                onClick={() => handleEmailClick('kulswaminipratishthan@gmail.com')}
                title="Click to send email"
              >
                kulswaminipratishthan@gmail.com
              </span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Kulswamini Pratishthan Pune. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
