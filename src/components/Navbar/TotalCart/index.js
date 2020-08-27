import React from "react";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { withStyles } from "@material-ui/core/styles";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 25,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    fontSize: "12px",
  },
}))(Badge);

const CardProductInTotal = (props) => {
  const total = props.checkout.lineItems.reduce(
    (prevValue, currentValue) => prevValue + currentValue.quantity,
    0
  );

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={total} style={{ color: "white" }}>
        <ShoppingCartIcon
          fontSize="large"
          style={{ color: "white", fontSize: "30px" }}
        />
      </StyledBadge>
    </IconButton>
  );
};

export default CardProductInTotal;
