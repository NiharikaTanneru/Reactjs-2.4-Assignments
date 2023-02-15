import React from "react";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Footer from './Footer';
import { NavLink } from "react-router-dom";
import useFetch from "../customhook/useFetch";
const Home = () => {
  const [data, loading] = useFetch("https://fakestoreapi.com/products");
  return (
    <>
      <Navbar />
      <div className="home-body">
      {!loading ? (
        data.map((product) => (
          <NavLink
            className="text-decoration-none text-dark fw-bold fs-4"
            key={product.id}
          >
            <div className="p-2" style={{borderBottom: "5px solid black"
                }} >
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                height="200px"
                width="100px"
                style={{ objectFit: "contain",
                borderRadius:"1rem",
                border: "5px double black",width:"auto"}}
              />
              <h6 className="card-title mb-0 my-5" style={{textDecoration:"underline"}}>{product.title}</h6>
            </div>
          </NavLink>
        ))
      ) : (
        <div className="row justify-content-center">
          <Loader />
        </div>
      )}
      </div>
      <Footer/>
    </>
  );
};
export default Home;
