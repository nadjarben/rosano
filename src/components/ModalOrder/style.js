import styled from 'styled-components'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'

export const DialogContentStyled = styled(DialogContent)`
  background-color: rgb(25, 25, 25);
  color: white;
 
  @media (min-width: 600px) {
    min-width: 500px;
  }
`

export const DialogTitleStyled = styled(DialogTitle)`
  background-color: rgb(25, 25, 25);
  color: white;
  text-align: center;
`

export const DialogActionsStyled = styled(DialogActions)`
  background-color: rgb(25, 25, 25);
  color: white;

  button {
    color: white;
  }
`

export const TextFieldStyled = styled(TextField)`
  .MuiInputBase-input {
    color: white;
    font-size: 15px;
    padding-top: 1vh;
    border-bottom: 2px solid white !important;
  }
  .MuiFormLabel-root {
    color: white;
    font-size: 15px;
  }
  .Mui-focused {
    border-color: red !important;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`

export const TextFieldSmStyled = styled(TextField)`
  width: 80px;
  .MuiInputBase-input {
    color: white;
    font-size: 15px;
    padding-top: 1vh;
    border-bottom: 2px solid white !important;
  }
  .MuiTextField-root {
    border-color: red !important;
  }
  .MuiFormLabel-root {
    color: white;
    font-size: 15px;
  }
  .Mui-focused {
    border-color: red !important;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`
