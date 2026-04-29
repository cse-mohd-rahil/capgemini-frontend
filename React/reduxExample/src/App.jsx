import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const App = () => {
  let count = useSelector((state)=>{
    return state.count
  })
  /*useSelector() is a hook used to get the data or read the data from the store so it will accept callback function.
   Callback function accepts one parameter. That parameter is nothing but store automatically it comes from redux store */

  let dispatch = useDispatch()
  /*useDispatch() is a hook used to send the action objects */
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>{dispatch({type:"INCREMENT"})}}>Increment</button>
      <button onClick={()=>{dispatch({type:"DECREMENT"})}}>Decrement</button>
      <button onClick={()=>{dispatch({type:"RESET"})}}>Reset</button>
    </div>
  )
}

export default App
