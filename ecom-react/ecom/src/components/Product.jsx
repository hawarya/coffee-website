import React from "react";
// import { products } from "../data/ProductData";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function Product() {
  const[products,setProducts]=useState([]);
 async function fetchData() {
  const response = await fetch("http://localhost:5000/");
  const data = await response.json(); 
  setProducts(data);
}

  useEffect(()=>{
    fetchData();
  },[]);
  
  return (
    <div>
       <Navbar />
      <h1 className="prod-h1">Products</h1>
<div className="products">
      {products.map((prod) => (
        <Link key={prod._id} to={"/product/" + prod._id} className="product-card">
          <div>
            <img src={prod.image} alt={prod.name} width={150} />
            <h4 className="details">{prod.name}</h4>
            <p className="details">₹{prod.price}</p>
            <button className="details">View</button>
          </div>
        </Link>
      ))}</div>

    </div>
  );
}

export default Product;
