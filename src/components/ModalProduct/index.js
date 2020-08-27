import React, { Component } from "react";
//import VariantSelector from "./VariantSelector";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { ImageStyled } from "./style";
import CardProduct from "../CardProduct";

//const ONE_SIZE_FITS_MOST = "One Size Fits Most";

const styles = (theme) => ({
  root: {
    margin: 0,
    width: 500,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

class Product extends Component {
  constructor(props) {
    super(props);

    let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = { selectedOptions: defaultOptionValues, open: false };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
  }

  findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter(function(image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  handleOptionChange(event) {
    const target = event.target;
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.props.client.product.helpers.variantForOptions(
      this.props.product,
      selectedOptions
    );

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image,
    });
  }

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value,
    });
  }

  handleClickOpen() {
    this.setState({
      open: true,
    });
  }

  render() {
    const handleClose = () => {
      this.setState({ open: false });
    };

    const addProduct = () => {
      this.props.addVariantToCart(variant.id, variantQuantity);
      handleClose();
    }

    let variantImage =
      this.state.selectedVariantImage || this.props.product.images[0];
    let variant = this.state.selectedVariant || this.props.product.variants[0];
    let variantQuantity = this.state.selectedVariantQuantity || 1;
    return (
      <>
        <div onClick={() => this.setState({ open: true })}>
          <CardProduct product={this.props.product} />
        </div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle
            onClose={() => this.setState({ open: false })}
          >
            {this.props.product.title}
          </DialogTitle>
          <DialogContent dividers>
            {this.props.product.images.length ? (
              <ImageStyled
                src={variantImage.src}
                alt={`${this.props.product.title} product shot`}
              />
            ) : null}
            <Typography gutterBottom>
              {this.props.product.description}
            </Typography>
            <Typography gutterBottom>₪{variant.price}</Typography>
          </DialogContent>
          <DialogActions>
            <label className="Product__option">
              Quantity:{" "}
              <input
                className="form-control"
                min="1"
                type="number"
                defaultValue={variantQuantity}
                onChange={this.handleQuantityChange}
              ></input>
            </label>
          </DialogActions>
          <DialogActions>
            <button
              className="Product__buy button"
              onClick={addProduct}
            >
              Add to Cart
            </button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default Product;
