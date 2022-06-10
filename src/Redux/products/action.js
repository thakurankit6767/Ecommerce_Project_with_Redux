import Axios from "axios";
import * as types from "./actionTypes";

const fetchDataRequest = (payload) => {
  return {
    type: types.FETCH_DATA_REQUEST,
    payload,
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload,
  };
};

const fetchDatafailure = (payload) => {
  return {
    type: types.FETCH_DATA_FAILURE,
    payload,
  };
};

const fetchData = (payload) => {
  return (dispatch) => {
    dispatch(fetchDataRequest());

    Axios.get("http://localhost:8080/products", {
      params: {
        ...payload,
      },
    })
      .then((r) => dispatch(fetchDataSuccess(r.data)))
      .catch((e) => dispatch(fetchDatafailure(e.data)));
  };
};




const getSingleProductRequest = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_REQUEST,
    payload,
  };
};

const getSingleProductSuccess = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_SUCCESS,
    payload,
  };
};

const getSingleProductFailure = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_FAILURE,
    payload,
  };
};

const getSingleProduct = (id) => (dispatch) => {
  dispatch(getSingleProductRequest());
  Axios.get(`http://localhost:8080/products/${id}`)
    .then((r) => dispatch(getSingleProductSuccess(r.data)))
    .catch((e) => dispatch(getSingleProductFailure(e.data)));
};


// ADD TO CART
const addProductCartRequest = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_REQUEST,
    payload,
  };
};

const addProductCartSuccess = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_SUCCESS,
    payload,
  };
};

const addProductCartFailure = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_FAILURE,
    payload,
  };
};


export { fetchData, getSingleProduct};
