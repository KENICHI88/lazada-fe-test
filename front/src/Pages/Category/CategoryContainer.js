import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {CategoryContainerStyle} from './style/CategoryStyle';
import CategoryListProduct from './CategoryListProduct';

import Banner from '../../components/Common/Banner/Banner';

import {
  setCategoryProductList
} from '../../redux/actions/category.actions';

import {
  requestCategoryProductList
} from '../../services/categoryService';

import PlaceHolderLoading from '../../components/Common/PlaceHolderLoading/PlaceHolderLoading';

const CategoryContainer = () => {
  const dispatch = useDispatch();
  
  const productList = useSelector(state => state.category.data);
  
  useEffect(() => {
    window.document.title = 'Category page';
    
    requestCategoryProductList().then(data => {
      // requestCategoryProductList
      dispatch(setCategoryProductList(data.data));
    }).catch(e => {
      console.log(e);
    })
  }, [])
  return productList ? <CategoryContainerStyle>
  <Banner title={productList.title} subTitle={productList.subtitle} 
        bannerUrl={productList.bannerUrl}
      />
  <div className="inner-container">
    <div className="row">
      <PlaceHolderLoading >
        {productList && (<CategoryListProduct dataList={productList} />)}
      </PlaceHolderLoading>
    </div>
  </div>
</CategoryContainerStyle> : null;
}

export default CategoryContainer;
