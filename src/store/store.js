import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from './reducers/cart';

const middleware = [];

const isDevtools =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware);

export default createStore(reducer, isDevtools);