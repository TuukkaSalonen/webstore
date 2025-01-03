import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNotification } from "../redux/actionCreators/notificationActions";
import { errorMessages } from "../redux/constants";
import { useSelector } from "react-redux";
import { useState } from "react";
import { putProduct } from "../redux/actionCreators/thunks/products";
import { dataTestIds } from "../tests/constants/components";

export const ModifyProduct = () => {
  const role = useSelector((state) => state.auth).role;
  const products = useSelector((state) => state.products).products;
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialProduct = products.find((item) => item.id === productId);
  const [product, setProduct] = useState(initialProduct);

  useEffect(() => {
    if (role !== "admin") {
      dispatch(
        addNotification({ error: true, message: errorMessages.authentication })
      );
    }
  }, [navigate, dispatch]);

  
  const returnToPrevious = useCallback((e) => {
    e.preventDefault(e);
    //navigate("/products", {replace: true});
    navigate(-1);
  }, [navigate]);
  
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  }, [product, role]);

  const submitForm = useCallback((e) => {
    e.preventDefault();
    dispatch(putProduct(product));
    returnToPrevious(e);
  }, [dispatch, product, returnToPrevious]);

  if (!initialProduct) {
    navigate("/");
    dispatch(
      addNotification({ error: true, message: errorMessages.productNotFound })
    );
    return null;
  }

  return (
      <form onSubmit={submitForm} data-testid={dataTestIds.containerId.form}>
      <h2>Modify Product {product.name}</h2>
        <p>
          <input
            type="text"
            name="id"
            value={product.id}
            onChange={handleChange}
            size={50}
            disabled={true}
            data-testid={dataTestIds.textId.id}
          />
        </p>
        <p>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            size={50}
            data-testid={dataTestIds.inputId.name}
          />
        </p>
        <p>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
            size={50}
            data-testid={dataTestIds.inputId.price}
          />
        </p>
        <p>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            size={50}
            data-testid={dataTestIds.inputId.description}
          />
        </p>
        <button type="submit" data-testid={dataTestIds.clickId.submit}>Update</button>
        <button onClick={returnToPrevious} data-testid={dataTestIds.clickId.cancel}>Cancel</button>
      </form>
  );
};
