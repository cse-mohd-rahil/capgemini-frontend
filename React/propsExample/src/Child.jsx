import React from 'react'

// const Child = (prop) => {
//     console.log(prop);
//     let {lunch}=prop
//     console.log(lunch);
//     console.log(prop.pocketMoney);
    
//   return (
//     <>    
//     <h1>Today my father has sent {prop.lunch} in lunch</h1>
//     <h2>Father has also sent pocket money of Rs. {prop.pocketMoney}</h2>
//     </>

//   )
// }

// export default Child


// const Child = (prop) => {
//     console.log(prop);
//     console.log(prop.data);
//     let {college,city,state,pincode}=prop.data
    
    
//   return (
//     <div>
//         <h1>Name of college: <mark> {college} </mark></h1>
//         <h1>Name of city: <mark> {city}  </mark></h1>
//         <h1>Name of state: <mark> {state} </mark></h1>
//         <h1>Pincode: <mark> {pincode} </mark></h1>
//     </div>
//   )
// }

// export default Child


// const Child = (prop) => {
//   return (
//     <div style={{textAlign:"center", backgroundColor:"teal"}}>
//         <p style={{color:"white",fontSize:"20px"}}>This is your college name:</p>
//         <h1> <u>{prop.collegeName}</u></h1>
//         <p style={{color:"white",fontSize:"20px"}}>Here is the College Image ⬇️</p>
//         <img src={prop.image} height={400} alt="" />
//     </div>
//   )
// }

// export default Child


// const Child = (prop) => {
//   return (
//     <div><button onClick={prop.bell}>Click</button></div>
//   )
// }

// export default Child




// const Child = (props) => {
//   console.log(props);
//   let {support}=props
//   console.log(support);
  
//   return (
//     <div>
//       {support.map((e,i)=>{
//         return (
//           <ul key={i}>
//             <li> <h2>Trainers: {e}</h2></li>
//           </ul>
//         )
//       })}
//     </div>
//   )
// }

// export default Child


const Child = (prop) => {
  let {trainer,rating}=prop
  return (
    <div style={{backgroundColor:"black",color:"white",padding:"13px", textAlign:"center", width:"500px",margin:"5px auto"}}>
      <h1>Name of trainer: <b>{trainer}</b></h1>
      <p>Rating for the trainer: {rating} ⭐</p>
    </div>
  )
}

export default Child