import {
  CHANGE_CATEGORY,
  TOGGLE_CART,
  CHANGE_LANGUAGE,
  ACTIVE_ADMIN_MODE,
  TOGGLE_MODAL_ADMIN,
  SEARCH_BAR_RESULT,
  RESET_SEARCH_BAR,
} from '../actions/types'

export const initialState = {
  category: 'package',
  searchBar: '',
  toggleSearchBar: false,
  cartOpen: false,
  language: '',
  adminMode: false,
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
    case SEARCH_BAR_RESULT:
      return {
        ...state,
        searchBar: action.payload,
      }
    case RESET_SEARCH_BAR:
      return {
        ...state,
        searchBar: '',
        toggleSearchBar: false,
      }
    default:
      return state
  }
}
