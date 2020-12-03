import axios from "axios";
import { API_ROSANO } from "../../utils/environment";
import {
  ON_FETCH_PRODUCT_STARTED,
  ON_FETCH_PRODUCT_SUCCEEDED,
  ON_FETCH_PRODUCT_FAILED,
  ON_DELETE_PRODUCT_STARTED,
  ON_DELETE_PRODUCT_SUCCEEDED,
  ON_DELETE_PRODUCT_FAILED,
  ON_DISABLE_PRODUCT_STARTED,
  ON_DISABLE_PRODUCT_SUCCEEDED,
  ON_DISABLE_PRODUCT_FAILED, 
  ON_UPDATE_PRODUCT_STARTED,
  ON_UPDATE_PRODUCT_SUCCEEDED,
  ON_UPDATE_PRODUCT_FAILED,
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

export const deleteProduct = (id) => async (dispatch) => {
  dispatch({
    type: ON_DELETE_PRODUCT_STARTED,
  });
  try {
    const response = await axios.delete(
      `${API_ROSANO}/product/${id}`
    );
    setTimeout(() => {
      dispatch({
        type: ON_DELETE_PRODUCT_SUCCEEDED,
        payload: response.data,
      });
    }, 1000);
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
  } catch (error) {
    dispatch({
      type: ON_DELETE_PRODUCT_FAILED,
      payload: error.message,
    });
  }
};

export const disableProduct = (id) => async (dispatch) => {
  dispatch({
    type: ON_DISABLE_PRODUCT_STARTED,
  });
  try {
    const response = await axios.patch(
      `${API_ROSANO}/product/disable/${id}`
    );
    setTimeout(() => {
      dispatch({
        type: ON_DISABLE_PRODUCT_SUCCEEDED,
        payload: response.data,
      });
    }, 1000);
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
  } catch (error) {
    dispatch({
      type: ON_DISABLE_PRODUCT_FAILED,
      payload: error.message,
    });
  }
};

export const updateProduct = (id, newProduct) => async (dispatch) => {
  dispatch({
    type: ON_UPDATE_PRODUCT_STARTED,
  });
  try {
    const response = await axios.put(
      `${API_ROSANO}/product/${id}`, newProduct
    );
    setTimeout(() => {
      dispatch({
        type: ON_UPDATE_PRODUCT_SUCCEEDED,
        payload: response.data,
      });
    }, 1000);
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
  } catch (error) {
    dispatch({
      type: ON_UPDATE_PRODUCT_FAILED,
      payload: error.message,
    });
  }
};
