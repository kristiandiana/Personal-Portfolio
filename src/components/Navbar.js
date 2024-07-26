import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import { Grid, Person, Link45deg, Mortarboard, CodeSlash } from 'react-bootstrap-icons';

const Navbar = () => {
  const location = useLocation();
  const locationName = location.pathname.substring(1) || 'Home';

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const renderIcon = () => {
    switch (locationName.toLowerCase()) {
      case 'about':
        return <Person className="location-icon" />;
      case 'contact':
        return <Link45deg className="location-icon" />;
      case 'education':
        return <Mortarboard className="location-icon" />;
      case 'projects':
        return <CodeSlash className="location-icon" />;
      default:
        return null;
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <Link to="/">Kristian Diana</Link>
        </div>
        <div className="navbar-location">
          {renderIcon()}
          <span className="location-text">{capitalizeFirstLetter(locationName)}</span>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">
              <div className="home-button">
                <span className="home-icon"><Grid className="icon-margin" /></span>
                <span className="home-text">Home</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
