import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

import {generateURLFromTitle} from '../../../helpers/utils';

import {CategoryProductItemStyle} from '../style/CategoryProductItemStyle';

import LazyImage from '../../../components/Common/LazyImage/LazyImage';

const CategoryProductItem = (props) => {
  const { url } = useRouteMatch();
  const {
    itemTitle,
    itemDiscount,
    itemDiscountPrice,
    currency,
    itemPrice,
    itemImg,
    itemId,
  } = props.data;
  const idTitle = generateURLFromTitle(`${itemTitle}-${itemId}`).toLowerCase();
  return (
    <CategoryProductItemStyle >
      <div className="product-item__container">
        <Link title={itemTitle} to={{pathname: `/product/${idTitle}`}}>
          <div className="product-item__media">
            <LazyImage 
              src={itemImg} 
              alt={itemTitle}
              effect={"opacity"}
              className="product0-item__media-image" 
            />
          </div>
          <div className="product-item__content">
            <div className="product-item__name">
              {itemTitle}
            </div>
            <div className="product-item__price">
              <span className="currency">{currency}</span> 
              <span className="price">{itemPrice}</span>
            </div>
            <div className="product-item__discount">
              <span className="currency">{currency}</span> 
              <span className="discount">{itemDiscountPrice}</span> 
              <span className="discount-percent">{itemDiscount}</span>
            </div>
            <div className="product-item__bottom">
              <div className="product-item__rate">
                
              </div>
              <div className="product-item__location">
              
              </div>
            </div>
          </div>
        </Link>
      </div>
    </CategoryProductItemStyle>
  );
}

export default CategoryProductItem;
