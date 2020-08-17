import React from "react";
import { useTranslation } from "react-i18next";
import flagen from "../../../assets/flags/flag-en.png";
import flagfr from "../../../assets/flags/flag-fr.png";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import Divider from '@material-ui/core/Divider';
import ListItem from "@material-ui/core/ListItem";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    backgroundColor: "white",
    width: "150px",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const useStyles = makeStyles((theme) => ({
  div: {
  },
  item: {
    marginTop: "5px",
    display: "flex",
    "&:hover": {
      backgroundColor: "lightgrey",
      cursor: "pointer",
    }
  },
  label: {
    marginLeft: "5px",
    marginTop: "0px"
  }
}));

const LocaleSwitcher = ({ t, lang }) => {
  const { i18n } = useTranslation();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    handleClose();
  };

  return (
    <>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        style={{ backgroundColor: "transparent", boxShadow: "none", zIndex: 100000 }}
        onClick={handleClick}
      >
        {i18n.language === "en" && (
          <img src={flagen} alt="flagen" width="30px" />
        )}

        {i18n.language === "fr" && (
          <img src={flagfr} alt="flagfr" width="30px" />
        )}
        {i18n.language === "he" && (
          <img src={flagen} alt="flagen" width="30px" />
        )}
      </Button>
      <StyledMenu
        id="customized-menu"
        style={{ float: "center", textAlign: "center" }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className={classes.div}>
        <Divider />
          <ListItem className={classes.item}>
            <div onClick={() => changeLanguage("en")} className={classes.item}>
              <img src={flagen} alt="flagen" width="30px" height="30px" />
             <p className={classes.label}>English</p>
            </div>
          </ListItem>
          <Divider />
          <ListItem className={classes.item}>
            <div onClick={() => changeLanguage("fr")} className={classes.item}>
              <img src={flagfr} alt="flagfr" width="30px" height="30px" />
              <p className={classes.label}>Français</p>
            </div>
          </ListItem>
          <Divider />
        </div>
      </StyledMenu>
    </>
  );
};
export default LocaleSwitcher;
