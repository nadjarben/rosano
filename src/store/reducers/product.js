import {
  ON_FETCH_PRODUCT_STARTED,
  ON_FETCH_PRODUCT_SUCCEEDED,
  ON_FETCH_PRODUCT_FAILED,
  ON_CREATE_PRODUCT_STARTED,
  ON_CREATE_PRODUCT_SUCCEEDED,
  ON_CREATE_PRODUCT_FAILED,
  ON_DELETE_PRODUCT_STARTED,
  ON_DELETE_PRODUCT_SUCCEEDED,
  ON_DELETE_PRODUCT_FAILED,
  ON_DISABLE_PRODUCT_STARTED,
  ON_DISABLE_PRODUCT_SUCCEEDED,
  ON_DISABLE_PRODUCT_FAILED,
} from '../actions/types'

export const initialState = {
  products: [],
  isLoading: false,
  errorMessage: '',
  productDeleted: '',
  productDisabled: '',
  productUpdated: '',
  productCreated: '',
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ON_FETCH_PRODUCT_STARTED:
      return {
        ...state,
        isLoading: true,
      }
    case ON_FETCH_PRODUCT_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      }
    case ON_FETCH_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      }
    case ON_DELETE_PRODUCT_STARTED:
      return {
        ...state,
      }
    case ON_DELETE_PRODUCT_SUCCEEDED:
      return {
        ...state,
        productDeleted: action.payload,
      }
    case ON_DELETE_PRODUCT_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
      }
    case ON_DISABLE_PRODUCT_STARTED:
      return {
        ...state,
      }
    case ON_DISABLE_PRODUCT_SUCCEEDED:
      return {
        ...state,
        productDisabled: action.payload,
      }
    case ON_DISABLE_PRODUCT_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
      }
    case ON_CREATE_PRODUCT_STARTED:
      return {
        ...state,
      }
    case ON_CREATE_PRODUCT_SUCCEEDED:
      return {
        ...state,
        productCreated: action.payload,
      }
    case ON_CREATE_PRODUCT_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}
