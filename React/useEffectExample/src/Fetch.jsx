import React,{useState,useEffect} from 'react'

//-----------------------------------------------Fetch GET

// const Fetch = () => {
//       const [data,setData]=useState([])
//       useEffect(()=>{
//         async function Data(){
//           try{
//             let res=await fetch('https://fakestoreapi.com/users')
//             let data=await res.json()
//             console.log(data);
//             setData(data)
//           }
//           catch(err){
//             console.log(err);
//           }
//         }
//         Data()
//       },[])
//   return (
//         <div style={{display:"flex", padding:"5px",flexWrap:"wrap",textAlign:"center",fontSize:"20px"}}>
//             {data.map((e,i)=>{
//                 return <div key={i} style={{border:"1px solid", width:"320px",height:"30vh",margin:"10px", padding:"5px",backgroundColor:"#fc5054",color:"white"}}>
//                     <p>Username: <b>{e.username}</b></p> 
//                     <p>City: <b>{e.address.city}</b></p>
//                     <p>Zipcode: <b>{e.address.zipcode}</b></p>
//                 </div>
//             })}
//         </div>
//   )
// }

// export default Fetch


//---------------------------------------------------Fetch POST

// const Fetch = () => {
//     const [name,setName]=useState("")
//     const[email,setEmail]=useState("")
//     const[password,setPassword]=useState("")
//     const[avatar,setAvatar]=useState("")
//     function submit(e){
//         e.preventDefault()
        
//         fetch("https://api.escuelajs.co/api/v1/users/",{
//             method:"POST",
//             headers:{"Content-Type":"application/json"},
//             body:JSON.stringify({
//                                     name:name,
//                                     email:email,
//                                     password:password,
//                                     avatar:avatar
//                                 })
//         })
        
//     }
//   return (
//     <div>
//         <form action="" onSubmit={submit}>
//             <input type="text" name="" value={name} id="" placeholder='Enter name' onChange={(e)=>{setName(e.target.value)}}/> <br /><br />
//             <input type="text" name="" value={email} id="" placeholder='Enter email' onChange={(e)=>{setEmail(e.target.value)}}/> <br /><br />
//             <input type="text" name="" value={password} id="" placeholder='Enter password' onChange={(e)=>{setPassword(e.target.value)}}/> <br /><br />
//             <input type="text" name="" value={avatar} id="" placeholder='Enter Avatar' onChange={(e)=>{setAvatar(e.target.value)}}/> <br /><br />
//             <button>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default Fetch


//--------------------------------------------------------------Fetch PUT

// const Fetch = () => {
//     const [name,setName]=useState("")
//     const[email,setEmail]=useState("")
//     const[password,setPassword]=useState("")
//     const[avatar,setAvatar]=useState("")
//     function submit(e){
//         e.preventDefault()
        
//         fetch("https://api.escuelajs.co/api/v1/users/117",{
//             method:"PUT",
//             headers:{"Content-Type":"application/json"},
//             body:JSON.stringify({
//                                     name:name,
//                                     email:email,
//                                     password:password,
//                                     avatar:avatar
//                                 })
//         })
        
//     }
//   return (
//     <div>
//         <form action="" onSubmit={submit}>
//             <input type="text" name="" value={name} id="" placeholder='Enter name' onChange={(e)=>{setName(e.target.value)}}/> <br /><br />
//             <input type="text" name="" value={email} id="" placeholder='Enter email' onChange={(e)=>{setEmail(e.target.value)}}/> <br /><br />
//             <input type="text" name="" value={password} id="" placeholder='Enter password' onChange={(e)=>{setPassword(e.target.value)}}/> <br /><br />
//             <input type="text" name="" value={avatar} id="" placeholder='Enter Avatar' onChange={(e)=>{setAvatar(e.target.value)}}/> <br /><br />
//             <button>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default Fetch


//----------------------------------------------Fetch DELETE

const Fetch = () => {
    const [name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[avatar,setAvatar]=useState("")
    function submit(e){
        e.preventDefault()
        
        fetch("https://api.escuelajs.co/api/v1/users/117",{
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                                    name:name,
                                    email:email,
                                    password:password,
                                    avatar:avatar
                                })
        })
        
    }
  return (
    <div>
        <form action="" onSubmit={submit}>
            <input type="text" name="" value={name} id="" placeholder='Enter name' onChange={(e)=>{setName(e.target.value)}}/> <br /><br />
            <input type="text" name="" value={email} id="" placeholder='Enter email' onChange={(e)=>{setEmail(e.target.value)}}/> <br /><br />
            <input type="text" name="" value={password} id="" placeholder='Enter password' onChange={(e)=>{setPassword(e.target.value)}}/> <br /><br />
            <input type="text" name="" value={avatar} id="" placeholder='Enter Avatar' onChange={(e)=>{setAvatar(e.target.value)}}/> <br /><br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Fetch