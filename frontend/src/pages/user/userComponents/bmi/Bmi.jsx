import React from 'react'
import { useState } from 'react';
import './bmi.css';

const Bmi = () => {
    const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100; // convert cm to meters
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmiResult(bmi);
    }
  };

  return (
   <div className='form'>
     <div class="subtitle">Let's check your BMI!</div>
      <div className='form_input'>
        <label>Height (in cm): </label>
        <input type="number" value={height} onChange={e => setHeight(e.target.value)} />
      </div>
      <div className='form_input'>
        <label>Weight (in kg): </label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
      </div>
      <button onClick={calculateBMI}>Calculate</button>
      {bmiResult && <h3>Your BMI is {bmiResult}</h3>}
    </div>
  )
}




export default Bmi
