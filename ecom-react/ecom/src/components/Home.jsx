import React from 'react'
import Navbar from './Navbar'

function Home() {
  return (
    <div>
     
      <div className="home-container">
         <Navbar />
        <h1 className='logo'>Caffine</h1>
        <div className="home-text">
        <h1>Discover the Art Of Coffee </h1>
        <h2>Experience The Rich and Bold Flavours of Our Exquisite Coffee Blends ,
          Crafted To Awaken Your Sense And Start Your Day Right</h2>
     </div> 
     <button className='home-btn' id='order'>Order Now &rarr;</button>
     <button className='home-btn' id='explore'>Explore More </button>
     <div className="metrics">
      <h2><span>50+</span> Coffee Items</h2>
      <h2><span>20+ </span>Order Running</h2>
      <h2><span>2K </span>Happy Customer</h2>
     </div>
     </div>

      </div>
  )
}

export default Home