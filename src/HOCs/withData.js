import React, { useEffect, useState, useContext } from "react";
import { Row, Col } from "reactstrap";

import { DataContext } from "../contexts/DataContext";

export default (WrappedComponent, selectData, fn) => {
  return props => {
    const [className, setState] = useState("unHover");
    const { data } = useContext(DataContext);
    const productData = selectData(data);
    return (
      <Row>
        {productData.map(({ name, image, id }) => (
          <Col sm="3">
            <WrappedComponent name={name} image={image}>
              <div onClick={fn.bind(this, id)}>{props.children}</div>
            </WrappedComponent>
          </Col>
        ))}
      </Row>
    );
  };
};
