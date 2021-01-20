import {
  CATEGORY_SET_PRODUCT_LIST,
} from '../types/category.types';

export const setCategoryProductList = (data) => ({
  type: CATEGORY_SET_PRODUCT_LIST,
  payload: data
});
