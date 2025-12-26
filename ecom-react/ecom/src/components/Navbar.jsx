import React from 'react'

import { Link, useLocation } from "react-router-dom";
function Navbar() {
    const { pathname } = useLocation();

  const linkStyle = {
    textDecoration: "none",
    fontSize: "20px",
    color: pathname === "/cart" || pathname === "/products"
      ? "brown"  
      : "white"  
      
  };

  return (
    <div>
        <div className='navbar'>
        <nav className='nav'>
            <Link to="/" style={linkStyle}>Home</Link> 
            <Link to="/products"style={linkStyle}>Product</Link>
            <Link to="/cart" style={linkStyle}>Cart</Link>
            <Link to="/contact" style={linkStyle}>Contact Us</Link>
        </nav></div>
    </div>
  )
}

export default Navbar;