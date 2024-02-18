import React from 'react'
import { Link } from 'react-router-dom'
import './community.css'
import arrow from '../../../Assests/right-up.png'


const CommunityMain = () => {
  return (
    <div className='main'>
    <Link to='/community' className='community-link'>
    <div className="title">
      <h1>Community</h1>
      <img src={arrow} alt="Community" />
    </div>
    </Link>
  </div>
  )
}

export default CommunityMain
