import React from 'react'

// const App = () => {
//     let name="Sameer"
//     let training="Capgemini"
//     let dob=2001
//     let details={
//         country:"India",
//         city:"Bangalore"
//     }
//   return (
//     <div>
//         <h1>Hello: {name}</h1>
//         <h1>Company: {training}</h1>
//         <h1>Age: {2026-dob}</h1>
//         <h2>2+3={2+3}</h2>
//         <h2>Employee city: {details.city}</h2>
//         {/* <h3>Details:{details}</h3> */}       {/*Error as you cant display entire object on UI*/}
//     </div>
//   )
// }

// export default App


// const App = () => {
//     let city=["Chennai","Delhi","Hyderabad","Bangalore"]
//   return (
//     <div>
//         {/* <h1>CityName: {city[0]}</h1> */}
//         {city.map((e,i)=>{
//             return(
//                 <div key={i}>
//                     <h1>{e}</h1>
//                 </div>
//             )
//         })}
//     </div>
//   )
// }

// export default App


// const App = () => {
//     let skills=["HTML","CSS","ReactJs","Java","SpringBoot"]
//   return (
//     <div>
//         {skills.map((val)=>{
//            return <h1>{val}</h1>
//         })}
//     </div>
//   )
// }

// export default App


// const App = () => {
//     function greeting(){
//         console.log("Good Morning");
//     }
//     function greeting1(){
//         return "Good Night";
        
//     }
//   return (
//         // greeting()
//         <div>
//             {greeting1()}
//         </div>
//   )
// }

// export default App


const App = () => {
    let isRaining=true
    let a=10
    let b=20
  return (
    <div>
        {isRaining?<h1>It is raining</h1> : <h1>It is not raining</h1> }
        <h1>The sum of {a} and {b} is {a+b}</h1>
    </div>
  )
}

export default App