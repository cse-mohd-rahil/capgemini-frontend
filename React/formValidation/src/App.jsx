import React, { useState } from 'react'

const App = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  
  const[nameErr,setNameErr]=useState("")
  const[pwdErr,setPwdErr]=useState("")
  const[emailErr,setEmailErr]=useState("")

  function handleName(e){
    let value=e.target.value
    setName(value)
    if(value==="")
      setNameErr("Name should not be empty!")
    else
      setNameErr("")
  }
  function handleEmail(e){
      let value=e.target.value
      setEmail(value)
      if(!email.includes("@"))
        setEmailErr("Enter valid email!")
      else
        setEmailErr("")
    }
    function handlePassword(e){
      let value=e.target.value
      setPassword(value)
      if(password.length<6){
        setPwdErr("Password should not be less than 6 characters!")
      }
      else{
        setPwdErr("")
      }
    }
  function handleSubmit(e){
    e.preventDefault()
    if(name!=="" && email.includes("@") && password.length>6){
      alert("Form Submitted Successfully")
      console.log(name);
      
    }
    else{
      alert("Enter valid details!")
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" value={name} placeholder='Enter name' onChange={handleName} /> <span style={{color:"red"}}>{nameErr}</span>  <br /><br />
        <input type="text" name="" id="" value={email} placeholder='Enter email' onChange={handleEmail}/> <span style={{color:"red"}}>{emailErr}</span> <br /><br />
        <input type="text" name="" id="" value={password} placeholder='Enter password..' onChange={handlePassword}/> <span style={{color:"red"}}>{pwdErr}</span> <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App