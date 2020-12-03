import { CHANGE_CATEGORY, TOGGLE_CART, CHANGE_LANGUAGE, ACTIVE_ADMIN_MODE, TOGGLE_MODAL_ADMIN, SEARCH_BAR_RESULT, RESET_SEARCH_BAR } from './types'

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

export const activeAdminMode = () => ({
  type: ACTIVE_ADMIN_MODE,
})

export const toggleModalAdmin = () => ({
  type: TOGGLE_MODAL_ADMIN,
})

export const searchBarResult = (result) => async (dispatch) => {
  dispatch({
    type: SEARCH_BAR_RESULT,
    payload: result,
  })
}

export const resetSearchBar = () => async (dispatch) => {
  dispatch({
    type: RESET_SEARCH_BAR
  })
}


