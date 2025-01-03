import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import { postProduct } from "../redux/actionCreators/thunks/products";
import { dataTestIds } from "../tests/constants/components";

export const ProductCreator = ({ closeCreator }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const product = {
      name: name,
      price: price,
      description: description,
    };
    dispatch(postProduct(product));
    closeCreator();
  }, [dispatch, name, price, description, closeCreator]);

  return (
    <form data-testid={dataTestIds.containerId.form}>
      <p>
        Name:{" "}
        <input
          type="text"
          name="name"
          size={25}
          onChange={useCallback((e) => setName(e.target.value), [setName])}
          data-testid={dataTestIds.inputId.name}
        ></input>
      </p>
      <p>
        Price:{" "}
        <input
          type="number"
          step="0.01"
          name="price"
          size={26}
          onChange={useCallback((e) => setPrice(e.target.value), [setPrice])}
          data-testid={dataTestIds.inputId.price}
        ></input>
      </p>
      <p>
        Description:{" "}
        <input
          type="text"
          name="description"
          onChange={useCallback((e) => setDescription(e.target.value), [setDescription])}
          data-testid={dataTestIds.inputId.description}
        ></input>
      </p>
      <button type="submit" onClick={handleSubmit} data-testid={dataTestIds.clickId.submit}>
        Add product
      </button>
      <button data-testid={dataTestIds.clickId.cancel}>Cancel</button>
    </form>
  );
};
