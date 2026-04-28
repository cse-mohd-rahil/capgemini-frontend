import React, { useEffect, useState } from 'react'
import Fetch from './Fetch'

// const App = () => {
//   const [rating,setRating]=useState(0)
//   useEffect(()=>{
//       alert("I will run only once the component loads")
//   },[])
//   return (
//     <div>
//       <p>Rating: <b>{rating}</b></p>
//       <button onClick={()=>setRating(rating+1)}>Add rating</button>
//     </div>
//   )
// }

// export default App



// const App = () => {
//   const [rating,setRating]=useState(0)
//   useEffect(()=>{
//       alert("I will run after every re-render")
//   })
//   return (
//     <div>
//       <p>Rating: <b>{rating}</b></p>
//       <button onClick={()=>setRating(rating+1)}>Add rating</button>
//     </div>
//   )
// }

// export default App



// const App = () => {
//   const [rating,setRating]=useState(0)
//   useEffect(()=>{
//       alert("I will run whenever rating component is updated")
//   },[rating])
//   return (
//     <div>
//       <p>Rating: <b>{rating}</b></p>
//       <button onClick={()=>setRating(rating+1)}>Add rating</button>
//     </div>
//   )
// }

// export default App


//-----------------------------------Timer Example


// const App = () => {
//   const [timer,setTimerFunction]=useState(10)
//   useEffect(()=>{
//     let id=setInterval(()=>{
//       setTimerFunction((pre)=>{
//         if(pre<=0){
//           clearInterval(id)
//           return 0
//         }
//         return pre-1
//       })
//     },1000)
//   },[])
//   return (
//     <div style={{textAlign:"center",backgroundColor:"yellowgreen",padding:"10px"}}>
//       <p style={{color:timer===0?"red":"black",fontSize:"25px"}}>Timer expires in <b>{timer} </b> seconds</p>
//     </div>
//   )
// }

// export default App


//--------------------------------------------------Fetch 



const App = () => {
  return (
    <Fetch/>
  )
}

export default App



