import React from 'react'
import {useState} from 'react';
import Navbar from './Navbar';
function Contact() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setmessage]=useState("");
  return (
    <div>
       
      <div className='contact-container'>
        <Navbar />
        <h1> Contact Us</h1>
        <form>
          <div className='form'>
             
          <lable htmlFor='name' className='label'>Enter Name</lable>
          <input type='text' className='input' required></input>

          <lebel htmlFor="email"  className='label'>Enter Email</lebel>
          <input type='email' className='input' required></input>

          <lebel htmlFor="message" className='label'>Enter Message</lebel>
          <input type='text' className='input' required></input>
          <button type='submit' className='btn'>Submit</button></div>
        </form>
        </div>
    </div>

  )
}

export default Contact