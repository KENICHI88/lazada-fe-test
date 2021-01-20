import axios from 'axios';

import {HOST,
  METHOD_DEFAULT,
  REQUEST_CATEGORY_URL,
  REQUEST_LIST_URL,
} from '../constants/settingContants';


export const requestCategoryProductList = () => {
  const url = HOST + REQUEST_CATEGORY_URL + REQUEST_LIST_URL;
  return axios({
    method: METHOD_DEFAULT,
    url: url,
  })
}
