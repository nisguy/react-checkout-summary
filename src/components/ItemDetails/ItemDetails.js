import React, { Component } from "react";
import { Row, Col, Button, Collapse, Well, Media } from "react-bootstrap";

class ItemDetails extends Component {
  state = {
    open: false
  };
  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
          style={{ outline: "none" }}
        >
          {this.state.open === false ? `See` : `Hide`} item details{" "}
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Media>
                <Media.Left>
                  <img
                    src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                    width={100}
                    height={100}
                    alt="Thumbnail"
                  />
                </Media.Left>
                <Media.Body>
                  <p>
                    Essentials by OFM ESS-3085 Racing Style Leather Gaming
                    Chair, Red
                  </p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong>{`$${this.props.actualPrice}`}</strong>
                      <br />
                      <strong
                        style={{
                          textDecoration: "line-through",
                          color: "grey"
                        }}
                      >{`$${this.props.actualPrice}`}</strong>
                    </Col>
                    <Col md={6} className="values">
                      <strong>{`Qty: ${this.props.quantity}`}</strong>
                    </Col>
                  </Row>
                </Media.Body>
              </Media>
            </Well>
            <hr />
          </div>
        </Collapse>
      </div>
    );
  }
}

export default ItemDetails;
