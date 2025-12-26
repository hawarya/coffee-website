import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
function Signup() {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const handleSubmit=(e)=>{
 e.preventDefault();
 axios.post("http://localhost:5000/signup",{ name, email, password })
 .then((result)=>{console.log(result.data);
      setName("");
      setEmail("");
      setPassword("");
    })
 
 .catch(error=> console.log(error))
    }
    
  return (
    <div>
        <div className="userdetails">
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' placeholder='enter your name'  value={name} onChange={(e)=>setName(e.target.value)}/>
                <label htmlFor='email'>Email</label>
                <input type='email'id='email'placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' placeholder='******' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type='submit' id='signup-btn' >Sign UP</button>
                <p>Already have Account ? login here</p>
            </form>
        </div>
    </div>
  )
}

export default Signup