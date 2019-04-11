import React, { useContext } from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";

import { DataContext } from "../contexts/DataContext";

export default function() {
  const { cart } = useContext(DataContext);
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand>
        <Link to="/">Home</Link>
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink>
            <Link to="products">Products</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="cart">Cart ({cart.length})</Link>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
