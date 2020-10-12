import { CHANGE_CATEGORY, TOGGLE_CART, CHANGE_LANGUAGE } from "../actions/types";

export const initialState = {
  category: 'package',
  cartOpen: false,
  language: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
      case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
      case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
      default:
      return state;
  }
}
