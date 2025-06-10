import React from 'react'
import "./Product.css";
import { Button } from '@mui/material';

function Product(props) {
  return (
    <div className='product'>
        <div className="product__info">
            <p>{props.title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{props.price}</strong>
            </p>
            <div className="product__rating">
              {Array(props.rating).fill().map((_, i) => (
                <p key={i}>⭐</p>
              ))}
            </div>
        </div>
        <img src={props.image} alt='' /> 
        <button>Add to Cart</button>
    </div>
  )
}

export default Product