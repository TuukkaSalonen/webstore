import { successMessages } from "../../constants";
import {
  addItem,
  clearCart,
  incrementItem,
  reduceItem,
  removeItem,
  setItems,
} from "../cartActions";
import { addCartNotification } from "../notificationActions";

export const initCart = () => {
  return (dispatch) => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      dispatch(setItems(JSON.parse(localCart)));
    }
  };
};

export const clearCartItems = () => {
    return (dispatch) => {
        const localCart = localStorage.getItem("cart");
        if (localCart) {
            localStorage.removeItem("cart");
        }
        dispatch(clearCart());
    }
}

export const addToCart = (product) => {
  const item = { product, quantity: 1 };
  return (dispatch) => {
    const localCart = localStorage.getItem("cart");
    if (!localCart) {
      localStorage.setItem("cart", JSON.stringify([item]));
    } else {
      const cart = JSON.parse(localCart);
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    dispatch(addItem(item));
    dispatch(addCartNotification({error: false, message: successMessages.cartAdd}));
  };
};

export const incrementCartItem = (id) => {
  return (dispatch) => {
    console.log("Increment", id);
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      const cart = JSON.parse(localCart);
      const newCart = cart.map((item) => {
        console.log(item);
        if (item.product.id === id) {
          item.quantity += 1;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
    dispatch(incrementItem(id));
    dispatch(addCartNotification({error: false, message: successMessages.cartAdd}));
  };
};

export const reduceCartItem = (id) => {
  return (dispatch) => {
    const localCart = localStorage.getItem("cart");

    if (localCart) {
      const cart = JSON.parse(localCart);
      const newCart = cart.map((item) => {
        if (item.product.id === id) {
          item.quantity -= 1;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
    dispatch(reduceItem(id));
    dispatch(addCartNotification({error: false, message: successMessages.cartReduce}));
  };
};

export const removeCartItem = (id) => {
  const localCart = localStorage.getItem("cart");
  return (dispatch) => {
    if (localCart) {
      const cart = JSON.parse(localCart);
      const newCart = cart.filter((item) => item.product.id !== id);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
    dispatch(removeItem(id));
    dispatch(addCartNotification({error: false, message: successMessages.cartReduce}));
  };
};
