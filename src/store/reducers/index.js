import { combineReducers } from "redux";
import product from "./product";
import cart from "./cart";
import app from "./app";
import checkout from "./checkout";


const rootReducer = combineReducers({
  product,
  cart,
  app,
  checkout
});

export default rootReducer;
