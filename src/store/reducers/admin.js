import {
  ACTIVE_ADMIN_MODE,
} from '../actions/types'

export const initialState = {
 adminMode: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIVE_ADMIN_MODE:
      return {
        ...state,
        adminMode: !state.adminMode,
      }
    default:
      return state
  }
}
