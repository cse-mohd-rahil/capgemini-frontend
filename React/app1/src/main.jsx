import { createRoot } from 'react-dom/client'
import React from 'react'
import Lpu from './Lpu'
import Rahil from './Rahil'
import YouthVibe from './YouthVibe'
import Family from './Family'
import Classroom from './Classroom'
import App from './App'

// createRoot(document.getElementById('root')).render(
//   React.createElement("div",null,React.createElement("h1",null,1),React.createElement("h2",null,2),React.createElement("p",null,3))
// )

// createRoot(document.getElementById('root')).render(
//   <div>
//     <h1>This is h1</h1>
//     <h2>This is h2</h2>
//     <p>This is p</p>
//   </div>
// )

createRoot(document.getElementById("root")).render(
      // <div>
      //   <Lpu></Lpu>
      //   <Rahil></Rahil>
      //   <YouthVibe></YouthVibe>
      // </div>


      // <Family/>


      // <Classroom/>

      <App/>

)

