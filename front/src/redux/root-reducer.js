import { combineReducers } from 'redux';

import categoryReducer from './reducers/category.reducer';
import productReducer from './reducers/product.reducer';

export default combineReducers({
  category : categoryReducer,
  product : productReducer,
});
