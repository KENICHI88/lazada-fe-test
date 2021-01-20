import React from 'react';
import {useSelector} from 'react-redux';

import CategoryProductItem from '../../../../../Pages/Category/CateogryProduct/CategoryProductItem';

const ProductDetailSponsorProducts = (props) => {
  const sponsorProducts = useSelector(state => state.product.sponsorProducts);
  
  return sponsorProducts ? (
    <div className="sponsor-products">
      <div className="sponsor-products__body">
        {sponsorProducts && sponsorProducts.data && sponsorProducts.data.map((item, ind) => (
          <CategoryProductItem 
            key={`sponsor-product-${item.itemId}`}
            data={item}
          />
        ))}
      </div>
    </div>
  ) : null ;
}

export default ProductDetailSponsorProducts;
