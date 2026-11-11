import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    // Add event listener when menu is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.classList.add('menu-open');
    } else {
      // Remove body scroll prevention when menu is closed
      document.body.classList.remove('menu-open');
    }

    // Cleanup event listeners
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Activities', path: '/activities' },
    { name: 'Team', path: '/team' },
    { name: 'Events', path: '/events' },
    { name: 'Gondan Diwali Ank', path: '/book' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="navbar-header" ref={navbarRef}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>
          <span className="logo-text">Kulswamini<br/>Pratishthan</span>
        </Link>
        
        <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => {
                setIsOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/donate" className="btn btn-primary nav-cta" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>Donate Now</Link>
        </nav>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Overlay for mobile menu */}
      {isOpen && <div className="navbar-overlay" onClick={() => setIsOpen(false)}></div>}
    </header>
  );
};

export default Navbar;
