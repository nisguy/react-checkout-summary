import React from "react";
import { Row, Col } from "react-bootstrap";

const EstimatedTotal = props => {
  return (
    <Row className="show-grid my-row">
      <Col md={6}>
        <h2>Est. Total</h2>
      </Col>
      <Col md={6} className="total">
        <h2>{`$${props.estTotal}`}</h2>
      </Col>
    </Row>
  );
};

export default EstimatedTotal;
