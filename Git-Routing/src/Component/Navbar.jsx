import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return(
        <nav className='ui raised very padded segment' style={{ backgroundColor: "rgb(100, 100,200)"}}>
            <span className='ui teal inverted segment' style={{borderRadius : '50%'}}>TECHADEMY</span>
            <div className='ui right floated header'>
                <button className='ui button'>
                    <Link to="/home">Home</Link>
                </button>
                <button className='ui button'>
                    <Link to="/about">About</Link>
                </button>
                <button className='ui button'>
                    <Link to="/contact">Contact</Link>
                </button>
                <button className='ui button'>
                    <Link to="/services">Services</Link>
                </button>
            </div>
        </nav>
    )
}
export default Navbar