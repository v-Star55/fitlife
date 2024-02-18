import React from 'react'
import UserNavbar from './userComponents/UserNavbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Exercise from './userComponents/excercise/Exercise';
import Footer from '../home/Footer';
import UserHome from './userComponents/userHome/UserHome';
import Bmi from './userComponents/bmi/Bmi';

const User = ({setIsAuthenticated}) => {
  return (
    <div>
        <UserNavbar setIsAuthenticated={setIsAuthenticated} />
        <Routes>
              <Route path='/user/exercise' element={<Exercise/>} />
              <Route path='/user' element={<UserHome  />} />
              <Route path='/user/bmi' element={<Bmi  />} />
            </Routes>
        <Footer />
    </div>
  )
}

export default User
