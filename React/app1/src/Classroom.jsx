import React from 'react'
import Trainer from './Trainer'
import Dumber from './Dumber'
import Topper from './Topper'
const Classroom = () => {
  return (
    <div style={{backgroundColor:"#eee",textAlign:"center", border:"1px solid", padding:"15px", width:"500px", height:"200px",margin:"50px auto"}}>
        <h1>906A CSE Class Room</h1>
        <Trainer></Trainer>
        <Topper></Topper>
        <Dumber></Dumber>
    </div>
  )
}

export default Classroom