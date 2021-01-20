import React from 'react';

import CategoryProductItem from './CateogryProduct/CategoryProductItem';

import {CategoryProductListStyle} from './style/CategoryProductListStyle';

const CategoryListProduct = (props) => {
  const {dataList} = props;
  return (
    <CategoryProductListStyle>
      {dataList && dataList.data && dataList.data.map((item, ind) => <CategoryProductItem key={`product-item-${ind}`} data={item} />)}
    </CategoryProductListStyle>
  );
}

export default CategoryListProduct;
