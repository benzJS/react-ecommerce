import React, { useContext, useEffect } from "react";
import { Button, Container, Row, Col } from "reactstrap";

import { Product } from "./Products";
import { DataContext } from "../contexts/DataContext";
import withData from "../HOCs/withData";

export default function(props) {
  const { cart, removeFromCart } = useContext(DataContext);
  const ProductWithHover = withData(
    Product,
    data => {
      return cart.map(id => data.find(item => item.id === id));
    },
    removeFromCart
  );
  useEffect(() => {
    console.log(props);
  });
  return (
    <Container>
      <h2>Cart</h2>
      <ProductWithHover>
        <Button>Remove</Button>
      </ProductWithHover>
    </Container>
  );
}
