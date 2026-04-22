import React from 'react'

const Product = (props) => {
  console.log(props.data);
  return (
    <div>
      {props.data.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.Image} alt={item.name} width="100" />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Product