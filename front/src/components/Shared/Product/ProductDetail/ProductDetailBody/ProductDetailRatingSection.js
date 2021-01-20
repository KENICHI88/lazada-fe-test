import React from 'react';

import RatingStar from '../../../RatingStar/RatingStar';

import ProductDetailRatingItem from './ProductDetailRatingItem';

const ProductDetailRatingSection = (props) => {
  return (
    <div className="product-detail__rating-section">
      <div className="product-detail__rating-section__main-rating">
        <div className="product-detail__rating-section__main-score">
          <span className="average">4.3</span>
          <span className="total">/5</span>
        </div>
        <RatingStar average="0.1" />
      </div>
      <div className="product-detail__rating-detail-rating">
        <ProductDetailRatingItem star="5" count="34"  total="50"/>
        <ProductDetailRatingItem star="4" count="4" total="50"/>
        <ProductDetailRatingItem star="3" count="8" total="50"/>
        <ProductDetailRatingItem star="2" count="0" total="50"/>
        <ProductDetailRatingItem star="1" count="4" total="50"/>
      </div>
    </div>
  );
}

export default ProductDetailRatingSection;
