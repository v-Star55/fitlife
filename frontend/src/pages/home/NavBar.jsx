import React from 'react';
import { Link } from 'react-router-dom';

import './nav_foot.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-ul'>
        <li className='navbar-ul_li'>
          <Link to="/" className='navbar-brand'>
            <img src={require("../../Assests/logo2.png")} alt="" />
            Alpha Fitness
          </Link>
        </li>
        <li className='navbar-ul_li'>
          <Link to="/login">Login</Link>
        </li>
        <li className='navbar-ul_li'>
          <Link to="/signup">Signup</Link>
        </li>
        <li className='navbar-ul_li'>
          <Link to="/trainer-login">Trainer Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
