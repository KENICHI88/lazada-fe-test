import React from 'react';

import ProductDetailSponsorProducts from './ProductDetailSponsorProducts';

const ProductDetailAds = (props) => {
  return (
    <div className="product-detail__ads">
      <ProductDetailSponsorProducts {...props}/>
    </div>
  );
}

export default ProductDetailAds;
