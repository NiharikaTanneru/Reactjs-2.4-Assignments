import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import SingleCard from './components/SingleCard';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row mt-3'>
          
      <SingleCard 
     picture="https://img-b.udemycdn.com/course/240x135/394676_ce3d_5.jpg"
     title="Learning Python:The Complete Python Programming Course"
     author="Avinash Jain, The Codex"
     rating="4.3"
     Numberenrolled="(4,574)"
     amnt="649"
     Actualamnt="3,399"
     />
     <SingleCard
     picture="https://img-b.udemycdn.com/course/240x135/396876_cc92_7.jpg"
     title="Learning Python for Data Analysis and Visualization Ver1"
     author="Jose Portilia"
     rating="4.3"
     Numberenrolled="(4,574)"
     amnt="649"
     Actualamnt="3,499"
     />
     <SingleCard
     picture="https://img-b.udemycdn.com/course/240x135/405878_e5a0_3.jpg"
     title="Python For Beginners-Learn Programming from Scratch"
     author="Avinash Jain, The Codex"
     rating="4.3"
     Numberenrolled="(4,574)"
     amnt="649"
     Actualamnt="3,399"
     />
     <SingleCard
     picture="https://img-b.udemycdn.com/course/240x135/426570_1b91_3.jpg"
     title="Learning Python:Python for beginners"
     author="Avinash Jain, The Codex"
     rating="4.3"
     Numberenrolled="(4,574)"
     amnt="649"
     Actualamnt="3,399"
     />
     <SingleCard
     picture="https://img-b.udemycdn.com/course/240x135/449532_2aa9_7.jpg"
     title="Learning Python:Python for beginners"
     author="Avinash Jain, The Codex"
     rating="4.3"
     Numberenrolled="(4,574)"
     amnt="649"
     Actualamnt="3,399"
     /> 
     
           </div>
        </div>
     </div>

  );
}

export default App;
