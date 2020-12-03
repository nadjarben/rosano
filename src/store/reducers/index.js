import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import product from "./product";
import cart from "./cart";
import app from "./app";
import checkout from "./checkout";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["checkout", "cart", "app"],
  blacklist: ["product"],
};


const rootReducer = combineReducers({
  product,
  cart,
  app,
  checkout
});

export default persistReducer(persistConfig, rootReducer);
