import axios from "axios";
import { API_ROSANO } from "../../utils/environment";
import {
  ON_FETCH_PRODUCT_STARTED,
  ON_FETCH_PRODUCT_SUCCEEDED,
  ON_FETCH_PRODUCT_FAILED,
} from "./types";

export const fetchProducts = () => async (dispatch) => {
  dispatch({
    type: ON_FETCH_PRODUCT_STARTED,
  });
  try {
    const response = await axios.get(
      `${API_ROSANO}/product/products`
    );
    setTimeout(() => {
      dispatch({
        type: ON_FETCH_PRODUCT_SUCCEEDED,
        payload: response.data,
      });
    }, 1000);
  } catch (error) {
    dispatch({
      type: ON_FETCH_PRODUCT_FAILED,
      payload: error.message,
    });
  }
};
