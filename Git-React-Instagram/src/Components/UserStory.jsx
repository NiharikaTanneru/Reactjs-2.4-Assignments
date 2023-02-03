import React from 'react';
import './css/Home.css';

function UserStory(props) {
  return (
    <div>
        <div className="ava">
          <img
            src={props.img}
            alt="Avatar"
            className="avatar"
            onClick={()=>{alert('User Status is Available')}}
          />
          <p>{props.name}</p>
        </div>
    </div>
  )
}

export default UserStory