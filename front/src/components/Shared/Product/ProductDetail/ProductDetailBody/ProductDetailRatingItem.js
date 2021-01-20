import React from 'react';

import RatingStar from '../../../RatingStar/RatingStar';

import ProgressBar from '../../../ProcessBar/ProgressBar';


const ProductDetailRatingItem = (props) => {
  const {star, count, total} = props;
  let percent = parseInt(count)/parseInt(total)*100;
  return (
    <div className="product-detail__rating-item">
      <RatingStar average={star}  inlineClasses="size-xs"/>
      <ProgressBar value={percent+"%"} />
      <span className="percent">{count}</span>
    </div>
  );
}

export default ProductDetailRatingItem;
