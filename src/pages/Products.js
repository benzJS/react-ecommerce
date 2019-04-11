import React, { useContext } from "react";
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// import RenderItems from "../components/RenderItems";
import withData from "../HOCs/withData";
import { DataContext } from "../contexts/DataContext";

export const Product = props => {
  const { name, image, children } = props;
  return (
    <Card id={name}>
      <CardImg top width="100%" src={image} alt="Card image cap" />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <div>{children}</div>
      </CardBody>
    </Card>
  );
};

export default function(props) {
  const { addToCart } = useContext(DataContext);
  const ProductCart = withData(Product, data => data, addToCart);
  return (
    <Container>
      <h2>Products</h2>
      <ProductCart>
        <Button>Add to cart</Button>
      </ProductCart>
    </Container>
  );
}
