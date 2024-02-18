import React, { useState } from 'react'
import { fetchData} from "./Utils/FetchData";


const WorkoutPlanner = () => {

    const [location , setLocation]= useState("");
    const [time , setTime]= useState("");
    const [muscle , setMuscle]= useState("");
    const [equiptment , setEquiptment]= useState("");



    const workoutoptions = {
        
        method: 'GET',
        params: {
          time: '30',
          muscle: 'biceps',
          location: 'gym',
          equipment: 'dumbbells'
        },
        headers: {
          'X-RapidAPI-Key': '1252d0ce35mshdce41b874f1dd29p1ec695jsn6a8071cc19fe',
          'X-RapidAPI-Host': 'workout-planner1.p.rapidapi.com'
        }
      };

    const ModifyParams=()=>{
    workoutoptions.params.time='10';
    workoutoptions.params.location=`${location}`;
    workoutoptions.params.muscle='chest';
    workoutoptions.params.equipment=`${equiptment}`;

    HandlePlan();
    }

   const HandlePlan= async()=>{
    console.log(time)
    

    const workoutData = await fetchData(
        "https://workout-planner1.p.rapidapi.com/",
        workoutoptions
      );

     
      console.log(workoutData);

   }


        
  return (
    <div>
       <section className="services">

      <div className="container searchExercise Poppins-font">
  
        <h1 className="heading-1"  >Plan Your Workout</h1>
        <div className="searchBar">
          <label className='label'>Time : </label>  
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value.toLowerCase())}
            placeholder="Set Time"
          />
        </div>

        <div className="searchBar">
          <label className='label'>Muscle : </label>  
          <input
            type="text"
            value={muscle}
            onChange={(e) => setMuscle(e.target.value.toLowerCase())}
            placeholder="Muscle"
          />
        </div>

        <div className="searchBar">
          <label className='label'>Location : </label>  
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value.toLowerCase())}
            placeholder="Eg - gym or Home"
          />
        </div>


        <div className="searchBar">
          <label className='label'>Equipment : </label>  
          <input
            type="text"
            value={equiptment}
            onChange={(e) => setEquiptment(e.target.value.toLowerCase())}
            placeholder="Dumbells"
          />
        </div>


        <button className="btn-search-2 mt-4" onClick={ModifyParams} type="submit">
            PLAN
          </button>
      </div>

    </section>
    </div>
  )
}

export default WorkoutPlanner
