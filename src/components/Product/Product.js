import React from 'react';
import './Product.css'

const Product = (props) => {
  const{img, name, price, seller, ratings} =props.product
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <p className='product-price'>Price:${price}</p>
            <p><small>Manufacturer:{seller}</small></p>
            <p><small>Rating:{ratings}</small></p>
        </div>
    );
};

export default Product;