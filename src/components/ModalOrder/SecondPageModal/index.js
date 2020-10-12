import React from 'react'
import Typography from '@material-ui/core/Typography';
import { TextFieldStyled } from '../style';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    textAlign: 'center',
    float: 'center',
    '& .MuiTextField-root': {
      margin: theme.spacing(0),
      width: 300,
    },
  },
}));

const FirstPageModal = () => {
  const classes = useStyles();
  return (
    <>
    <br />
    <Typography variant="subtitle1">Paiement</Typography>
    <br />
    <br />
    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <TextFieldStyled  required id="standard-required" label="Card Name" />
      <br />
      <br />
      <TextFieldStyled required id="standard-required" label="Card Number" />
      <br />
      <br />
      <TextFieldStyled required id="standard-required" label="Expiration Date" />
      <br />
      <br />
      <TextFieldStyled required id="standard-required" label="Digits" />
      <br />
      <br />
      </div>
    </form>
    </>
  )
}

export default FirstPageModal
