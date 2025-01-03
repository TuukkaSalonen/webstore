import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../redux/actionCreators/thunks/orders";
import { dataTestIds } from "../tests/constants/components";
import { OrderItem } from "./OrderItem";
import { useNavigate } from "react-router-dom";
import { errorMessages } from "../redux/constants";
import { addNotification } from "../redux/actionCreators/notificationActions";

export const Orders = () => {
  const orders = useSelector((state) => state.orders);
  const role = useSelector((state) => state.auth).role;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (role === "guest") {
      navigate("/login");
      dispatch(
        addNotification({ error: true, message: errorMessages.authentication })
      );
    } else if (!orders || orders.length === 0) {
      dispatch(getAllOrders());
    }
  }, []);

  const renderOrderList = () => {
    if (!orders || orders.length === 0) {
      return <div data-testid={dataTestIds.containerId.empty}>No orders</div>;
    }

    return (
      <ul>
        {orders.map((order) => (
          <OrderItem
            orderId={ order.id }
            data-testid={dataTestIds.containerId.listItem(order.id)}
            key={order.id}
          />
        ))}
      </ul>
    );
  };

  return (
    <div data-testid={dataTestIds.containerId.main}>
      <h2>Orders</h2>
      {renderOrderList()}
    </div>
  );
};
