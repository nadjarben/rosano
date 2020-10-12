import React from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import { TextFieldStyled, TextFieldSmStyled } from '../style'

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name })
  }

  handleInputChange = (e) => {
    const { name, value } = e.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div
        id="PaymentForm"
        style={{
          justifyContent: 'center',
          textAlign: 'center',
          float: 'center',
          '& .MuiTextField-root': {
            width: 300,
          },
        }}
      >
        <br />
        <br />
        <br />
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <br />
        <br />
        <br />
        <form>
          <TextFieldStyled
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <br />
          <br />
          <TextFieldStyled
            type="name"
            name="name"
            placeholder="Card Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <br />
          <br />
          <TextFieldSmStyled
            id="inputExpDate"
            placeholder="MM / YY"
            maxlength="7"
            name="expiry"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <br />
          <br />
          <TextFieldSmStyled
            name="cvc"
            id="field"
            type="number"
            maxlength="3"
            pattern="([0-9]|[0-9]|[0-9])"
            placeholder="cvc"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <br />
        </form>
      </div>
    )
  }
}
