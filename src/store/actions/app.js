import { CHANGE_CATEGORY, TOGGLE_CART, CHANGE_LANGUAGE } from './types'

export const changeCategory = (category) => async (dispatch) => {
  dispatch({
    type: CHANGE_CATEGORY,
    payload: category,
  })
}

export const changeLanguage = (language) => async (dispatch) => {
  dispatch({
    type: CHANGE_LANGUAGE,
    payload: language,
  })
}

export const toggleCart = () => ({
  type: TOGGLE_CART,
})
