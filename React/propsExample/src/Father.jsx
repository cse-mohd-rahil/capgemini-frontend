import React from 'react'
import Child from './Child'
import LPUimage from './image.png'
const Father = () => {
  const trainers=["Hari","Sushant","Kalam"]
  function greeting(){
    alert("This is a function passed in prop")
  }
  return (
        // <Child lunch="biryani" pocketMoney={1000}/>  

        // <Child data={{college:"LPU",city:"Phagwara",state:"Punjab",pincode:144411}}/>

      // <Child collegeName="Lovely Professional University" image={LPUimage}/>

      // <Child bell={greeting}/>


      // <Child support={trainers}/>
    <>
      <Child trainer="Hari" rating="2"/>
      <Child trainer="Sushant" rating="3.5"/>
      <Child trainer="Kalam" rating="5"/>
    </>
  )
}

export default Father