import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
const Register = () => {
    
      let [userdata,setUserdata]=useState({
         name:"",
         password:""
      })

     let navigate= useNavigate()

      function handleChange(e){
              let {name,value}=e.target
              setUserdata({
                ...userdata,
                [name]:value
              })
      }


      function handleSubmit(e){
             e.preventDefault()
            //  console.log(userdata);

           if(userdata.name===""||userdata.password==="") {
             alert("Please fill all the fields")
             return;
           }
            
           localStorage.setItem("user",JSON.stringify(userdata))
           alert("Registered Successfully")
           console.log(userdata);
           navigate("/login")

      }
  return (
    <div style={{border:"1px solid grey",width:"50%",padding:"20px",textAlign:"center",margin:"30px auto",borderRadius:"8px"}}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} >
           <input style={{width:"80%",borderRadius:"4px",padding:"4px"}} type="text" name='name' placeholder='Enter your username' value={userdata.name} onChange={handleChange}/>
           <br /><br />
           <input style={{width:"80%",borderRadius:"4px",padding:"4px"}} type="text" name='password' placeholder='Enter your password'  value={userdata.password} onChange={handleChange}/>
           <br /><br />
           <button style={{backgroundColor:"orange",border:"none",color:"white",padding:"4px 12px",borderRadius:"5px",width:"80%"}}>Register</button>

      </form>
    </div>
  )
}

export default Register