import axios from "axios";
import { API_LIVE_RATES } from "../../constants/api";
import {
  ON_FETCH_LIVE_RATES_STARTED,
  ON_FETCH_LIVE_RATES_SUCCEEDED,
  ON_FETCH_LIVE_RATES_FAILED,
} from "./types";

export const fetchLiveRates = () => async (dispatch) => {
  dispatch({
    type: ON_FETCH_LIVE_RATES_STARTED,
  });
  try {
    const response = await axios.get(
      `${API_LIVE_RATES}/rates?key=${process.env.REACT_APP_LIVE_RATES_KEY}`
    );
    setTimeout(() => {
      dispatch({
        type: ON_FETCH_LIVE_RATES_SUCCEEDED,
        payload: response.data,
      });
    }, 1000);
  } catch (error) {
    dispatch({
      type: ON_FETCH_LIVE_RATES_FAILED,
      payload: error.message,
    });
  }
};

export const updateLiveRates = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${API_LIVE_RATES}/rates?key=${process.env.REACT_APP_LIVE_RATES_KEY}`
    );
      dispatch({
        type: ON_FETCH_LIVE_RATES_SUCCEEDED,
        payload: response.data,
      });
  } catch (error) {
    dispatch({
      type: ON_FETCH_LIVE_RATES_FAILED,
      payload: error.message,
    });
  }
};