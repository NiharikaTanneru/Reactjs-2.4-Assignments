import React from "react";
import {useNavigate} from 'react-router-dom';

const Contact = () =>{
    let navigate= useNavigate();
    return(
        <div className='ui raised very padded text container segment' style={{marginTop:'80px',backgroundColor:"aquaMarine"}}>
            <h3 className='ui header'>Contact</h3>
            <p>The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.</p>
            <button class="ui primary button" onClick={()=>{
                navigate("/Home");
            }}>
                Home
            </button>
        </div>
    )
}
export default Contact