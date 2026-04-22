import React, { useEffect, useState } from 'react'

//------------------------------------------------------onClick

// const App = () => {
//   function handleClick(e){
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.innerText);
    
//   }
//   return (
//     <div>
//       <h1>This is event</h1>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

// export default App

 
//--------------------------------------------------------------onChange

// const App = () => {
//   const [name,setName]=useState("")
//   const [email,setEmail]=useState("")
//   function handleChange1(e){
//     console.log(e.target.value);
//     setName(e.target.value)
    
//   }
//   function handleChange2(e){
//     console.log(e.target.value);
//     setEmail(e.target.value)
    
//   }
//   return (
//     <div>
//       <p>Name: <b>{name}</b></p>
//       <input type="text" onChange={handleChange1} name="" id="" placeholder='Type here..'/>
//       <p>Email:  <b>{email}</b></p>
//       <input type="email" onChange={handleChange2} name="" id="" placeholder='Type here...' />
//     </div>
//   )
// }

// export default App



//-------------------------------------------------------onSubmit

// const App = () => {
//   const [name,setName]=useState("")
//   const [email,setEmail]=useState("")

//   function handleSubmit(e){
//         e.preventDefault()
//         console.log(name);
//         console.log(email);
//         e.target[0].value=""        
//         e.target[1].value=""                

//   }
//   function handleChange1(e){
//     setName(e.target.value)
//   }
//   function handleChange2(e){
//     setEmail(e.target.value)
//   }
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <input type="text" name="" id=""  placeholder='Type name' onChange={handleChange1}/> <br /><br />
//         <input type="email" name="" id="" placeholder='Type email' onChange={handleChange2}/> <br /><br />
//         <button>Submit</button>
//       </form>

//       <p>Name: <b>{name}</b></p>
//       <p>Email: <b>{email}</b></p>
//     </div>
//   )
// }

// export default App



//--------------------------------------------preventDefault()

// const App = () => {
//   function stop(e){
//     e.preventDefault()
//   }
//   return (
//     <div>
//       <a href='https://www.youtube.com' onClick={stop}>Don't go to youtube</a>
//     </div>
//   )
// }

// export default App



//--------------------------------------------------------onMouseOver  and onMouseOut


// const App = () => {
//   const [color,setColor]=useState("green")
//   return (
//     <div style={{backgroundColor:color,border:"2px solid",width:"320px",textAlign:"center",padding:"15px",margin:"50px auto",color:"white"}}
//     onMouseOver={()=>setColor("red")}   onMouseOut={()=>setColor("green")} >
//        This is just a div
//     </div>
//   )
// }

// export default App


//-----------------------------------------------------------------Login and Logout


// const App = () => {
//   const [isLoggedIn,setIsLoggedIn]=useState(false)
//   return (
//     <div>
//       { isLoggedIn? 
//       <div>
//           <h1>Welcome</h1>
//           <p>You are successfully logged in</p>
//           <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Logout</button>
//       </div>:
//       <div>
//         <h1>Please Login</h1>
//         <p>You can access dashboard only after login</p>
//         <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Login</button>
//       </div>}
//     </div>
//   )
// }

// export default App


//----------------------------------------------------------Password show and hide

// const App = () => {
//   const [showPassword,setShowPassword]=useState(false)
//   return (
//     <div>
//       <input type={showPassword?"text":"password"} name="" id="" placeholder='Enter password' /> <br /><br />
//       <button onClick={()=>setShowPassword(!showPassword)}>{showPassword?"Hide password":"Show password"}</button>
//     </div>
//   )
// }

// export default App


//--------------------------------------------------------Light and dark mode theme

// const App = () => {
//   const [darkMode,setDarkMode]=useState(false)
//   return (
//     <div style={{backgroundColor:darkMode?"black":"white",color:darkMode?"white":"black",height:"400px",padding:"20px"}}>
//      <h1>{darkMode?"Dark Mode 🌙":"Light Mode ☀️"}</h1> 
//      <button onClick={()=>setDarkMode(!darkMode)}>Switch Theme</button>
//     </div>
//   )
// }

// export default App


//--------------------------------------------------Loading useEffect


const App = () => {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  return (
    <div>
      <h1>{loading?"Loading...":"Data loaded!"}</h1>
      </div>
  )
}

export default App