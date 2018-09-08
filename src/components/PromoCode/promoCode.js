import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Collapse,
  Well,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import { connect } from "react-redux";

import { handleChange } from "../../store/actions/promoCodeActions";

class PromoCode extends Component {
  state = {
    open: false
  };

  handleChange = e => {
    this.props.handleChange(e);
  };
  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          style={{ outline: "none" }}
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Apply ` : `Hide `}
          promo code {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Row className="show-grid">
                <Col md={12}>
                  <Form>
                    <FormGroup controlId="formInLineName">
                      <ControlLabel>Promo Code</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Enter promo code"
                        // value={this.props.promoCode}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <Button
                      className="apply-promo-btn"
                      bsStyle="success"
                      block
                      onClick={this.props.giveDiscount}
                      disabled={this.props.isDisabled}
                    >
                      Apply
                    </Button>
                  </Form>
                </Col>
              </Row>
              <FormGroup />
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    promoCode: state.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: e => dispatch(handleChange(e))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PromoCode);
