import React,{useState} from 'react'
import UseRef from './useRef'
import UncontrolledForm from './UncontrolledForm'

//-------------------------------------------------------input:text


// const App = () => {
//   let [name,setName]=useState("")
//   function handleChange(e){
//     console.log(e);
//     setName(e.target.value)
    
//   }
//   return (
//     <div>
//       <input type="text" name="" id="" value={name} onChange={handleChange}  placeholder='Type your name' />
//       <p>Name: <b>{name}</b></p>
//     </div>
//   )
// }

// export default App

//--------------------------------------------------------Textarea

// const App = () => {
//   let [message,setMessage]=useState("")
//   function handleChange(e){
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.value);
//     setMessage(e.target.value)
//   }
//   return (
//     <div>
//       <textarea name="" id="" value={message} onChange={handleChange}></textarea>
//       <p>Message: <b>{message}</b></p>
//     </div>
//   )
// }

// export default App


//---------------------------------------------Dropdown

// const App = () => {
//   const [item,setItem]=useState("")
//   function handleChange(e){
//     console.log(e.target.value);
//     setItem(e.target.value)
//   }
//   return (
//     <div>
//        <select value={item} name="" id="" onChange={handleChange}>
//           <option value="">Select Option</option>
//           <option value="Pizza">Pizza</option>
//           <option value="Burger">Burger</option>
//           <option value="Ice Cream">Ice Cream</option>
//        </select>
//        <p>Selected Item is: <b>{item}</b></p>
//     </div>
//   )
// }

// export default App


//-----------------------------------Checkbox

// const App = () => {
//   const [isChecked,setIsChecked]=useState(false)
//   function handleChange(e){
//     console.log(e);
//     console.log(e.target.checked);
//     setIsChecked(e.target.checked);
    
//   }
//   return (
//     <div>
//       <input type="checkbox" name="" id="" checked={isChecked} onChange={handleChange}/> 3 years bond
//     </div>
//   )
// }

// export default App


//----------------------------------------Radio


// const App = () => {
//   let [gender,setGender]=useState("")
//   function handleRadio(e){
//     console.log(e.target.checked,"for",e.target.value);
//     setGender(e.target.value)
    
//   }
//   return (
//     <div>
//       <input type="radio" name="" id="" value="male" checked={gender==="male"} onChange={handleRadio}/>Male
//       <input type="radio" name="" id="" value="female" checked={gender==="female"} onChange={handleRadio}/>Female
//     </div>
//   )
// }

// export default App


//--------------------------------------------Multiple Checkbox

// const App = () => {
//   const [hobbies,setHobbies]=useState([])
//   function handleChange(e){
//     let value=e.target.value
//     let checked=e.target.checked
//     if(checked){
//       setHobbies([...hobbies,value])
//     }
//     else{
//       setHobbies(hobbies.filter((ele)=>{
//           return ele!==value
//       }))
//     }
//   }
//   return (
//     <div>
//       <input type="checkbox" name="" id="" onChange={handleChange} value="Football"/> Football
//       <input type="checkbox" name="" id="" onChange={handleChange} value="Baseball"/> Baseball
//       <input type="checkbox" name="" id="" onChange={handleChange} value="Cricket"/> Cricket
//       <p>Hobbies: <b>{hobbies}</b></p>
//     </div>
//   )
// }

// export default App



//--------------------------------------------------


// const App = () => {
//   const [formData,setFormData]=useState({
//     name:"",
//     message:"",
//     city:"",
//     gender:"",
//     hobbies:[]
//   })
//   function handleStudentsMind(e){
//       let value=e.target.value
//       let checked=e.target.checked
//       let name=e.target.name
//       let type=e.target.type
//       console.log(value);
//       console.log(checked);
//       console.log(name);
//       console.log(type);

//       let updatedData={...formData}

//       if(type==='checkbox'){
//         if(checked){
//           updatedData.hobbies=formData.hobbies.concat(value)
//         }
//         else{
//           updatedData.hobbies=formData.hobbies.filter((item)=>{
//             return item!=value
//           })
//         }
//       }
//       else{
//         updatedData[name]=value
//       }
//       setFormData(updatedData)
//   }
//   function submit(e){
//     e.preventDefault()
//     console.log(formData);
    
//   }
//   return (
//     <div className=''>
//       <form action="" onSubmit={submit} className='w-[40%] mx-auto mt-25 border-2 p-4 rounded-2xl'>
//         <label htmlFor="name">Name:</label>
//         <input className='w-full border rounded p-2 mb-4.5' type="text" name="name" id="name" value={formData.name} placeholder='Enter name..' onChange={handleStudentsMind}/> <br />
//         <label htmlFor="message">Message:</label>
//         <textarea className='w-full border rounded p-2' name="message" id="message" value={formData.message} onChange={handleStudentsMind} placeholder='Enter message'></textarea> <br /><br />
//         <label htmlFor="city">City:</label>
//         <select className='w-full border' name="city" id="city" onChange={handleStudentsMind}>
//           <option value="">Select City</option>
//           <option value="Chennai">Chennai</option>
//           <option value="Bangalore">Bangalore</option>
//         </select> <br /><br /> <label htmlFor="gender">Gender: </label> <br />
//         <input type="radio" name="gender" id="gender" onChange={handleStudentsMind} value="male" checked={formData.gender==='male'}/>Male &nbsp;&nbsp;
//         <input type="radio" name="gender" id="gender" onChange={handleStudentsMind} value="female" checked={formData.gender==='female'}/>Female <br /><br />
      
//         <label htmlFor="hobbies">Hobbies</label> <br />
//         <input type="checkbox" name="" id="hobbies" value="Travelling" onChange={handleStudentsMind}/>Travelling &nbsp;
//         <input type="checkbox" name="" id="hobbies" value="Painting" onChange={handleStudentsMind}/>Painting &nbsp;&nbsp;
//         <input type="checkbox" name="" id="hobbies" value="Dancing" onChange={handleStudentsMind}/>Dancing
//         <br /><br />
//         <button className='w-full bg-green-800 text-white p-2 rounded'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App


//=======================================================useRef

// const App = () => {
//   return (
//     <div>
//       <UseRef/>
//     </div>
//   )
// }

// export default App



//------------------------------------------------Uncontrolled Form


const App = () => {
  return (
    <UncontrolledForm/>
  )
}

export default App