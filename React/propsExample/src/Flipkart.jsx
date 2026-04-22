import React from 'react'
import Product from './Product'
import image from '../src/headphone.webp'
const Flipkart = () => {
    const arr=[
        {
        Image:image,
        name:"Headphone",
        price:"1200",
        },
        {
        Image:image,
        name:"Headphone",
        price:"1200",
        },
    ]
  return (
    <Product data={arr}/>
  )
}

export default Flipkart