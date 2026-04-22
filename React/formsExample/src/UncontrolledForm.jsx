import React, { useRef } from 'react'

const UncontrolledForm = () => {
    let nameRef=useRef()
    let emailRef=useRef()
    function submit(e){
        e.preventDefault()
        let name=nameRef.current.value
        let email=emailRef.current.value
        console.log(name);
        console.log(email);
        
    }
  return (
    <div>
        <form action="" onSubmit={submit}>
            <input type="text" name="" id="" placeholder='Type your name' ref={nameRef}/>
            <input type="email" name="" id="" placeholder='Type your email' ref={emailRef}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UncontrolledForm