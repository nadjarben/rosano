import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { changeLanguage } from '../../../store/actions/app'
import flagen from '../../../assets/flags/flag-en.png'
import flagfr from '../../../assets/flags/flag-fr.png'
import flaghe from '../../../assets/flags/flag-he.png'
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    backgroundColor: 'white',
    width: '150px',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))

const useStyles = makeStyles((theme) => ({
  div: {},
  item: {
    marginTop: '5px',
    display: 'flex',
    '&:hover': {
      backgroundColor: 'lightgrey',
      cursor: 'pointer',
    },
  },
  label: {
    marginLeft: '8px',
    marginTop: '5px',
    fontSize: '15px',
  },
}))

const LocaleSwitcher = ({ t, lang, toggleCollapse }) => {
  const { i18n } = useTranslation()
  const dispatch = useDispatch()
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  React.useEffect(() => {
    dispatch(changeLanguage(i18n.language))
  }, [])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const updateLanguage = (lang) => {
    i18n.changeLanguage(lang)
    dispatch(changeLanguage(lang))
    handleClose()
    toggleCollapse()
  }

  return (
    <>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        style={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          zIndex: 10,
        }}
        onClick={handleClick}
      >
        {i18n.language === 'en' && (
          <img src={flagen} alt="flagen" width="30px" />
        )}

        {i18n.language === 'fr' && (
          <img src={flagfr} alt="flagfr" width="30px" />
        )}
        {i18n.language === 'he' && (
          <img src={flaghe} alt="flagen" width="30px" />
        )}
      </Button>
      <StyledMenu
        id="customized-menu"
        style={{ float: 'center', textAlign: 'center' }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className={classes.div}>
          <Divider />
          <ListItem className={classes.item}>
            <div onClick={() => updateLanguage('he')} className={classes.item}>
              <img src={flaghe} alt="flaghe" width="30px" height="30px" />
              <p className={classes.label}>עברית</p>
            </div>
          </ListItem>
          <Divider />
          <ListItem className={classes.item}>
            <div onClick={() => updateLanguage('en')} className={classes.item}>
              <img src={flagen} alt="flagen" width="30px" height="30px" />
              <p className={classes.label}>English</p>
            </div>
          </ListItem>
          <Divider />
          <ListItem className={classes.item}>
            <div onClick={() => updateLanguage('fr')} className={classes.item}>
              <img src={flagfr} alt="flagfr" width="30px" height="30px" />
              <p className={classes.label}>Français</p>
            </div>
          </ListItem>
          <Divider />
        </div>
      </StyledMenu>
    </>
  )
}
export default LocaleSwitcher
