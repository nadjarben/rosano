import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'


export const Wrapper = styled.div`
`

export const TypographyHe = styled(Typography)`
  font-weight: bold !important;
  text-align: right;
  font-size: 15px !important;
  padding-right: 15%;
`
export const DialogContentStyled = styled(DialogContent)`
  background-color: #eeeeee;
  color: black;
 
  @media (min-width: 600px) {
    min-width: 500px;
  }
`

export const DialogTitleStyled = styled(DialogTitle)`
  background-color: rgb(25, 25, 25);
  color: white;
  font-weight: bold;
  text-align: center;
  .MuiTypography-h6 {
    font-size: 16px !important;
  }
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
    color: black;
    font-size: 15px;
    padding-top: 1vh;
  }
  .MuiFormLabel-root {
    color: black;
    font-size: 15px;
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
    color: black;
    font-size: 15px;
    padding-top: 1vh;
    border-bottom: 2px solid black !important;
  }
  .MuiFormLabel-root {
    color: black;
    font-size: 15px;
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
