import React from "react";
import { useContext } from "react";
import { InfoContext } from "../App";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Product = () => {
  const navigate = useNavigate();
  const value1 = useContext(InfoContext);
  return (
    <>
    <Navbar/>
      <div className="body p-8">
        {value1}
        <br />
        <button className="btn btn-warning"  style={{marginTop:"50px"}}  onClick={() => navigate("/home")}>Home</button>
      </div>
      <Footer/>
    </>
  );
};

export default Product;
