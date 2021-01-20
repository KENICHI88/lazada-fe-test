import React from 'react';

const ProductDetailMainInfoDetail = (props) => {
  const {
    itemTitle,
    itemPrice,
    itemDiscount,
    itemDiscountPrice,
    currency,
  } = props;
  return (
    <div className="product-detail__short-infor">
      <h1 className="product-detail__title">{itemTitle}</h1>
      <div className="product-detail__short-infor__price">
        <div className="product-detail__short-infor__price__highlight product__price-orange">{currency} {itemDiscountPrice}</div>
        <div className="product-detail__short-infor__price__origin product__price-size_xs">
          <span className="product__price-gray product__price-linethrough">{currency} {itemPrice}</span>{' '}
          <span className="product-detail__short-infor__price__discount-percent">{itemDiscount}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailMainInfoDetail;
