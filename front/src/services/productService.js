import axios from 'axios';

import {HOST,
  METHOD_DEFAULT,
  REQUEST_PRODUCT_URL,
  REQUEST_LIST_URL,
} from '../constants/settingContants';


export const requestProduct = () => {
  const url = HOST + REQUEST_PRODUCT_URL + REQUEST_LIST_URL;
  return axios({
    method: METHOD_DEFAULT,
    url: url,
  })
}

export const requestProductReview = () => {
  const url = HOST + REQUEST_PRODUCT_URL + '/getReview';
  return axios({
    method: METHOD_DEFAULT,
    url: url,
  })
}

export const requestProductQA = () => {
  const url = HOST + REQUEST_PRODUCT_URL + '/getQA';
  return axios({
    method: METHOD_DEFAULT,
    url: url,
  })
}

export const requestProductSponsorProducts = () => {
  const url = HOST + REQUEST_PRODUCT_URL + '/getSponsorProducts';
  return axios({
    method: METHOD_DEFAULT,
    url: url,
  })
}

export const requestProductAlsoLikeProducts = () => {
  const url = HOST + REQUEST_PRODUCT_URL + '/getAlsoLike';
  return axios({
    method: METHOD_DEFAULT,
    url: url,
  })
}
