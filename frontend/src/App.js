import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './pages/home/NavBar'; 
import Home from './views/Home';
import Footer from './pages/home/Footer';
import UserSignUp from './views/userSignUp';
import UserLogIn from './views/userLogIn';
import User from './pages/user/User';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      <div className="App">
        {isAuthenticated ? (
          <User setIsAuthenticated={setIsAuthenticated} />
        ) : (
          <>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<UserLogIn setIsAuthenticated={setIsAuthenticated} />} />
              <Route path='/SignUp' element={<UserSignUp setIsAuthenticated={setIsAuthenticated} />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  )
}

export default App;