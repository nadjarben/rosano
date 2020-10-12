import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { toggleCart } from '../../../store/actions/app'
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

const CardProductInTotal = () => {
  const dispatch = useDispatch()
  const totalCart = useSelector(state => state.cart.totalItems)

  return (
    <IconButton aria-label="cart"
    onClick={() => dispatch(toggleCart())}
    >
      <StyledBadge badgeContent={totalCart} style={{ color: "white" }}>
        <ShoppingCartIcon
          fontSize="large"
          style={{ color: "white", fontSize: "30px" }}
        />
      </StyledBadge>
    </IconButton>
  );
};

export default CardProductInTotal;
