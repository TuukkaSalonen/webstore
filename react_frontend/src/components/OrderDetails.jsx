import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { dataTestIds } from "../tests/constants/components";
import { useEffect } from "react";
import { getAllOrders } from "../redux/actionCreators/thunks/orders";

export const OrderDetails = () => {
  const { orderId } = useParams();
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const order = orders.find((orderItem) => orderItem.id === orderId);

  if (!order) {
    return <div>No order found</div>
  }

  const { id, items } = order;

  const orderItems = items.map(({ product, quantity }) => {
    return (
      <div data-testid={dataTestIds.containerId.listItem(product.id)} key={product.id}>
        <h4 data-testid={dataTestIds.textId.name}>Name: {product.name}</h4>
        <h4 data-testid={dataTestIds.textId.quantity}>Quantity: {quantity}</h4>
      </div>
    );
  });

  return (
    <div data-testid={dataTestIds.containerId.inspect}>
      <h2>Order details for order {orderId} </h2>
      {orderItems}
    </div>
  );
};
