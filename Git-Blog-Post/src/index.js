import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import UserCard from './UserCard'; 
import pic1 from './Images/1.jpg';
import pic2 from './Images/2.jpg';

const App1 = function (){
  return(
<div className="ui comments">
  <UserCard author="Niharika">
  <SingleComment 
  name="Niha"
  date="Today at 6:00 PM"
  text="Reactjs tutorial!" 
  picture={pic1}
  />
  </UserCard>

  <SingleComment 
 name="Saanvika"
  date="Today at 6:00 PM"
  text="angular js tutorial!" 
  picture={pic2}
  />
</div>
)}


ReactDOM.render(
   <App1 />,
    document.querySelector('#root'))
