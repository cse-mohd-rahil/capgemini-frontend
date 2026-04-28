import React from 'react'
import {useNavigate} from "react-router-dom"
const Welcome = () => {
   let navigate=useNavigate()
    function handleLogin(){
       navigate("/login")
    }
    function handleRegister(){
     navigate("/register")
    }
  return (
    <div style={{textAlign:"center"}}>
         <h1 style={{textAlign:"center"}}>Welcome to Lovely Professional University 😍</h1>
         <button  style={{backgroundColor:"blue",border:"none",color:"white",padding:"4px 12px",marginRight:"17px"}} onClick={handleLogin}>Login</button>
         <button style={{backgroundColor:"orange",border:"none",color:"white",padding:"4px 12px",marginRight:"17px"}} onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Welcome