import React,{useState} from 'react'

const Task1 = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [address,setAddress]=useState("")
    const [location,setLocation]=useState("")
    function handleSubmit(e){
        e.preventDefault()
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(address);
        console.log(location);
        e.target[0].value=""
        e.target[1].value=""
        e.target[2].value=""
        e.target[3].value=""
        e.target[4].value=""
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="" id="" placeholder='Type your name..' onChange={(e)=>setName(e.target.value)}/> <br /><br />
            <input type="email" name="" id="" placeholder='Type your email...' onChange={(e)=>setEmail(e.target.value)}/> <br /><br />
            <input type="password" name="" id="" placeholder='Type your password..' onChange={(e)=>setPassword(e.target.value)}/> <br /><br />
            <textarea name="" id="" placeholder='Enter address' onChange={(e)=>setAddress(e.target.value)}></textarea> <br /><br />    
            <select value={location} name="" id="" onChange={(e)=>setLocation(e.target.value)}>
                <option value="">Select location</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
            </select> <br /><br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Task1