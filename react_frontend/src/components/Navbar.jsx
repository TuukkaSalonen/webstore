import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { dataTestIds } from "../tests/constants/components";
import { logOut } from "../redux/actionCreators/thunks/auth";

const linkStyle = { paddingRight: "10px" };
const roleStyle = { paddingTop: "10px" };

const commonLinks = () => {
  return (
    <>
      <Link data-testid={dataTestIds.linkId.home} to="/" style={linkStyle}>
        Home
      </Link>
      <Link
        data-testid={dataTestIds.linkId.products}
        to="/products"
        style={linkStyle}
      >
        Products
      </Link>
      <Link data-testid={dataTestIds.linkId.cart} to="/cart" style={linkStyle}>
        Cart
      </Link>
    </>
  );
};

const guestLinks = () => {
  return (
    <div data-testid={dataTestIds.containerId.navbar}>
      {commonLinks()}
      <Link
        data-testid={dataTestIds.linkId.login}
        to="/login"
        style={linkStyle}
      >
        Login
      </Link>
      <Link
        data-testid={dataTestIds.linkId.register}
        to="/register"
        style={linkStyle}
      >
        Register
      </Link>
      <div data-testid={dataTestIds.containerId.profile} style={roleStyle}>
        Role: guest
      </div>
    </div>
  );
};

const customerLinks = (logUserOut) => {
  return (
    <div data-testid={dataTestIds.containerId.navbar}>
      {commonLinks()}
      <Link
        data-testid={dataTestIds.linkId.orders}
        to="/orders"
        style={linkStyle}
      >
        Orders
      </Link>
      <Link
        data-testid={dataTestIds.clickId.logout}
        onClick={logUserOut}
        style={linkStyle}
      >
        Logout
      </Link>
      <div data-testid={dataTestIds.containerId.profile} style={roleStyle}>
        Role: customer
      </div>
    </div>
  );
};

const adminLinks = (logUserOut) => {
  return (
    <div data-testid={dataTestIds.containerId.navbar}>
      {commonLinks()}
      <Link
        data-testid={dataTestIds.linkId.orders}
        to="/orders"
        style={linkStyle}
      >
        Orders
      </Link>
      <Link
        data-testid={dataTestIds.linkId.users}
        to="/users"
        style={linkStyle}
      >
        Users
      </Link>
      <Link
        data-testid={dataTestIds.clickId.logout}
        to="/login"
        onClick={logUserOut}
        style={linkStyle}
      >
        Logout
      </Link>
      <div data-testid={dataTestIds.containerId.profile} style={roleStyle}>
        <p data-testid={dataTestIds.textId.role}>Role: admin</p>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const role = useSelector((state) => state.auth).role;
  const [links, setLinks] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    renderLinks(role);
  }, [role]);

  const logUserOut = (e) => {
    e.preventDefault();
    dispatch(logOut());
    navigate("/login");
  };

  const renderLinks = (role) => {
    let linksComponent = null;
    switch (role) {
      case "guest":
        linksComponent = guestLinks();
        break;
      case "customer":
        linksComponent = customerLinks(logUserOut);
        break;
      case "admin":
        linksComponent = adminLinks(logUserOut);
        break;
      default:
        break;
    }
    setLinks(linksComponent);
  };

  return <>{links}</>;
};
