import { GET_CLIENT } from "../actions/types";

export const initialState = {
  client: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CLIENT:
      return {
        ...state,
        client: action.payload
      };
      default:
      return state;
  }
}
