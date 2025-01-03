import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProduct, getProduct } from "../redux/actionCreators/thunks/products";
import { dataTestIds } from "../tests/constants/components";
import { addToCart, incrementCartItem } from "../redux/actionCreators/thunks/cart";

export const ProductPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);
  const product = useSelector((state) => state.products.product);
  const role = useSelector((state) => state.auth.role);
  const cart = useSelector((state) => state.cart);
  const isAdmin = role === "admin";
  const selectedProduct = products.find((p) => p.id === productId) || product;

  useEffect(() => {
    if (productId && products.length === 0) {
      dispatch(getProduct(productId));
    }
  }, [dispatch, productId, products]);

  const modifyProduct = useCallback(() => {
    navigate("modify")
  }, [navigate]);

  const removeProduct = useCallback(() => {
    dispatch(deleteProduct(productId));
    navigate(-1);
  }, [navigate]);

const addItemToCart = useCallback(() => {
  const cartItem = cart.find(
    (cartItem) => cartItem.product.id === productId
  );

  if (cartItem) {
    console.log("Add to cart: ", selectedProduct);
    dispatch(incrementCartItem(productId));
  } else {
    dispatch(addToCart(selectedProduct));
  }
}, [dispatch, cart, productId]);

  if (!selectedProduct) {
    return null;
  }

  const { name, description, price } = selectedProduct;

  return (
    <div data-testid={dataTestIds.containerId.inspect}>
      <h3 data-testid={dataTestIds.textId.name}>{name}</h3>
      <p data-testid={dataTestIds.textId.description}>{description}</p>
      <p data-testid={dataTestIds.textId.price}>{price} €</p>
      {!isAdmin && (
        <button data-testid={dataTestIds.clickId.add} onClick={addItemToCart}>
          Add to Cart
        </button>
      )}
      {isAdmin && (
        <>
          <button data-testid={dataTestIds.clickId.modify} onClick={modifyProduct}>
            Modify
          </button>
          <button data-testid={dataTestIds.clickId.delete} onClick={removeProduct}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};