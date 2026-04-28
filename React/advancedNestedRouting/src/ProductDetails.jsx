import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import items from './Data'

const ProductDetails = () => {
    let obj=useParams()
    console.log(obj);
    let {id}=obj
    console.log(id);

    let actualData=items.find((item)=>{
        return item.id===Number(id)
    })
    
    
    function handleClick(){
        alert("Item added to cart");
        
    }
    
  return (
    <div>
        <h1>Product Details Page</h1> <hr />
        <h1>Name: {actualData.name}</h1>
        <h2>Brand: {actualData.brand}</h2>
        <h3>Price: {actualData.price}</h3>
        <button onClick={handleClick}>Add to cart</button>
    </div>
  )
}

export default ProductDetails