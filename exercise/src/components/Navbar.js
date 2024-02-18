import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';


const Navbar = () => (
  <Stack direction="row"  sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none',position: 'relative', zIndex: 100 ,display:'flex',alignItems:'center' }} px="20px"  >
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>BMI</a>

      <Link to="/nutrition" style={{ textDecoration: 'none', color: '#3A1212'}}>Check Nutrition</Link>

      <Link to="/planWorkout" style={{ textDecoration: 'none', color: '#3A1212'}}>Plan Your Workout</Link>

    </Stack>
  </Stack>
);

export default Navbar;
