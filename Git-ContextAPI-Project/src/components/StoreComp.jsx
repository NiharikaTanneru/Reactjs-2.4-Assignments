import React,{useContext} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { InfoContext } from '../App';
const StoreComp=()=> {
 const information=useContext(InfoContext);
  return (
    <>
     <Navbar/>
     
    <div className='body'>
    {information}
     </div>
    <Footer/>
      </>
  )
}

export default StoreComp