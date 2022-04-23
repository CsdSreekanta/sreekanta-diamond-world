import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
   const {product, handleAddToCart} =props;
  const{img, name, price, seller, ratings} =product


 
    
    return (
        
        <div className='product'>
            <div>
                    <img src={img} alt="" />
                    <p className='product-name'>{name}</p>
                    <p className='product-price'>Price:${price}</p>
                    <p><small>Manufacturer:{seller}</small></p>
                    <p><small>Rating:{ratings}</small></p>
            </div>
            <button onClick={() =>handleAddToCart(product)} className='button-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>

    );
};

export default Product;