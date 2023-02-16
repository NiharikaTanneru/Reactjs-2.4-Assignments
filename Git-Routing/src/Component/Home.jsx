import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import SingleCard from "./SIngleCard";


const Home = () =>{
    return(
        <div className="home" >
        <div className="container-fluid" style={{width:'100%'}}>       
    <Carousel>
      <Carousel.Item interval={1000} className="h-20">
        <img
          className="d-block w-100" style={{height:'350px'}}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNlj4iZVx0a8uC4ev5WpCgsuqjxoLCd1ryUw&usqp=CAU"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>BEST COURSES</h3>
          <p>SLide for more</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100" style={{height:'350px'}}
          src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9yaXpvbnRhbCUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Amazing Courses</h3>
          <p>Explained by Experts.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAmEJcasnKo4tQ0hqOWu_yT0g5-igVIWg_xjWK_D-bkTKyoWqLhtykxMGQYBkf6bc-2pY&usqp=CAU" style={{height:'350px'}}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Explore for More!</h3>
          <p>
            Industry Level Standards.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       {/* CARDS */}
    <div class="row">
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
</div>
</div>    
        </div>
    )
}
export default Home