import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCart } from '../../store/actions/app'
import LineItem from './LineItem'
//import TwilioOrder from "../TwilioOrder"
import ModalOrder from '../ModalOrder'

const Cart = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const lang = useSelector((state) => state.app.language)
  const cartOpen = useSelector((state) => state.app.cartOpen)
  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalPrice = useSelector((state) => state.cart.totalPrice)

  let line_items
  if (cartItems) {
    line_items = cartItems.map((cartItem) => {
      return <LineItem key={cartItem._id} cartItem={cartItem} />
    })
  } else {
    return <p>Loading...</p>
  }

  return (
    <div
      style={{ color: 'black' }}
      className={`Cart ${cartOpen ? 'Cart--open' : ''}`}
    >
      <header className="Cart__header">
        <h2 style={{textAlign: 'center'}}>{t('Your cart')}</h2>
        <button onClick={() => dispatch(toggleCart())} className="Cart__close">
          ×
        </button>
      </header>
      <ul className="Cart__line-items">{line_items}</ul>
      <footer className="Cart__footer">
        {/*}
        <div className="Cart-info clearfix">
          <div className="Cart-info__total Cart-info__small">Subtotal</div>
          {cartItems && (
            <div className="Cart-info__pricing">
              <span className="pricing">₪ {totalCart}</span>
            </div>
          )}
        </div>
        <div className="Cart-info clearfix">
          <div className="Cart-info__total Cart-info__small">Taxes</div>
          {cartItems && (
            <div className="Cart-info__pricing">
              <span className="pricing">₪ totalTax</span>
            </div>
          )}
        </div>
          */}
          {lang === 'he' ? 
          <div className="Cart-info clearfix" >
          {cartItems && (
            <div className="Cart-info__pricing-he">
              <span className="pricing-he">
                {' '}
                ₪
                {totalPrice}
              </span>
            </div>
          )}
          <div className="Cart-info__total-he">{t('Total')}</div>
        </div>
         :
         <div className="Cart-info clearfix">
         <div className="Cart-info__total">{t('Total')}</div>
         {cartItems && (
           <div className="Cart-info__pricing">
             <span className="pricing">
               {' '}
               ₪
               {totalPrice}
             </span>
           </div>
         )}
       </div>
        }
        {/*
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Donation Amount</div>
            { this.props.checkout && <div className="Cart-info__pricing">
              <span className="pricing">~₪ {(this.props.checkout.totalPrice * .35).toFixed(2)}</span>
            </div> }
          </div>
          */}
        {/*
            <button className="Cart__checkout button" onClick={this.openCheckout}>Checkout</button>
          */}
        <ModalOrder />
      </footer>
    </div>
  )
}

export default Cart
