import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { TextFieldStyled, TypographyHe } from '../style'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
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
  const { t } = useTranslation()
  const classes = useStyles()

  const lang = useSelector(state => state.app.language)
  return (
    <>
      <br />
      {lang === 'he' ? <TypographyHe  variant="h6">{t("Personal informations")}</TypographyHe> :
       <Typography  variant="h6">{t("Personal informations")}</Typography>
      }
      <br />
      <form className={classes.root} autoComplete="off">
        <div>
          <TextFieldStyled
            required
            dir={lang === 'he' ? 'rtl' : 'ltr'}
            id="fname standard-required"
            label={t('name')}
            type="text"
            value={client.name}
            onChange={handleChange('name')}
          />
          <br />
          <br />
          <TextFieldStyled
            required
            dir={lang === 'he' ? 'rtl' : 'ltr'}
            id="standard-required"
            type="tel"
            label={t('phone')}
            value={client.phone}
            onChange={handleChange('phone')}
          />
          <br />
          <br />
          <TextFieldStyled
            required
            dir={lang === 'he' ? 'rtl' : 'ltr'}
            id="standard-required"
            type="email"
            label={t('email')}
            value={client.email}
            onChange={handleChange('email')}
          />
          <br />
          <br />
          <TextFieldStyled
            required
            dir={lang === 'he' ? 'rtl' : 'ltr'}
            id="standard-required"
            type="text"
            label={t('address')}
            value={client.address}
            onChange={handleChange('address')}
          />
          <br />
          <br />
          <TextFieldStyled
            required
            dir={lang === 'he' ? 'rtl' : 'ltr'}
            id="standard-required"
            type="number"
            label={t('tehuda')}
            value={client.tehuda}
            onChange={handleChange('tehuda')}
          />
          <br />
          <br />
          <br />
          <div style={{float: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <ImagePicker client={client} setClient={setClient} />
          </div>
        </div>
      </form>
    </>
  )
}

export default FirstPageModal
