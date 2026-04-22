import React, { useRef,useState } from 'react'

// const UseRef = () => {
//     let nameRef=useRef()
//     function login(e){
//         e.preventDefault()
//         nameRef.current.focus()
//     }
//   return (
//     <div>
//         <form action="" onSubmit={login}>
//             <input type="text" ref={nameRef} name="" id="" placeholder='Enter name..'/> <br /><br />
//             <button>Login</button>
//         </form>
//     </div>
//   )
// }

// export default UseRef

const UseRef = () => {
    let countRef=useRef(0)
    const [stateCount,setStateCount]=useState(0)
    function handleState(){
        setStateCount(stateCount+1)
    }
    function handleRef(){
        countRef.current++;
        console.log(countRef.current);
    }
  return (
    <div>
        <p>CountRef Value: <b>{countRef.current}</b></p>
        <p>State count value: <b>{stateCount}</b></p>

        <button onClick={handleState}>Count Button</button>
        <button onClick={handleRef}>Ref button</button>
    </div>
  )
}

export default UseRef