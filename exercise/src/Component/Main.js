import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const Main = () => {
  return (
<div>
    <div className='Container about'>
      
          <div className="Welcome-To-Aplha ">
            
            <div className="contents-2 container">
                 <h2 className="heading-2">Welcome to Alpha fitness</h2>
                <p className='para main-para mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat odio sunt quibusdam, quam minus hic officiis, maiores explicabo cum consequatur enim. Aliquid, quaerat ullam? Commodi ab magni soluta ipsa repudiandae, omnis exercitationem ipsum possimus magnam recusandae quasi incidunt, inventore eaque laboriosam consequatur nesciunt dolore?</p>
           
            </div>

            <div className="choose-contents container">
            <h1 className="heading-2">Why choose us</h1>
             <p className="para ">Our fitness experts can help you discover new training techniques</p>
             <div className="icons">
                  <div className="icon-1">
                  
                    <h3 className="heading-3_about">
                    How to become Body Builder?
                    </h3>
                    <p className="para p-2">
                    Daily Gym and healthy diet can help you to become a body builder.
                    </p>
                  </div>
                  <div className="icon-1">
                    <h3 className="heading-3_about">
                    What is the cost of premium membership?
                    </h3>
                    <p className="para p-2">
                    None, because our site is free of cost.
                    </p>
                  </div>
                  <div className="icon-1">
                    <h3 className="heading-3_about">
                    Why it is free of cost?
                    </h3>
                    <p className="para p-2">
                    So that anyone can acheive their dream body via our site.
                    </p>
                  </div>
                  <div className="icon-1">
                    <h3 className="heading-3_about">
                    Top notch customer support
                    </h3>
                    <p className="para p-2">
                    Full support out of the box.
                    </p>
                  </div>
             </div>
             </div>

          </div>

    </div>
    </div>
  )
}                  

export default Main
