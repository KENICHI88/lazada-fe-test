import {
  CATEGORY_SET_PRODUCT_LIST,
} from '../types/category.types';


const INITIAL_STATE = {
  data : [],
}

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CATEGORY_SET_PRODUCT_LIST:
      return {...state, data : action.payload};
    default:
      return state;
  }
}


export default categoryReducer;
