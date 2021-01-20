import {
  PRODUCT_SET_INFO,
  PRODUCT_SET_REVIEWS,
  PRODUCT_SET_QA,
  PRODUCT_SET_SPONSOR,
  PRODUCT_SET_ALSOLIKE,
} from '../types/product.types';


const INITIAL_STATE = {
  mainInfor : {
    "itemId": null,
    "itemTitle": "",
    "itemGallery": [],
    "currency": "₫",
    "itemPrice": "0",
    "itemDiscount": "0",
    "itemRatingScore": 0,
    "itemReviews": 0,
    "itemDiscountPrice": "0",
    "itemContentHighlight" : "",
    "itemSpecification": {
      "title" : "",
      "data" : []
    },
  },
  reviews: {},
  qa : {},
  sponsorProducts : {},
  alsoLikeProducts : {},
}

const productReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case PRODUCT_SET_INFO:
      return {...state, mainInfor : action.payload};
    
    case PRODUCT_SET_REVIEWS:
      return {...state, reviews: action.payload};
    
    case PRODUCT_SET_QA:
      return {...state, qa: action.payload};
    
    case PRODUCT_SET_SPONSOR:
      return {...state, sponsorProducts: action.payload};
      
    case PRODUCT_SET_ALSOLIKE:
      return {...state, alsoLikeProducts: action.payload};
    
    default:
      return state;
  }
}


export default productReducer;
