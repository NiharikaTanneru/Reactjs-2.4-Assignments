import React from 'react';
import './css/Header.css';

function Header(props) {
  return (
    <div>
      <section class="section-1 center" id="section-1">
        <h1 class="section-1-heading">
         {props.title}
        </h1>
        <img src="../images/john-smith.jpg" alt="John Smith" class="person-img" />
        <h3 class="person-name">{props.name}</h3>
        <a href="#section-3" class="section-1-btn">Projects</a>
      </section>
    </div>
  )
}

export default Header