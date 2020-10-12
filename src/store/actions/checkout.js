import { GET_CLIENT } from './types'

export const getClient = (client) => async (dispatch) => {
  dispatch({
    type: GET_CLIENT,
    payload: client,
  })
}


