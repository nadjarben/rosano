// initial state
const initState = {
    category: "promo"
  }
  
  // actions
  const CHANGE_CATEGORY = 'CHANGE_CATEGORY'
  
  // reducer
  export default (state = initState, action) => {
    switch (action.type) {
      case CHANGE_CATEGORY:
        return {...state, client: action.payload}
      default:
        return state
    }
  }
  