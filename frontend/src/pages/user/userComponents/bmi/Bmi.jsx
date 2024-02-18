import React from 'react'
import { useState } from 'react';

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
   <div>
      <h2>BMI Calculator</h2>
      <div>
        <label>Height (in cm): </label>
        <input type="number" value={height} onChange={e => setHeight(e.target.value)} />
      </div>
      <div>
        <label>Weight (in kg): </label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
      </div>
      <button onClick={calculateBMI}>Calculate</button>
      {bmiResult && <h3>Your BMI is {bmiResult}</h3>}
    </div>
  )
}

export default Bmi
