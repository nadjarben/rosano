import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem, clearItemFromCart } from '../../store/actions/cart'

const LineItem = (props) => {
  const dispatch = useDispatch()
  const language = useSelector(state => state.app.language)
  return (
    <li className="Line-item">
      <div className="Line-item__img">
        {props.cartItem.image ? (
          <img
            src={props.cartItem.image}
            alt={`${props.cartItem.titleHe} product shot`}
            className="line-item-pic"
          />
        ) : null}
      </div>
      <div className="Line-item__content">
        <div className="Line-item__content-row">
          <span className="Line-item__title">
            {language === 'he' && props.cartItem.titleHe}
              {language === 'fr' && props.cartItem.titleFr}
              {language === 'en' && props.cartItem.titleEn}

            </span>
        </div>
        <div className="Line-item__content-row">
          <div className="Line-item__quantity-container">
            <button
              className="Line-item__quantity-update"
              onClick={() => dispatch(removeItem(props.cartItem))}
            >
              -
            </button>
            <span className="Line-item__quantity">
              {props.cartItem.quantity}
            </span>
            <button
              className="Line-item__quantity-update"
              onClick={() => dispatch(addItem(props.cartItem))}
            >
              +
            </button>
          </div>
          <span className="Line-item__price">
            ₪ {(props.cartItem.quantity * props.cartItem.realPrice).toFixed(2)}
          </span>
          <button className="Line-item__remove"
                        onClick={() => dispatch(clearItemFromCart(props.cartItem))}
          >×</button>
        </div>
      </div>
    </li>
  )
}

export default LineItem
