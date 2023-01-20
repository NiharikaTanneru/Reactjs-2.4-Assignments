import React from 'react';
import AboutMeProgress from './AboutMeProgress';
import './css/AboutMe.css';

function AboutMe() {
  return (
    <div> 
         <section class="section-2" id="section-2">
        <h1 class="section-heading section-2-heading">About Me</h1>
        <AboutMeProgress />
        <div class="services">
          <div class="service">
            <i class="far fa-lightbulb"></i>
            <h2 class="service-heading">Creative</h2>
          </div>
          <div class="service">
            <i class="fas fa-cut"></i>
            <h2 class="service-heading">Problem Solving</h2>
          </div>
          <div class="service">
            <i class="fas fa-tachometer-alt"></i>
            <h2 class="service-heading">Fast</h2>
          </div>
          <div class="service">
            <i class="fas fa-rocket"></i>
            <h2 class="service-heading">Dynamic</h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutMe