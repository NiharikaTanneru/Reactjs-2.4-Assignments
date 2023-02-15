import React from 'react';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Contact from "./components/Contact";
import StoreComp from "./components/StoreComp";
import About from "./components/About";
import Login from "./components/Login";

export const InfoContext= React.createContext();
function App() {
  const info="You are in the Education Website";
  
  return (
    <>
   
    <div className="App">
      <InfoContext.Provider value={info}>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/store-locator" element={<StoreComp />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
       
      </Routes>
      </InfoContext.Provider>
    </div>
    </>
  );
}
export default App;
