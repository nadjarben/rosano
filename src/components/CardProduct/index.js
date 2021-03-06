import React from 'react'
import { useSelector } from 'react-redux'
import ButtonsAdmin from './ButtonsAdmin'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Wrapper } from './style'

const CardProduct = (props) => {
  const adminMode = useSelector((state) => state.admin.adminMode)
  const language = useSelector((state) => state.app.language)
  return (
        <Wrapper
          bg={adminMode && !props.product.available ? '#808080' : '#eeeeee'}
          textColor={adminMode && !props.product.available ? 'white' : 'black'}
          line={adminMode && !props.product.available ? 'white' : 'grey'}
        >
          <Card style={{ borderRadius: '10px' }}>
            {adminMode && <ButtonsAdmin product={props.product} />}
            <div onClick={() => props.setOpen(true)}>
              <CardActionArea>
                <CardMedia style={{ marginTop: '20px' }}>
                  {props.product.image ? 
                 <img
                 src={props.product.image}
                 alt={`${props.product.titleHe} product shot`}
               /> :
               <img
                    src="https://static.thenounproject.com/png/1174579-200.png"
                    alt={`${props.product.titleHe} product shot`}
                  /> 
                }
                </CardMedia>
                <CardContent>
                  <div
                    style={{
                      minHeight: '40px',
                      textAlign: 'center',
                      lineHeight: '1px',
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      style={{ fontWeight: 'bold' }}
                    >
                      {language === 'he' && props.product.titleHe}
                      {language === 'fr' && props.product.titleFr}
                      {language === 'en' && props.product.titleEn}
                    </Typography>
                    <p>({props.product.liter}cl)</p>
                  </div>
                  <div className="price-container">
                    <Typography
                      className="text-line-through"
                      variant="h6"
                      component="p"
                    >
                      {props.product.price !== props.product.realPrice &&
                        `₪${props.product.price}`}
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
            </div>
          </Card>
        </Wrapper>

  )
}

export default CardProduct
