import React from 'react'
import image from './image.png'
const Section = () => {
  return (
    <div style={{height:"780px",border:"2px solid", textAlign:"center"}}>
        <img src={image} height={"500px"} style={{marginTop:"30px"}} alt="" srcset="" />
        <h2><u>Name of cricketer:</u> MS Dhoni</h2>
        <h3><u>Total number of matches played:</u> 500+</h3>
        <button style={{padding:"10px 20px", fontSize:"16px",border:"none",borderRadius:"12px",backgroundColor:"skyblue"}}>Follow</button>
    </div>
  )
}

export default Section