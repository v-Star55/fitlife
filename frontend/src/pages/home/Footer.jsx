import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram, faEnvelope } from '@fortawesome/free-brands-svg-icons';
import './nav_foot.css'

const Footer = () => {
  return (
    <div>
      <section class="footer-section">
        <div class="container">
          <div class="row footer-main">
            <div class="col-lg-4">
              <div class="fs-about">
                <div class="fa-logo">
                  <a href="#">
                    <img src={require("../../Assests/logo2.png")} alt="" />
                  </a>
                </div>
                <p>
                  Join us and make your Dream body with   ALPHA FITNESS
                </p>
                <div class="fa-social">
                  <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                  </a>
                
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6">
              <div class="fs-widget">
                <h4>Useful links</h4>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Classes</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6">
              <div class="fs-widget">
                <h4>Support</h4>
                <ul>
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">My account</a>
                  </li>
                  <li>
                    <a href="#">Subscribe</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="fs-widget">
                <h4>Tips &amp; Guides</h4>
                <div class="fw-recent">
                  <h6>
                    <a href="#">
                      Physical fitness may help prevent depression, anxiety
                    </a>
                  </h6>
                
                </div>
                <div class="fw-recent">
                  <h6>
                    <a href="#">
                      Fitness: The best exercise to lose belly fat and tone
                      up...
                    </a>
                  </h6>
               
                </div>
              </div>
            </div>
          </div>
          <div class="row copyright">
            <div class="col-lg-12 text-center">
              <div class="copyright-text">
                <p>
                  Copyright ©
                  <script>document.write(new Date().getFullYear());</script>2024
                  All rights reserved | This website is made by Cosmic Coders
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
