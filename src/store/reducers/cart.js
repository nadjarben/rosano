import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
  UPDATE_PRICE,
} from '../actions/types'
import { addItemToCart, removeItemFromCart } from './cart.utils'

const INITIAL_STATE = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        totalItems: state.cartItems.reduce(
          (prevValue, currentValue) => prevValue + currentValue.quantity,
          1
        ),
        totalPrice: state.totalPrice + action.payload.realPrice,
      }
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - action.payload.realPrice,
      }
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload._id
        ),
        totalItems: state.totalItems - action.payload.quantity,
        totalPrice:
          state.totalPrice - action.payload.realPrice * action.payload.quantity,
      }
    case UPDATE_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      }
    default:
      return state
  }
}

export default cartReducer
