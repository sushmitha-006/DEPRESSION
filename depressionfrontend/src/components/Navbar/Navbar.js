import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navBarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navBarRef.current && !navBarRef.current.contains(event.target)) {
        setIsOpen(false); // Close the navbar if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
      <div ref={navBarRef} className={`nav-bar ${isOpen ? 'open' : ''}`}>
        <br/>
        <ul>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/music">Music</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/quiz">Take Quiz</Link></li>
          <li><Link to="/gratitude">Gratitude</Link></li>
          <li><Link to="/therapist">Therapist</Link></li>
          <li><Link to="/connect">Connect People</Link></li>
          <li><Link to="/cards">Supportive Cards</Link></li>
          <li><Link to="/successfulstories">Successful Stories</Link></li>

        </ul>
      </div>
    </div>
  );
}

export default NavBar;
