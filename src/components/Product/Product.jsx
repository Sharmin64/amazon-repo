import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

import "./Product.css"
const Product = (props) => {
const defaultImage="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg"
  const { img, name, seller, ratings, price } = props.product;
  const handleAddToCart=props.handleAddToCart
  return (
    <div className='product'>
      <img src={img?img:defaultImage} alt="" />
      <div className="product-info">
      <h5 className='product-name'>{name}</h5>
      <p>Price: ${price}</p>
      <p>Manufacturer:{seller}</p>
      <p>Rating:{ratings} Stars</p>
      </div>
      <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
        Add to Cart
        <FontAwesomeIcon icon={faShoppingCart} />
       
      </button>
    </div>
  );
};

export default Product;