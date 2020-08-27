import React from "react";
import Container from "@material-ui/core/Container";
import Products from "../shopify/Products";
import { connect } from "react-redux";
import { Wrapper } from "./style";
import store from "../../store/store";

class GenericProductsPage extends React.Component {
  constructor() {
    super();
    this.addVariantToCart = this.addVariantToCart.bind(this);
  }
  addVariantToCart(variantId, quantity) {
    const state = store.getState(); // state from redux store
    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
    const checkoutId = state.checkout.id;
    state.client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then((res) => {
        store.dispatch({
          type: "ADD_VARIANT_TO_CART",
          payload: { isCartOpen: true, checkout: res },
        });
      });
  }

  render() {
    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
    console.log(this.props);
    const state = store.getState(); // state from redux store
    let oProducts = (
      <Products
        products={state.products}
        client={state.client}
        category={state.category}
        addVariantToCart={this.addVariantToCart}
      />
    );
    return (
      <Wrapper>
        <h1>{capitalizeFirstLetter(this.props.category)}</h1>
        <Container>{oProducts}</Container>
      </Wrapper>
    );
  }
}

export default connect((state) => state)(GenericProductsPage);
