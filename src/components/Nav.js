import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../images/dreamvillas-logo.svg';
import '../index.css';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToContact = () => {
    scroll.scrollToBottom(); // You can customize this to scroll to a specific element ID if needed
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>
      {/*Mobile navbar */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/*nav items*/}
      <ul className={`nav-links ${menuOpen ? 'visible' : ''}`}>
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="/">Property</a>
        </li>

        <li>
          <a href="/">Listed</a>
        </li>

        <li>
          <a href="/">Services</a>
        </li>

        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      <button
        className="small-btn"
        to="contact"
        smooth={true}
        duration={500}
        onClick={scrollToContact}
      >
        Contact Us
      </button>
    </nav>
  );
}

export default Nav;
