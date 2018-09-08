import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Subtotal extends Component {
  render() {
    return (
      <Row className="show-grid my-row">
        <Col md={6}>Subtotal</Col>
        <Col md={6} className="values">
          {`$${this.props.price}`}
        </Col>
      </Row>
    );
  }
}

export default Subtotal;
