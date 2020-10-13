import { GET_CLIENT, GET_PAIEMENT } from './types'

export const getClient = (client) => async (dispatch) => {
  dispatch({
    type: GET_CLIENT,
    payload: client,
  })
}
export const getPaiement = (paiement) => async (dispatch) => {
  dispatch({
    type: GET_PAIEMENT,
    payload: paiement,
  })
}


