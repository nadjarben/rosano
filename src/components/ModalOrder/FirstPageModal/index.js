import React from 'react'
import Typography from '@material-ui/core/Typography'
import { TextFieldStyled } from '../style'
import { makeStyles } from '@material-ui/core/styles'
import ImagePicker from '../ImagePicker';

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
}))

const FirstPageModal = ({ handleChange, client, setClient }) => {
  const classes = useStyles()
  return (
    <>
      <br />
      <Typography variant="subtitle1">Personal informations :</Typography>
      <br />
      <br />
      <form className={classes.root} autoComplete="off">
        <div>
          <TextFieldStyled
            required
            id="fname standard-required"
            label="Name"
            type="text"
            value={client.name}
            onChange={handleChange('name')}
          />
          <br />
          <br />
          <TextFieldStyled
            required
            id="standard-required"
            type="tel"
            label="Phone"
            value={client.phone}
            onChange={handleChange('phone')}
          />
          <br />
          <br />
          <TextFieldStyled
            required
            id="standard-required"
            type="email"
            label="Email"
            value={client.email}
            onChange={handleChange('email')}
          />
          <br />
          <br />
          <TextFieldStyled
            required
            id="standard-required"
            type="text"
            label="Address"
            value={client.address}
            onChange={handleChange('address')}
          />
          <br />
          <br />
          <TextFieldStyled
            required
            id="standard-required"
            type="number"
            label="Tehuda Zeout"
            value={client.tehuda}
            onChange={handleChange('tehuda')}
          />
          <br />
          <br />
          <br />
          <div style={{float: 'left', justifyContent: 'left', textAlign: 'left', marginLeft: '30px'}}>
          <ImagePicker client={client} setClient={setClient} />
          </div>
        </div>
      </form>
    </>
  )
}

export default FirstPageModal
