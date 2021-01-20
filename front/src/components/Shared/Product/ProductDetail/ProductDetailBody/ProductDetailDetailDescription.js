import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import LazyLoad from 'react-lazyload';
import PlaceHolderLoading from '../../../../Common/PlaceHolderLoading/PlaceHolderLoading';

import ProductDetailHighLight from './ProductDetailHighLight';

import ProductDetailContent from './ProductDetailContent';
import ProductDetailSpecification from './ProductDetailSpecification';
import ProductDetailRatingSection from './ProductDetailRatingSection';
import ProductDetailReviewSection from './ProductDetailReviewSection';
import ProductDetailQASection from './ProductDetailQASection';

import ProductDetailSection from '../ProductDetailSection';

import CategoryListProduct from '../../../../../Pages/Category/CategoryListProduct';

import '../style/ProductDetailContent.scss';

import {
  requestProductReview,
  requestProductQA,
} from '../../../../../services/productService';

import {
  setProductReviews,
  setProductQA,
} from '../../../../../redux/actions/product.actions';

export default function ProductDetailDetailDescription(props) {
  const dispatch = useDispatch();
  
  const mainInfo = useSelector(state => state.product.mainInfor.data);
  const reviews = useSelector(state => state.product.reviews);
  const qaList = useSelector(state => state.product.qa);
  const sponsorProducts = useSelector(state => state.product.sponsorProducts);
  const alsoLikeProducts = useSelector(state => state.product.alsoLikeProducts);
  
  const requestReview = (paging) => {
    requestProductReview().then(result => {
      dispatch(setProductReviews(result.data));
    }).catch(error => {
      console.log(error);
    })
  }
  
  const requestQA = (paging) => {
    requestProductQA().then(result => {
      dispatch(setProductQA(result.data));
    }).catch(error => {
      console.log(error);
    })
  }
  
  
  return (mainInfo) ? (
    <div className="product-detail__description">
      <div className="product-detail__description__container">
        <ProductDetailSection title={`Product detail of ${mainInfo.itemTitle}`}>
          <ProductDetailHighLight content={mainInfo.itemContentHighlight} />
          <ProductDetailContent content={mainInfo.itemContentDetail} />
          <ProductDetailSpecification content={mainInfo.itemSpecification} />
        </ProductDetailSection>
        <PlaceHolderLoading >
          {reviews && (
          <ProductDetailSection title={`Ratings & Reviews of ${mainInfo.itemTitle}`}>
            <ProductDetailRatingSection />
            <ProductDetailReviewSection data={reviews} handlePagingOnclick={requestReview} />
          </ProductDetailSection>)}
        </PlaceHolderLoading>
        <PlaceHolderLoading >
          {qaList && (<ProductDetailSection title={`Questions about this product (${qaList.length})`}>
            <ProductDetailQASection data={qaList} handlePagingOnclick={requestQA} />
          </ProductDetailSection>)}
        </PlaceHolderLoading>
        <PlaceHolderLoading >
          
          {qaList && (<ProductDetailSection title={`From The Same Store`}>
            <CategoryListProduct dataList={alsoLikeProducts} />
          </ProductDetailSection>)}
          
        </PlaceHolderLoading>
        
        
        
        
        
        
        
      </div>
    </div>
  ) : null;
}
