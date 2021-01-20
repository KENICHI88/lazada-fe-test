import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import ProductDetailMainInfoContainer from './Sections/ProductDetailMainInfoContainer';
import ProductDetailBody from './Sections/ProductDetailBody';


import LazyLoad from 'react-lazyload';

import {useParams} from 'react-router-dom';

import Breadcrumb from '../../components/Common/Breadcrumb/Breadcrumb';

import {
  setProductMainInfo,
  setProductReviews,
  setProductQA,
  setProductSponsor,
  setProductAlsoLike,
} from '../../redux/actions/product.actions';

import {
  requestProduct,
  requestProductReview,
  requestProductQA,
  requestProductSponsorProducts,
  requestProductAlsoLikeProducts,
} from '../../services/productService';

const ProductContainer = (props) => {
  const dispatch = useDispatch();
  const {slugProduct} = useParams();
  
  useEffect(() => {
    window.document.title = 'Detail page'
    const listRequest = [requestProduct, requestProductReview, requestProductQA, requestProductSponsorProducts, requestProductAlsoLikeProducts];
    
    const requestList = async() => {
      Promise.all(listRequest.map(x => {
        return x();
      })).then(values => {
        if(values) {
          window.document.title = values[0].data.data.itemTitle;
          
          dispatch(setProductMainInfo(values[0].data));
          dispatch(setProductReviews(values[1].data));
          dispatch(setProductQA(values[2].data));
          dispatch(setProductSponsor(values[3].data));
          dispatch(setProductAlsoLike(values[4].data));
        }
        window.scrollTo(0, 0);
      })
      .catch(e => {
        console.log(e);
        return Promise.reject(e);
      });
    }
    requestList();
  },[dispatch, slugProduct])
  
  return (
    <div className="inner-container product-page">
      <h1>Product page</h1>
      <Breadcrumb />
      <ProductDetailMainInfoContainer slugProduct={slugProduct} />
      <LazyLoad >
        <ProductDetailBody slugProduct={slugProduct} />
      </LazyLoad>
    </div>
  );
}

export default ProductContainer;
