import React from "react";
import { Row, Col } from "react-bootstrap";

const taxesFees = props => {
  return (
    <Row className="show-grid my-row">
      <Col md={6}>Estimated Taxes & Fees</Col>
      <Col md={6} className="values">
        {`$${props.taxesFees}`}
      </Col>
    </Row>
  );
};

export default taxesFees;
