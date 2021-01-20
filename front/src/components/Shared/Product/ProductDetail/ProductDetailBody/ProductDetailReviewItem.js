import React from 'react';

import RatingStar from '../../../RatingStar/RatingStar';

const ProductDetailReviewItem = (props) => {
  const {rating, user, comment, reviewDate, skuInfo} = props.data;
  return (
    <div className="review-item">
      <div className="review-item__container">
        <div className="review-item__date">{reviewDate}</div>
        <RatingStar average={rating} inlineClasses="size-xs"/>
        <div className="review-item__author">by {user}</div>
        <div className="review-item__review">{comment}</div>
        <div className="review-item__skuinfo">{skuInfo}</div>
      </div>
    </div>
  );
}

export default ProductDetailReviewItem;
