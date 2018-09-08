import React from "react";
import { OverlayTrigger, Tooltip, Row, Col } from "react-bootstrap";

const pickupSavings = props => {
  const tooltip = (
    <Tooltip id="tooltip">
      <p>
        Picking up order in the store helps cut costs, and we pass the savings
        on to you.
      </p>
    </Tooltip>
  );
  return (
    <Row className="show-grid my-row">
      <Col md={6}>
        <OverlayTrigger placement="left" overlay={tooltip}>
          <div style={{ textDecoration: "underline" }}>Pickup Savings</div>
        </OverlayTrigger>
      </Col>
      <Col
        md={6}
        className="values"
        style={{ color: "red", fontWeight: "800" }}
      >{`$ ${props.pickupSavings}`}</Col>
    </Row>
  );
};

export default pickupSavings;
