import React from 'react'
import './product.css'

function Product({title, id, image, price}) {
  return (
    <div className='ind-item'>
        <img src = {image} alt = 'plated food'/>
        <h4> {title} </h4>
        <p>{price}</p>
    </div>
  )
}

export default Product