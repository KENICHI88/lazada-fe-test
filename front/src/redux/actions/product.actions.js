import {
  PRODUCT_SET_INFO,
  PRODUCT_SET_REVIEWS,
  PRODUCT_SET_QA,
  PRODUCT_SET_SPONSOR,
  PRODUCT_SET_ALSOLIKE,
} from '../types/product.types';

export const setProductMainInfo = (data) => ({
  type: PRODUCT_SET_INFO,
  payload: data
});

export const setProductReviews = (data) => ({
  type: PRODUCT_SET_REVIEWS,
  payload: data
});

export const setProductQA = (data) => ({
  type: PRODUCT_SET_QA,
  payload: data
});

export const setProductSponsor = (data) => ({
  type: PRODUCT_SET_SPONSOR,
  payload: data
});
export const setProductAlsoLike = (data) => ({
  type: PRODUCT_SET_ALSOLIKE,
  payload: data
});
