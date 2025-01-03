import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actionCreators/thunks/cart";
import { incrementCartItem } from "../redux/actionCreators/thunks/cart";
import { dataTestIds } from "../tests/constants/components";
import { deleteProduct } from "../redux/actionCreators/thunks/products";
import { useCallback } from "react";

const linkStyle = { display: "block", marginBottom: "15px" };

export const Product = ({ givenProduct }) => {
  const role = useSelector((state) => state.auth).role;
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAdmin = role && role === "admin";

  const product = givenProduct;

  const addItemToCart = useCallback(() => {
    const cartItem = cart.find(
      (cartItem) => cartItem.product.id === product.id
    );

    if (cartItem) {
      console.log(cartItem);
      dispatch(incrementCartItem(product.id));
    } else {
      dispatch(addToCart(product));
    }
  }, [cart, dispatch]);

  const modifyProduct = useCallback(() => {
    navigate(`${product.id}/modify`);
  }, [navigate]);

  const removeProduct = useCallback(() => {
    dispatch(deleteProduct(product.id));
  }, [dispatch]);

  return (
    <div data-testid={dataTestIds.containerId.listItem(product.id)}>
      <h3 data-testid={dataTestIds.textId.name}>{product.name}</h3>
      <p data-testid={dataTestIds.textId.price}>{product.price} €</p>
      <Link
        to={`/products/${product.id}`}
        data-testid={dataTestIds.linkId.inspect(product.id)}
        style={linkStyle}
      >
        View product page
      </Link>
      {!isAdmin ? (
        <button data-testid={dataTestIds.clickId.add} onClick={addItemToCart}>
          Add
        </button>
      ) : (
        <div>
          <button
            data-testid={dataTestIds.clickId.modify}
            onClick={modifyProduct}
          >
            Modify
          </button>
          <button
            data-testid={dataTestIds.clickId.delete}
            onClick={removeProduct}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
