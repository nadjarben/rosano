import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { ImageStyled, InputStyled, Background } from "./style";
import CardProduct from "../CardProduct";

const styles = (theme, props) => ({
  root: {
    margin: 0,
    color: "white",
    backgroundColor: "black",
    minWidth: 350,
    padding: theme.spacing(2),
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  closeButtonRight: {
    fontSize: "40px",
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "white",
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography className={classes.title} variant="h6">
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButtonRight}
          onClick={onClose}
        >
          <CloseIcon fontSize="large" />
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

const DialogActionsStyled = withStyles((theme) => ({
  root: {
    margin: "auto",
  width: "20%",
  padding: "10px"
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
    };

    const splitTitle = () => {
      const titleSplitted = this.props.product.title.split(" - ");
      return this.props.i18n.language === "he" ? (
        <DialogTitle
          onClose={() => this.setState({ open: false })}
          style={{ textAlign: "center" }}
        >
          {titleSplitted[0]}
        </DialogTitle>
      ) : (
        <DialogTitle
          onClose={() => this.setState({ open: false })}
          style={{ textAlign: "center" }}
        >
          {titleSplitted[1]}
        </DialogTitle>
      );
    };

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
          <Background>
            {splitTitle()}
            <DialogContent dividers>
              {this.props.product.images.length ? (
                <ImageStyled
                  src={variantImage.src}
                  alt={`${this.props.product.title} product shot`}
                />
              ) : null}
              <Typography
                style={{ textAlign: "center" }}
                variant="h5"
                gutterBottom
                className="product-info"
              >
                {this.props.product.description}
              </Typography>
              <Typography
                style={{ textAlign: "center",
                margin: "auto",
                width: "20%",
                padding: "10px"              
              }}
                variant="h5"
                gutterBottom
                className="product-info"
              >
                ₪{variant.price}
              </Typography>
            </DialogContent>
            <DialogActionsStyled>
              <label className="Product__option">
                {this.props.t("Quantity")}{" "}
                <InputStyled
                  className="form-control"
                  min="1"
                  type="number"
                  defaultValue={variantQuantity}
                  onChange={this.handleQuantityChange}
                />
              </label>
            </DialogActionsStyled>
            <DialogActions>
              <button className="Product__buy button" onClick={addProduct}>
                Add to Cart
              </button>
            </DialogActions>
          </Background>
        </Dialog>
      </>
    );
  }
}

export default withTranslation()(Product);
