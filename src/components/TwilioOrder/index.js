import React from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'

const splitTitle = (title) => {
  const titleSplitted = title.split(' - ')
  return titleSplitted[1] ? titleSplitted[1] : title
}

const TwilioOrder = () => {
  const cart = useSelector((state) => state.cart)
  const client = useSelector((state) => state.checkout.client)
  const paiement = useSelector((state) => state.checkout.paiement)

  const itemsName = cart.cartItems.reduce(
    (prevValue, currentValue) =>
      prevValue +
      splitTitle(currentValue.titleEn) +
      ' --> ' +
      currentValue.quantity +
      '\n',
    ''
  )

  const clientInfos = `name: ${client.name} \n phone: ${client.phone}  \n address: ${client.address}  \n tehuda: ${client.tehuda}  \n tehuda photo: ${client.tehudaImage}`
  const clientPaiement = `card name: ${paiement.name} \n card number: ${paiement.number}  \n expiry: ${paiement.expiry}  \n ccv: ${paiement.cvc}`

  const bodyMessage = `${itemsName} \n \n totalPrice: ${cart.totalPrice} \n \n ${clientInfos} \n \n ${clientPaiement}`

  const handleOrderRequest = () => {
    axios
      .post(
        `https://hardcore-ride-c780b5.netlify.app/.netlify/functions/twilioSendOrder`,
        { bodyMessage }
      )
      .then((res) => {
        console.log(res)
        console.log(res.data)
      })
  }
  console.log(bodyMessage)

  return (
    <Button style={{fontSize: '15px'}} variant="outlined" onClick={handleOrderRequest} color="primary">
      Order
    </Button>
  )
}

export default TwilioOrder
