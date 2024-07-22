import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/fullstackdevelopment">Full Stack Development</Link>
        </li>
        <li>
          <Link to="/datascience">Data Science</Link>
        </li>
        <li>
          <Link to="/cybersecurity">Cyber Security</Link>
        </li>
        <li>
          <Link to="/career">Career</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
