import React from "react";
import { useSelector } from 'react-redux'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Wrapper } from "./style";

const CardProduct = (props) => {
  const language = useSelector(state => state.app.language)
    return (
      <Wrapper>
        <Card style={{ borderRadius: "10px" }}> 
          <CardActionArea>
            <CardMedia style={{ marginTop: "20px" }}>
                <img
                  src={props.product.image}
                  alt={`${props.product.titleFr} product shot`}
                />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{minHeight: "40px", textAlign: "center"}}>
              {language === 'he' && props.product.titleHe}
              {language === 'fr' && props.product.titleFr}
              {language === 'en' && props.product.titleEn}
              </Typography>
              <div className="price-container">
                  <Typography
                    className="text-line-through"
                    variant="h6"
                    component="p"
                  >
                    {props.product.price !== props.product.realPrice && `₪${props.product.price}` }
                  </Typography>
                <Typography
                  className="text-price"
                  variant="h5"
                  component="p"
                >
                  ₪{props.product.realPrice}
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Wrapper>
    );
}

export default CardProduct;
