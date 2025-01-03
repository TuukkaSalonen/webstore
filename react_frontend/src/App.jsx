import { dataTestIds } from "./tests/constants/components.js";
import { Navbar } from "./components/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Notifications } from "./components/Notifications.jsx";
import { Home } from "./components/Home.jsx";
import { NotFound } from "./components/NotFound.jsx";
import { Register } from "./components/Register.jsx";
import { Login } from "./components/Login.jsx";
import { Products } from "./components/Products.jsx";
import { ProductPage } from "./components/ProductPage.jsx";
import { ModifyProduct } from "./components/ModifyProduct.jsx";
import { Cart } from "./components/Cart.jsx";
import { useDispatch } from "react-redux";
import { initCart } from "./redux/actionCreators/thunks/cart.js";
import { useEffect } from "react";
import { Orders } from "./components/Orders.jsx";
import { UserDetails } from "./components/UserDetails.jsx";
import { OrderDetails } from "./components/OrderDetails.jsx";
import { Users } from "./components/Users.jsx";
import { ModifyUser } from "./components/ModifyUser.jsx";
import { initAuth } from "./redux/actionCreators/thunks/auth.js";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initCart());
    dispatch(initAuth());
  }, [dispatch]);

  return (
    <div data-testid={dataTestIds.app}>
       <Navbar />
       <Notifications/>
       <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/products/:productId/modify" element={<ModifyProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:orderId" element={<OrderDetails />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetails />} />
        <Route path="/users/:userId/modify" element={<ModifyUser />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer>
        <p>Copyright &copy; 2024</p>
      </footer>
    </div>
  );
};

export default App;
