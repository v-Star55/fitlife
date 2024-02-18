import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


import "../App.css";

const Hero = () => {

  const handleClick=()=>{
    const trailer= document.querySelector('.trailer');
    const video=document.querySelector('video')
    trailer.classList.toggle('active')
    video.currentTime=0
    video.pause();
  }


  return (
    <div>
      <div className="hero  d-flex justify-content-between align-items-center">

        <div className="hero-tagline">
          <h1 className="heading-1 ">
            Come & Make Your Dream Body With
            <span className="heading-1 hero-span "> Alpha Fitness</span>
          </h1>

          <div className="hero-buttons mt-4">
            <button type="button" className="btn btn-custom">
              Exercise
            </button>
            
            <div className="play-button Poppins-font">
            <div className="circle" onClick={handleClick}> 
              <span className="play"></span>
            </div>
            <p>Watch Video</p>
            </div>
           
          </div>

          <p className="hero-tagline__para mt-4">
            Use us And Make Your Dream <span><a href="/" className="hero-link">&nbsp;Body</a></span>
          </p>
        </div>


        <div className="achievement d-flex flex-column Roboto-font">
          <div className="p-2">
            <h2 className="heading-2">10 +</h2>
            <p className="desc Poppins-font">Happy clients</p>
          </div>

          <div className="p-2">
            <h2 className="heading-2 border-up">Rs.0</h2>
            <p className="desc Poppins-font">Free Of Cost</p>
          </div>

          <div className="p-2">
            <h2 className="heading-2 border-up ">1250 +</h2>
            <p className="desc Poppins-font">Different Exercise</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
