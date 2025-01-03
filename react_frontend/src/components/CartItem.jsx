import { useDispatch } from "react-redux";
import { incrementCartItem, reduceCartItem, removeCartItem } from "../redux/actionCreators/thunks/cart";
import { dataTestIds } from "../tests/constants/components";
import { useCallback } from "react";

export const CartItem = ({item}) => {
    const dispatch = useDispatch();
    const {product, quantity} = item;

    const incrementItem = useCallback((e) => {
        e.preventDefault();
        dispatch(incrementCartItem(product.id));
    }, [dispatch, product]);

    const reduceItem = useCallback((e) => {
        e.preventDefault();
        if (quantity === 1)  {
            dispatch(removeCartItem(product.id));
        }
        else {
            dispatch(reduceCartItem(product.id));
        }
    }, [quantity, dispatch, product]);

    if (!item || !item.product) {
        return null;
    }

    return (
        <div key={`cart-item-${product.id}`} data-testid={dataTestIds.containerId.listItem(product.id)}>
            <p data-testid={dataTestIds.textId.name}>Name: {product.name}</p>
            <p data-testid={dataTestIds.textId.price}>Price: {product.price} €</p>
            <p data-testid={dataTestIds.textId.quantity}>Amount: {quantity}</p>
            <button onClick={incrementItem} data-testid={dataTestIds.clickId.add}>Add (+)</button>
            <button onClick={reduceItem} data-testid={dataTestIds.clickId.reduce}>Reduce (-)</button>
        </div>
    );
};
