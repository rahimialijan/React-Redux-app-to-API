import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

const NavigationComponents = () => (
  <div className="navbar">
    <Link to="/">
      <img src={logo} className="logo" alt="logo" />
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="/" className="nav-link">Books</Link>
        </li>
        <li>
          <Link to="/categories" className="nav-link">Categories</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default NavigationComponents;
