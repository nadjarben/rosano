import React, { Component } from "react";
import { withTranslation } from 'react-i18next';
//import VariantSelector from "./VariantSelector";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Wrapper } from "./style";

//const ONE_SIZE_FITS_MOST = "One Size Fits Most";

class Product extends Component {
  constructor(props) {
    super(props);

    let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = { selectedOptions: defaultOptionValues };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
    this.splitTitle = this.splitTitle.bind(this);
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

  splitTitle(title){
    console.log(this.props.i18n.language, "test")
    const titleSplitted = title.split(" - ")
    return this.props.i18n.language === "he" ? titleSplitted[0] : titleSplitted[1]
  }

  render() {
    let variantImage =
    this.state.selectedVariantImage || this.props.product.images[0];
    let variant = this.state.selectedVariant || this.props.product.variants[0];
    //let variantQuantity = this.state.selectedVariantQuantity || 1;
    return (
      <Wrapper>
        <Card style={{ borderRadius: "10px" }}> 
          <CardActionArea>
            <CardMedia style={{ marginTop: "20px" }}>
              {this.props.product.images.length ? (
                <img
                  src={variantImage.src}
                  alt={`${this.props.product.title} product shot`}
                />
              ) : null}
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{minHeight: "40px", textAlign: "center"}}>
                {this.splitTitle(this.props.product.title)}
              </Typography>
              <div className="price-container">
                {variant.compareAtPrice && (
                  <Typography
                    className="text-line-through"
                    variant="h6"
                    component="p"
                  >
                    ₪{variant.compareAtPrice}
                  </Typography>
                )}
                <Typography
                  className="text-price"
                  variant="h5"
                  component="p"
                >
                  ₪{variant.price}
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Wrapper>
    );
  }
}

export default withTranslation()(Product);
