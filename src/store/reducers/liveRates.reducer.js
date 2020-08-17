import { ON_FETCH_LIVE_RATES_STARTED, ON_FETCH_LIVE_RATES_SUCCEEDED, ON_FETCH_LIVE_RATES_FAILED } from "../actions/types";

export const initialState = {
  liveRatesList: [],
  isLoading: false,
  errorMessage: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ON_FETCH_LIVE_RATES_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case ON_FETCH_LIVE_RATES_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        liveRatesList: action.payload
      }; 
      case ON_FETCH_LIVE_RATES_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };    
      default:
      return state;
  }
}
