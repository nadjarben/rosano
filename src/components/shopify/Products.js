import React from "react";
import Grid from "@material-ui/core/Grid";
import ModalProduct from "../ModalProduct"

const Products = (props) => {
    let products;
    if (props.products) {
      products = props.products.filter(product=>product.productType === props.category).map(product=> {
        return (
          <Grid key={product.id.toString()} item xs={6} md={3}>
            <ModalProduct
              addVariantToCart={props.addVariantToCart}
              client={props.client}
              product={product}
            />
          </Grid>
        );
      });
    } else {
      products = <p>Loading...</p>;
    }
    products.reverse(); // CHFE 2018.10.15 - this makes it so the products are shown newest to oldest on first load
    return (
      <Grid container justify="center" spacing={2}>
        {products}
      </Grid>
    );
}

export default Products;
