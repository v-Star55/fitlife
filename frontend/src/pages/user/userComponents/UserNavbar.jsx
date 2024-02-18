import React from 'react'
import { Link } from 'react-router-dom'
import '../../home/nav_foot.css'
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";

const UserNavbar = ({setIsAuthenticated}) => {
    const handleLogout = () => {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            setIsAuthenticated(false);
          })
          .catch((error) => {
            // An error happened.
            console.error("Error signing out: ", error);
          });
      };


  return (
    <nav className='navbar'>
    <ul className='navbar-ul'>
      <li className='navbar-ul_li'>
        <Link to="/user" className='navbar-brand'>
          <img src={require("../../../Assests/logo2.png")} alt="" />
          Alpha Fitness
        </Link>
      </li>
      <li className='navbar-ul_li'>
        <Link to="/user/bmi">Calculate BMI</Link>
      </li>
      <li className='navbar-ul_li'>
        <a href="http://localhost:3001/" target="_blank" rel="noopener noreferrer">Live Session</a>
      </li>
      <li className='navbar-ul_li'>
        <Link to="/user/exercise">Exercise</Link>
      </li>
      <li className='navbar-ul_li'>
        <Link to="/user/nutri">NUTRI</Link>
      </li>
      <li className='navbar-ul_li'>
        <Link to="/user/workout">Workout Planner</Link>
      </li>
      <li className='navbar-ul_li'>
        <button className='btn-logout' onClick={handleLogout}>Logout</button>
      </li>
    </ul>
  </nav>
  )
}

export default UserNavbar
