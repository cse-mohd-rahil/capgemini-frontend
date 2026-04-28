import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import items from './Data'


//---------------------------------------local data

// const ProductDetails = () => {
//     let obj=useParams()
//     console.log(obj);
//     let {id}=obj
//     console.log(id);

//     let actualData=items.find((item)=>{
//         return item.id===Number(id)
//     })
    
    
//     function handleClick(){
//         alert("Item added to cart");
        
//     }
    
//   return (
//     <div>
//         <h1>Product Details Page</h1> <hr />
//         <h1>Name: {actualData.name}</h1>
//         <h2>Brand: {actualData.brand}</h2>
//         <h3>Price: {actualData.price}</h3>
//         <button onClick={handleClick}>Add to cart</button>
//     </div>
//   )
// }

// export default ProductDetails


// --------------------------------------Fetched API data


const ProductDetails = () => {
  let {id}=useParams()
  console.log(id);

  let [actualData,setActualData]=useState({})
  async function fetchData(){
    try{
        let res=await fetch(`https://fakestoreapi.com/products/${id}`)
        let data=await res.json()
        setActualData(data)
    }catch(err){
        console.log(err);
    }
  }

  useEffect(()=>{
    fetchData()
  },[id])
  
  return (
    <div style={{width:"400px",textAlign:"center",margin:"50px auto",backgroundColor:"#eec",padding:"20px",boxShadow:"1px 1px 18px 2px lightcoral"}}>
        <p>{actualData=== null ? "loading":"loaded"}</p>
        <h1>Category: {actualData.category}</h1>
        <img height={"200px"} src={actualData.image} alt="" />
        <h3>{actualData.title}</h3>
        <h4>Price: {actualData.price}</h4>
        <button onClick={()=>alert("Item added to cart")} style={{padding:"10px",borderRadius:"10px",border:"none",backgroundColor:"coral",color:"white",cursor:"pointer"}}>Add to Cart</button>
        
    </div>
  )
}

export default ProductDetails