import React from 'react';

import './style/ProductDetailSection.scss';

const ProductDetailSection = (props) => {
  const {
    title, children
  } = props;
  return (
    <div className="product-detail__section">
      <div className="product-detail__section__title">{title}</div>
      <div className="product-detail__section__body">{children}</div>
    </div>
  );
}

export default ProductDetailSection;
