import axios from "axios";
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  SALE_PRODUCT_REQUEST,
  SALE_PRODUCT_SUCCESS,
  SALE_PRODUCT_FAILURE
  
} from "./ActionType";
import api, { API_BASE_URL } from "../../../config/api";
// Assuming api.sale is your Axios instance configured to make API requests
// and SALE_PRODUCT_REQUEST, SALE_PRODUCT_SUCCESS, SALE_PRODUCT_FAILURE are action types
export const saleProduct = (productId, isOnSale) => async (dispatch) => {
  console.log("Toggle sale status for product:", productId, "isOnSale:", isOnSale);
  try {
    dispatch({ type: SALE_PRODUCT_REQUEST });

    console.log("isOnSale:", isOnSale);


    // Make the API request to toggle the sale status of the product
    const response = await api.put(`/api/sale/${productId}/toggleSale`, isOnSale);



    // Dispatch success action with the updated product data
    dispatch({
      type: SALE_PRODUCT_SUCCESS,
      payload: response.data, // Assuming the API returns the updated product data
    });

    console.log("Product sale status updated successfully:", response.data);
  } catch (error) {
    // Dispatch failure action if there's an error
    console.log("Error updating product sale status:", error);
    dispatch({
      type: SALE_PRODUCT_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};


// export const getProducts = () => async (dispatch) => {
//   try {
//     dispatch({ type: GET_PRODUCTS_REQUEST });

//     const { data } = await api.get(`${API_BASE_URL}/api/admin/products/`);

//     dispatch({
//       type: GET_PRODUCTS_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_PRODUCTS_FAILURE,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// export const createProduct = (product) => async (dispatch) => {
//   try {
//     dispatch({ type: CREATE_PRODUCT_REQUEST });

//     const { data } = await api.post(
//       `${API_BASE_URL}/api/admin/products/`,
//       product.data
//     );

//     dispatch({
//       type: CREATE_PRODUCT_SUCCESS,
//       payload: data,
//     });

//     console.log("created product ", data);
//   } catch (error) {
//     dispatch({
//       type: CREATE_PRODUCT_FAILURE,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// export const updateProduct = (product) => async (dispatch) => {
//   try {
//     dispatch({ type: UPDATE_PRODUCT_REQUEST });

//     const { data } = await api.put(
//       `${API_BASE_URL}/api/admin/products/${product.productId}`,
//       product
//     );

//     dispatch({
//       type: UPDATE_PRODUCT_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_PRODUCT_FAILURE,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// export const deleteProduct = (data) => async (dispatch) => {
//   try {
//     dispatch({ type: DELETE_PRODUCT_REQUEST });

//     await api.delete(`/api/admin/products/${data.productId}`);

//     dispatch({
//       type: DELETE_PRODUCT_SUCCESS,
//       payload: data.productId,
//     });
//   } catch (error) {
//     dispatch({
//       type: DELETE_PRODUCT_FAILURE,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
