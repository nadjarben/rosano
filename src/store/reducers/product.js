import { ON_FETCH_PRODUCT_STARTED, ON_FETCH_PRODUCT_SUCCEEDED, ON_FETCH_PRODUCT_FAILED } from "../actions/types";

export const initialState = {
  products: [],
  isLoading: false,
  errorMessage: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ON_FETCH_PRODUCT_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case ON_FETCH_PRODUCT_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        products: action.payload
      }; 
      case ON_FETCH_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };    
      default:
      return state;
  }
}
