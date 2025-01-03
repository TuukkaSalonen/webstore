import { url as base, successMessages } from "../../constants";
import {
  addProduct,
  removeProduct,
  updateProduct,
  setProducts,
  setProduct,
} from "../productActions";
import { addProductNotification } from "../notificationActions";

const url = `${base}products/`;

export const postProduct = (product) => {
  return async (dispatch) => {
    dispatch(addProductNotification({error: null, message: successMessages.loading}));
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(product),
        credentials: "include"
      });

      const data = await response.json();

      if (!response.ok) {
        if (typeof data.error === "object") {
          return dispatch(
            addProductNotification({
              error: true,
              message: Object.values(data.error)[0],
            })
          );
        }
        return dispatch(
          addProductNotification({
            error: true,
            message: data.error,
          })
        );
      }
      console.log(data);
      dispatch(addProduct(data));
      dispatch(addProductNotification({error: false, message: successMessages.productCreated}));
    } catch (error) {
      console.log("Error posting product", error);
    }
  };
};

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(addProductNotification({error: null, message: successMessages.loading}))
    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
        },
        credentials: "include"
      });

      const data = await response.json();

      if (!response.ok) {
        if (typeof data.error === "object") {
          return dispatch(
            addProductNotification({
              error: true,
              message: Object.values(data.error)[0],
            })
          );
        }
        return dispatch(
          addProductNotification({
            error: true,
            message: data.error,
          })
        );
      }
      console.log("Products:", data);
      dispatch(setProducts(data));
      dispatch(addProductNotification({error: false, message: successMessages.productsLoaded}))
    } catch (error) {
      console.log("Error fetching products", error);
    }
  };
};

export const getProduct = (id) => {
  console.log("getproduct");
  return async (dispatch) => {
    try {
      const response = await fetch(`${url}${id}`, {
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        if (typeof data.error === "object") {
          return dispatch(
            addProductNotification({
              error: true,
              message: Object.values(data.error)[0],
            })
          );
        }
        return dispatch(
          addProductNotification({
            error: true,
            message: data.error,
          })
        );
      }
      dispatch(setProduct(data));
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch(addProductNotification({error: null, message: successMessages.loading}));
    try {
      const response = await fetch(`${url}${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json"
        },
        credentials: "include"
      });

      const data = await response.json();

      if (!response.ok) {
        if (typeof data.error === "object") {
          return dispatch(
            addProductNotification({
              error: true,
              message: Object.values(data.error)[0],
            })
          );
        }
        return dispatch(
          addProductNotification({
            error: true,
            message: data.error,
          })
        );
      }
      dispatch(removeProduct(id));
      dispatch(addProductNotification({error: false, message: successMessages.productDeleted}))
    } catch (error) {
      console.log("Error deleting product", error);
    }
  };
};

export const putProduct = (product) => {
  return async (dispatch) => {
    const item = {
      price: product.price,
      name: product.name,
      description: product.description,
    };
    try {
      dispatch(addProductNotification({error: null, message: successMessages.loading}));
      const response = await fetch(`${url}${product.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        if (typeof data.error === "object") {
          return dispatch(
            addProductNotification({
              error: true,
              message: Object.values(data.error)[0],
            })
          );
        }
        return dispatch(
          addProductNotification({
            error: true,
            message: data.error,
          })
        );
      }
      dispatch(updateProduct(data));
      dispatch(addProductNotification({error: false, message: successMessages.productUpdated}));
    } catch (error) {
      console.log("Error updating product", error);
    }
  };
};
