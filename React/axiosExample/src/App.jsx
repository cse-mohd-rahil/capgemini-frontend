import React,{useState,useEffect} from 'react'
import axios from 'axios'


// const App = () => {
//   const [data,setData]=useState([])
//   useEffect(()=>{
//     async function fetchData(){
//         try{
//           const response=await axios.get("https://api.escuelajs.co/api/v1/users/")
//           console.log(response.data);
//           setData(response.data)
//         }
//         catch(err){
//           console.log(err);
          
//         }
//     }
//     fetchData()
//   },[])
//   return (
//     <div>
//         {
//         data.map((e,i)=>{
//           return <ul key={i}>
//             <li>Email: <b>{e.email}</b> and Password: <b>{e.password}</b></li>
//           </ul>
//         })
//         }
//     </div>
//   )
// }

// export default App


//-----------------------------------------------------REGEX


const App = () => {
  const [email,setEmail]=useState("")
  const [emailErr,setEmailErr]=useState("")

  function handleChange(e){
      const value=e.target.value
      setEmail(value)

      const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if(!regex.test(value))
        setEmailErr("Enter valid email address")
      else
        setEmailErr("")
    }
    
    function handleSubmit(e){
      e.preventDefault();
      
      const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if(!regex.test(email)){
        setEmailErr("Please enter a valid email address")
        return
      }
      setEmailErr("")
      console.log("Form submitted: ",email);
      


  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="" id="" value={email} placeholder='Enter email' onChange={handleChange}/> 
        <span style={{color:"red"}}>{emailErr}</span> <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App