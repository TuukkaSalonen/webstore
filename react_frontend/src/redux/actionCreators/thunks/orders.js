import { url as base } from "../../constants";
import { addOrder, setOrders, setOrder } from "../orderActions";
import { addOrderNotification } from "../notificationActions";
import { clearCart } from "../cartActions";
import { successMessages } from "../../constants";

const url = `${base}orders/`;

export const getAllOrders = () => {
  return async (dispatch) => {
    dispatch(addOrderNotification({error: null, message: successMessages.loading}));
    console.log("load orders");
    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
        },
        credentials: 'include'
      });
      const data = await response.json();

      if (!response.ok) {
        if (typeof data.error === "object") {
          return dispatch(
            addOrderNotification({
              error: true,
              message: Object.values(data.error)[0],
            })
          );
        }
        return dispatch(
          addOrderNotification({
            error: true,
            message: data.error,
          })
        );
      }
      console.log("Orders:", data);
      dispatch(setOrders(data));
      dispatch(addOrderNotification({error: false, message: successMessages.ordersLoaded}));
      console.log("loaded orders");
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
};

export const getOrder = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${url}${id}`);

      if (!response.ok) {
        throw new Error("Failed to fetch order");
      }
      const order = await response.json();
      console.log("Orders:", order);
      dispatch(setOrder(order));
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
};

export const postOrder = (cart) => {
  return async (dispatch) => {
    dispatch(addOrderNotification({error: null, message: successMessages.loading}));
    const order = {
      items: cart.map((item) => {
        delete item.product.image;
        return item;
      }),
    };
    console.log(order);
    try {
      const response = await fetch(`${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(order),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        if (typeof data.error === "object") {
          return dispatch(
            addOrderNotification({
              error: true,
              message: Object.values(data.error)[0],
            })
          );
        }
        return dispatch(
          addOrderNotification({
            error: true,
            message: data.error,
          })
        );
      }
      console.log(data);
      dispatch(clearCart());
      dispatch(addOrder(data));
      dispatch(addOrderNotification({error: false, message: successMessages.order}))
    } catch (error) {
      console.error("Error posting order:", error);
    }
  };
};
