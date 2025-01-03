import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actionCreators/thunks/products";
import { Product } from "./Product";
import { ProductCreator } from "./ProductCreator";
import { dataTestIds } from "../tests/constants/components";

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products).products;
  const role = useSelector((state) => state.auth).role;
  const isAdmin = role && role === "admin";
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(getProducts());
    }
  }, [products, dispatch]);

  const openCloseProductCreator = useCallback(() => {
    setOpen(!isOpen);
  }, [setOpen, isOpen]);

  const productList = products.map((val) => (
    <Product givenProduct={val} key={`product-${val.id}`} />
  ));

  return (
    <div data-testid={dataTestIds.containerId.main}>
      <h2>Products</h2>
      {isAdmin && (
        <button
          data-testid= {dataTestIds.clickId.add}
          onClick={openCloseProductCreator}
        >
          {(isOpen && "Close") || "Add"}
        </button>
      )}
      {isAdmin && isOpen && (
        <ProductCreator closeCreator={openCloseProductCreator} />
      )}
      {productList.length > 0 ? (
        <ul>{productList}</ul>
      ) : (
        <div data-testid={dataTestIds.containerId.empty}>No products yet</div>
      )}
    </div>
  );
};
