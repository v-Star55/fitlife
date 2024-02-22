import React from 'react'
// import NavBar from '../pages/home/NavBar'
import Hero from '../pages/home/Hero'
import Goal from '../pages/home/Goal'
// import Newsletter from '../pages/home/Newsletter'
// import { useState } from 'react'
import Community from '../pages/home/community/CommunityMain'

const Home = () => {
  // const [modal , setModal] = useState(false)
  return (
    <>
     <Hero />
     <Goal  />
     <Community />
    </>
  )
}

export default Home
