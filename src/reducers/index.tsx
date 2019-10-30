import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productReducer from './productsReducer';
import productDetailReducer from './productDetailReducer'
const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  productDetail: productDetailReducer
});

export default rootReducer;
