import React from 'react'
import items from './Data'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",width:"80%",margin:"50px auto"}}>
      {items.map((item)=>{
          return(
            <div key={item.id} style={{backgroundColor:"lightcoral",padding:"30px",color:"white"}}>
                <h2>Name: {item.name}</h2>
                <h3>Brand: {item.brand}</h3>
                <h4>Price: {item.price}</h4>
                <Link to={`product/${item.id}`}>View details</Link>
            </div>
          )
      })}
    </div>
  )
}

export default Products