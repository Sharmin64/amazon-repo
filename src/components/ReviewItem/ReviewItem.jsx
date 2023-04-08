import React from 'react';
import "./ReviewItem.css"

const ReviewItem = ({  product }) => {
  const {id,img, name, quantity,price} = product
  return (
    <div className='review-item'>
      <h3>review Item</h3>
    </div>
  );
};

export default ReviewItem;