import {
  CHANGE_CATEGORY,
  TOGGLE_CART,
  CHANGE_LANGUAGE,
  ACTIVE_ADMIN_MODE,
  TOGGLE_MODAL_ADMIN,
} from '../actions/types'

export const initialState = {
  category: 'package',
  cartOpen: false,
  language: '',
  adminMode: true,
  modalAdmin: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        ...state,
        category: action.payload,
      }
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      }
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      }
    case ACTIVE_ADMIN_MODE:
      return {
        ...state,
        adminMode: !state.adminMode,
      }
    case TOGGLE_MODAL_ADMIN:
      return {
        ...state,
        modalAdmin: !state.modalAdmin,
      }
    default:
      return state
  }
}
