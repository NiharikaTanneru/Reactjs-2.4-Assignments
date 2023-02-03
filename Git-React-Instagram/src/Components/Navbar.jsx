
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import  './css/Navbar.css';
class Navbar extends Component{
    render(){
        return(
            <nav className="navbar">
            <div className="container-fluid">
              <ul className="navbar-nav">
              <li className="nav-item">
                  <p className="nav-link">     
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTZOtUauVgzRYT4PKhdZ3CNhI3uQAB7y8Svz-2-7D5YmSDiDCdupyXbYCe0s0L-43lg&usqp=CAU" id="insta-pic"/>
                  </p>
                </li>
                <li className="nav-item">
               
                  
                  <Link to="/home" className='nav-link'> <i className="fa fa-home me-3"></i> Home</Link>
                 
                </li>
                <li className="nav-item">
                <Link to="/messages" className='nav-link'> <i className="fa fa-envelope me-3"></i>Messages </Link>
                  
                </li>
                <li className="nav-item">
                <Link to="/notifications" className='nav-link'> <i className="fa fa-bell me-3"></i>Notifications</Link>
                  
                </li>
                <li className="nav-item">
                <Link to="/signup" className='nav-link'><i className="fa fa-plus-circle me-3"></i>Create </Link>
                  
                </li>
                <li className="nav-item">
                <Link to="/profile" className='nav-link'><i className="fa fa-user me-3"></i>Profile </Link>
                  
                </li>
              </ul>
            </div>
          </nav> 
            
        )
    }

}

export default Navbar;