import React from 'react';
import './Header.css';
import NavBar from '../Navbar/Navbar';

function Header() {
  return (
    <div className="header">
      <NavBar/>
      <div className="header-right">
        <span>About</span>
        <span>Contact Us</span>
        <span>Help</span>
      </div>
    </div>
  );
}

export default Header;
