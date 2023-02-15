import React from "react";
import './css/Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="mainfooter" role="contentinfo">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="footer-pad">
                 
                  <ul className="list-unstyled">
                    <li>
                      <a href="#"> </a>
                    </li>
                    <li>
                      <a href="#">Payment Center</a>
                    </li>
                    <li>
                      <a href="#"> Contact Directory </a>
                    </li>
                    <li>
                      <a href="#">Forms</a>
                    </li>
                    <li>
                      <a href="#">News and Updates</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="footer-pad">
                 
                  <ul className="list-unstyled">
                    <li>
                      <a href="#"> Blog </a>
                    </li>
                    <li>
                      <a href="#">Accessibility</a>
                    </li>
                    <li>
                      <a href="#">Disclaimer</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Webmaster</a>
                    </li>
                  </ul>
                </div>
              </div>
             
              <div className="col-md-4">
                <h4> Follow Us </h4>
                <ul className="social-network social-circle">
                  <li>
                    <a href="#" className="icoFacebook" title="Facebook">
                      <i className="fa fa-facebook"> </i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoLinkedin" title="Linkedin">
                      <i className="fa fa-linkedin"> </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 copy">
                <p className="text-center">
                  © Copyright 2023 - EduGrad. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
