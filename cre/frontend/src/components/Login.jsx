import React, { useState } from 'react'
import axios from 'axios'
function Login() {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const handleSubmit=(e)=>{
e.preventDefault();
axios.post("http://localhost:5000/login",{email,password})
.then(result=>{
  console.log(result.data)
 
  setEmail("")
  setPassword("")
  setMessage("Login Successful");
  setStatus("success");
})
 .catch(error=> {
  
  console.log(error)
  setMessage("Invalid Credentials");
  setStatus("failed");
 })
  }
  return (
    <div>
       {message && (
        <div className={`mess ${status}`}>
          <h4>{message}</h4>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email:</label>
      <input type="email" id="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <label htmlFor='password'>Password:</label>
      <input type="password" id="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
<button type='submit' >Login </button>
<p>Don't have account ? Signup here</p>
      </form>
    </div>
  )
}

export default Login