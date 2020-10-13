import { GET_CLIENT, GET_PAIEMENT } from "../actions/types";

export const initialState = {
  client: {},
  paiement: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CLIENT:
      return {
        ...state,
        client: action.payload
      };
      case GET_PAIEMENT:
      return {
        ...state,
        paiement: action.payload
      };
      default:
      return state;
  }
}
