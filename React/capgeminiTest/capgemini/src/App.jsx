import React,{useState} from 'react'
import image from './image.webp'
import mobile from './mobile.png'
import laptop from './laptop.png'
// const App = () => {
//   const [data,setData] = useState([{Image:image,name:"Item1",price:1200},{Image:mobile,name:"Item2",price:1000},{Image:laptop,name:"Item3",price:900},{Image:image,name:"Item4",price:1900}])
//   return (
//     <div style={{display:"flex"}}>
//         {
//           data.map((e,i)=>{
//             return (
//               <div key={i} style={{border:"1px solid", width:"350px", margin:"10px", textAlign:"center", backgroundColor:"lightblue", placeContent:"center"}}>
//                 <img width={"80%"} src={e.Image} alt=""/>
//                 <p style={{fontSize:"20px"}}>Product Name: {e.name}</p>
//                 <p style={{fontSize:"18px"}}>Price: Rs.{e.price}</p>
//                 <button style={{padding:"10px",margin:"10px",fontSize:"15px",border:"none",borderRadius:"10px", backgroundColor:"green",color:"white"}}>Buy Now</button>
//                 </div>
//             )
//           })
//         }
//     </div>
//   )
// }

// export default App

const App = () => {
  const [data,setData] =useState([{name:"Sameer",city:"Jalandhar",accountNo:9876543221,bank:"SBI"},{name:"Rayan",city:"Delhi",accountNo:999999999,bank:"PNB"}])
  function addUser(){
    setData([...data,{name:"Arif",city:"Mumbai",accountNo:6666666666,bank:"BOB"}])
  }
  return (
    <>
    <button onClick={addUser} style={{marginLeft:"6px", backgroundColor:"green",color:"white",padding:"10px", border:"none",borderRadius:"10px"}}>Add User</button>
    <div style={{display:"flex"}}>{
      data.map((e,i)=>{
        return (
          <div key={i} style={{border:"2px solid", margin:"5px", width:"400px", padding:"20px", backgroundColor:"lightcoral",fontSize:"18px"}}>
            <p>Name: {e.name}</p>
            <p>City: {e.city}</p>
            <p>Account No.: {e.accountNo}</p>
            <p>Bank: {e.bank}</p>
          </div>
        )
      })
    }
    <br />
    </div>
    </>
  )
}

export default App