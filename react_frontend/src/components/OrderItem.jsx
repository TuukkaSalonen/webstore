import { Link } from "react-router-dom";
import { dataTestIds } from "../tests/constants/components";

export const OrderItem = ( {orderId}) => {
    console.log(orderId);
    return (
        <div data-testid={dataTestIds.containerId.listItem(orderId)}>
            <h3 data-testid={dataTestIds.textId.id}>{orderId}</h3>
            <Link to={`${orderId}`} data-testid={dataTestIds.linkId.inspect(orderId)}>Inspect order</Link>
        </div>
    )
}