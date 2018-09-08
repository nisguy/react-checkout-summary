import React, { Component } from "react";
import "./App.css";
import { Grid } from "react-bootstrap";
import { connect } from "react-redux";

import Subtotal from "./components/Subtotal/Subtotal";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import TaxesFees from "./components/TaxesFees/taxesFees";
import EstTotal from "./components/EstimatedTotal/estimatedTotal";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import PromoCode from "./components/PromoCode/promoCode";

class App extends Component {
  state = {
    subtotal: 100,
    pickupSavings: -3.85,
    taxesFees: 0,
    estTotal: 0,
    actualPrice: 104.56,
    quantity: 1,
    disablePromoBtn: false
  };

  componentDidMount() {
    this.setState(
      { taxesFees: (this.state.subtotal + this.state.pickupSavings) * 0.0875 },
      () => {
        this.setState({
          estTotal: (
            this.state.subtotal +
            this.state.pickupSavings +
            this.state.taxesFees
          ).toFixed(2)
        });
      }
    );
  }

  giveDiscountHandler = event => {
    event.preventDefault();
    console.log(this.props.promoCode);
    if (this.props.promoCode === "DISCOUNT") {
      const newEstTotal = this.state.estTotal * 0.9;
      this.setState({ disablePromoBtn: true });
      this.setState({ estTotal: newEstTotal });
    } else {
      console.log("Code not valid.");
    }
  };

  render() {
    return (
      <div className="container">
        <Grid className="purchase-card">
          <Subtotal price={this.state.subtotal.toFixed(2)} />
          <PickupSavings pickupSavings={this.state.pickupSavings.toFixed(2)} />
          <TaxesFees taxesFees={this.state.taxesFees.toFixed(2)} />
          <hr />
          <EstTotal estTotal={this.state.estTotal} />
          <ItemDetails
            actualPrice={this.state.actualPrice}
            quantity={this.state.quantity}
          />
          <PromoCode
            isDisabled={this.state.disablePromoBtn}
            giveDiscount={this.giveDiscountHandler}
          />
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    promoCode: state.value
  };
};

export default connect(mapStateToProps)(App);
