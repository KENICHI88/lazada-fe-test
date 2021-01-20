import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import ProductDetailMainInfoDetail from '../../../components/Shared/Product/ProductDetail/ProductDetailMainInfoDetail';

import ProductDetailGallery from '../../../components/Shared/Product/ProductDetail/ProductDetailGallery';
import ProductDetailDeliverySeller from '../../../components/Shared/Product/ProductDetail/ProductDetailDeliverySeller';

import '../../../components/Shared/Product/ProductDetail/style/ProductDetailMainInformation.scss';

const ProductDetailMainInfoContainer = (props) => {
  const mainInfo = useSelector(state => state.product.mainInfor.data);
  
  if(mainInfo) {
    return (
      <div className="product-detail__main-information">
        <div className="product-detail__main-information__wrapper">
          <ProductDetailGallery />
          <ProductDetailMainInfoDetail 
            itemTitle={mainInfo.itemTitle}
            itemPrice={mainInfo.itemPrice}
            itemDiscount={mainInfo.itemDiscount}
            itemDiscountPrice={mainInfo.itemDiscountPrice}
            currency={mainInfo.currency}
          />
          <ProductDetailDeliverySeller />
        </div>
        
      </div>
    );
  } else {
    return null;
  }
  
}

export default ProductDetailMainInfoContainer;
