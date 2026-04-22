import React, { useState } from 'react'

// const App = () => {
//   const [company,setCompany]=useState("TestYantra")
//   function handleClick(){
//     setCompany("Capgemini")
//   }
//   return (
//     <div>Company Name: <b> {company} </b> <br /> <br />
//     <button onClick={handleClick}>Change Company</button>
//     </div>

//   )
// }

// export default App


// const App = () => {
//   const [battery,setBattery]=useState(50)
//   function usePhone(){
//     {battery>0 && setBattery(battery-10)}
//   }
//   function charge(){
//     setBattery(100)
//   }
//   return (
//     <div>
//       <p>🔋Battery: <b>{battery}%</b></p>
//       <button onClick={usePhone} style={{margin:"10px"}}>Use Phone</button>
//       <button onClick={charge}>Charge</button>
//       {battery<=20 && <p>Turn on power saving mode</p>}
//     </div>
//   )
// }

// export default App

// const App = () => {
//   const [isSleeping,setIsSleeping]=useState(false)
//   function toggle(){
//     setIsSleeping(!isSleeping)
//   }
//   return (
//     <div>
//       {isSleeping?"Sleeping":"Awake"} <br /><br />
//       <button onClick={toggle}>Change Mod</button>
//     </div>
//   )
// }

// export default App



// const App = () => {
//   const [cricketers, setCricketers]=useState(["Dhoni","Kohli","Rohit"])
//   function addCricketers(){
//     setCricketers([...cricketers,"Irfan Pathan"])
//   }
//   return (
//     <div>{
//       cricketers.map((e,i)=>{
//         return(
//           <ul key={i}>
//             <li>{e}</li>
//           </ul>
//         )
//       })
//     }
//     <button onClick={addCricketers}>Add Cricketer</button>
//     </div>
//   )
// }

// export default App


// const App = () => {
//   const [user,setUser]=useState({name:"Sameer",age:20})
//   function update(){
//     setUser({...user,age:user.age+1,name:"Rayan"})
//   }
//   return (
//     <div>
//       <p>Username: <b>{user.name}</b></p>
//       <p>Age: <b>{user.age}</b></p>
//       <button onClick={update}>Update Age</button>
//     </div>
//   )
// }

// export default App


// const App = () => {
//   const [count,setCount]=useState(0)
//   function dec(){
//     if(count>0) setCount(count-1)
//   }
//   return (
//     <div>
//       <p>Count: <b>{count}</b></p>
//       <button onClick={()=>{setCount(count+1)}}>Increment</button>
//       <button onClick={dec} style={{margin:"10px"}}>Decrement</button>
//       <button onClick={()=>setCount(0)}>Reset</button>
//     </div>
//   )
// }

// export default App


const App = () => {
  const [data,setData]=useState(undefined)
  return (
    <div>
      {data?"data present":"data not present or falsy value"}
    </div>
  )
}

export default App