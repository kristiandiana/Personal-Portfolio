import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase(); // Convert currentPath to lowercase

  const links = [
    { path: '/contact', label: 'Contact' },
    { path: '/about', label: 'About' },
    { path: '/education', label: 'Education' },
    { path: '/projects', label: 'Projects' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          {links.map(link => 
            link.path.toLowerCase() !== currentPath && ( // Convert link.path to lowercase
              <Link key={link.path} to={link.path} className="footer-link">
                {link.label}
              </Link>
            )
          )}
        </div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Kristian Diana. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
