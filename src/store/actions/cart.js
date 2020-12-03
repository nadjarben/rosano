import {
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  UPDATE_PRICE,
  RESET_CART
} from './types'

export const addItem = (item) => async (dispatch) => {
  dispatch({
    type: ADD_ITEM,
    payload: item,
  })
}

export const clearItemFromCart = (item) => async (dispatch) => {
  dispatch({
    type: CLEAR_ITEM_FROM_CART,
    payload: item,
  })
}

export const removeItem = (item) => async (dispatch) => {
  dispatch({
    type: REMOVE_ITEM,
    payload: item,
  })
}

export const updatePrice = (price) => async (dispatch) => {
  dispatch({
    type: UPDATE_PRICE,
    payload: price,
  })
}

export const resetCart = () => async (dispatch) => {
  dispatch({
    type: RESET_CART
  })
}
