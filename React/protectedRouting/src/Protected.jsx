import React from 'react'
import {Navigate} from "react-router-dom"
const Protected = (prop) => {
    let {children}=prop
    let data=JSON.parse(localStorage.getItem("currentUser"))
    if(!data){
        return <Navigate to="/login"></Navigate>
    }
    return children
 
}

export default Protected