import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  const myFunction=()=> {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg Poppins-font " >
        <div className="container-fluid" >
            
            <div className="brand-detail">

          <a className="navbar-brand" href="/">
            <img
              src={require("../Asset/logo2.png")}
              alt="Logo"
              width="39"
              height="39"
              className="d-inline-block align-text-top"
            />
          </a>
          <a className="navbar-brand brand-name" href="/">Alpha Fitness</a>
            </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup"  >
            <div className="navbar-nav">
              <a className="nav-link " aria-current="page" href="/">
                Home
              </a>
              <div class="popup nav-link" onClick={myFunction}>Contact Us
              <span class="popuptext" id="myPopup"><span>Phone number -</span> +91 702438242<br/>
              <span>Email - </span>alphafitness@gmail.com
              
              </span>
              </div>
              <Link className="Links" to={`/about`}><a className="nav-link">
                About
              </a></Link>
    
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;