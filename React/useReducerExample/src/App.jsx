import React, { useReducer } from 'react'

function reducer(state, action){
  switch (action.type) {
    case "INCREMENT":
      return state+1;
    case "DECREMENT":
      return  state >0 ? state-1: state;
    case "RESET":
      return 0; 
  }
}
const App = () => {

  let [state, dispatch] = useReducer(reducer, 0)
  return (
    <div style={{textAlign:"center", border:"1px solid grey", width:"350px", padding:"10px 10px", margin:"100px auto",height:"130px", borderRadius:"10px", backgroundColor:"#eee"}}>
      <h1>Count: {state}</h1>
      <button style={{marginRight:"10px", border:"none",borderRadius:"8px", padding:"8px 16px", backgroundColor:"green", color:"white"}} 
      onClick={()=>{dispatch({type:"INCREMENT"})}}>Increment</button>
      <button style={{marginRight:"10px", border:"none",borderRadius:"8px", padding:"8px 16px", backgroundColor:"orange", color:"white"}} 
      onClick={()=>{dispatch({type:"DECREMENT"})}}>Decrement</button>
      <button style={{marginRight:"10px", border:"none",borderRadius:"8px", padding:"8px 16px", backgroundColor:"maroon", color:"white"}} 
      onClick={()=>{dispatch({type:"RESET"})}}>Reset</button>
    </div>
  )
}

export default App


