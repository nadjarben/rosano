import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import product from "./product";
import cart from "./cart";
import app from "./app";
import checkout from "./checkout";
import admin from "./admin";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["checkout", "cart", "admin"],
  blacklist: ["product", "app"],
};


const rootReducer = combineReducers({
  product,
  cart,
  app,
  checkout,
  admin
});

export default persistReducer(persistConfig, rootReducer);
