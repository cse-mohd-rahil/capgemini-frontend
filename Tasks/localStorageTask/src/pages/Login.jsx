import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"

const Login = () => {
    let [logindata,setLogindata]=useState({name:"",password:""})
    let navigate=useNavigate()
    function handleChange(e){
           let {name,value}=e.target
              setLogindata({
                ...logindata,
                [name]:value
              })
    }


    function handleSubmit(e){
         e.preventDefault()
         let storedData= JSON.parse(localStorage.getItem("user"))
          //stored data is not present
         if(!storedData){
            alert("User Not found. please register first")
             navigate("/register")
         }

         //checking input fields
         if(logindata.name===""||logindata.password===""){
            alert("Please fill all the fields")
            return;
         }

         
    if(logindata.name===storedData.name && logindata.password===storedData.password){
    alert("Login successfull")
         navigate("/home")  
      }
      else{
        alert("Invalid Credentials")
      }

         
    }
  return (
    <div style={{border:"1px solid grey",width:"50%",padding:"20px",textAlign:"center",margin:"30px auto",borderRadius:"8px"}}>
      <h1>Login</h1>
       <form onSubmit={handleSubmit} >
           <input style={{width:"80%",borderRadius:"4px",padding:"4px"}} type="text" name='name' placeholder='Enter your username' value={logindata.name} onChange={handleChange}/>
           <br /><br />
           <input style={{width:"80%",borderRadius:"4px",padding:"4px"}} type="text" name='password' placeholder='Enter your password'  value={logindata.password} onChange={handleChange}/>
           <br /><br />
           <button  style={{backgroundColor:"blue",border:"none",color:"white",padding:"4px 12px",borderRadius:"5px",width:"80%"}}>Register</button>

      </form>
    </div>
  )
}

export default Login