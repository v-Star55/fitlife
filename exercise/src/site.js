import React from 'react'
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import About from "./Component/About";
import NavBar from './Component/NavBar';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ExerciseDetail from "./Component/ExerciseDetail"
const site = () => {
  return (
    <div>
       
       <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer />
    </div>
  )
}

export default site
