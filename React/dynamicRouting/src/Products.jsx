import React,{useEffect, useState} from 'react'
import items from './Data'
import {Link} from 'react-router-dom'
import { act } from 'react'

//--------------------------------------------------for local data

// const Products = () => {
//   return (
//     <div style={{display:"flex",justifyContent:"space-around",width:"80%",margin:"50px auto"}}>
//         {items.map((item)=>{
//             return (
//                 <div key={item.id} style={{backgroundColor:"#eee",padding:"30px",textAlign:"center"}}>
//                     <h1>Name: {item.name}</h1>
//                     <h2>Brand: {item.brand}</h2>
//                     <h3>Price: {item.price}</h3>
//                     <Link to={`/product/${item.id}`}>View Details</Link>
//                 </div>
//             )
//         })}
//     </div>
//   )
// }

// export default Products


//--------------------------------------for API fetched data


const Products = () => {

  let [data,setData]=useState([])

  async function fetchData(){
    try{
        let res=await fetch('https://fakestoreapi.com/products')
        let actualData=await res.json()
        setData(actualData)   
        console.log(actualData);
             
    }
    catch(err){
        console.log(err);
    }
  } 

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
        {data.map((el)=>{
            return(
                <div key={el.id}>
                    <h1>Category: {el.category}</h1>
                    <p>Title: <b>{el.title}</b></p>
                    <Link to={`/product/${el.id}`}>View Details</Link>
                    <hr />
                </div>
            )
        })}
    </div>
  )
}

export default Products