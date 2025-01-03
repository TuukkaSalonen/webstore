import { useSelector } from "react-redux";
import { dataTestIds } from "../tests/constants/components";
import { useDispatch } from "react-redux";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom"
import { addNotification } from "../redux/actionCreators/notificationActions";
import { errorMessages } from "../redux/constants";
import { postOrder } from "../redux/actionCreators/thunks/orders";
import { useCallback } from "react";

export const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const role = useSelector((state) => state.auth).role;
  const cartItems = cart.map((item) => <CartItem item={item} key={item.product.id}/>);

  const sendOrder = useCallback((e) => {
    e.preventDefault();
    if (!role || role === 'guest') {
      dispatch(addNotification({error: true, message: errorMessages.authentication}));
      navigate("/login");
    }
    else {
      dispatch(postOrder(cart));
    }
  }, [dispatch, navigate, cart, role]);

  return (
    <div data-testid={dataTestIds.containerId.main}>
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems}
          <button onClick={sendOrder} data-testid={dataTestIds.clickId.submit}>Order</button>
        </div>
      ) : (
        <div data-testid={dataTestIds.containerId.empty}>Empty cart</div>
      )}
    </div>
  );
};
