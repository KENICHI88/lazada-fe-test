import React from 'react';
import {useSelector} from 'react-redux';

import ProductDetailSection from '../../../components/Shared/Product/ProductDetail/ProductDetailSection';

import ProductDetailDetailDescription from '../../../components/Shared/Product/ProductDetail/ProductDetailBody/ProductDetailDetailDescription';

import ProductDetailSponsorProducts from '../../../components/Shared/Product/ProductDetail/ProductDetailBody/ProductDetailSponsorProducts';


const ProductDetailBody = (props) => {
  const mainInfo = useSelector(state => state.product.mainInfor);
  
  return (
    <div className="product-detail-body">
      
      <ProductDetailDetailDescription />
      <ProductDetailSection title="Sponsored Products">
        <ProductDetailSponsorProducts />
      </ProductDetailSection>
    </div>
  );
}

export default ProductDetailBody;
