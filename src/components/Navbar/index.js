import React from "react";
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler
} from "mdbreact";
import logo from "../../assets/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { Wrapper, MDBCollapseStyled, BouncyDiv } from "./style";
import TotalCart from "./TotalCart";

const NavbarPage = (props) => {
  const { t } = useTranslation()
  const [state, setState] = React.useState(false)
 
  const toggleCollapse = () => {
    setState({ isOpen: !state.isOpen });
  };

    return (
      <Wrapper>
        <div className="shopping-cart" onClick={props.handleCartOpen}>
          <TotalCart checkout={props.checkout} />
        </div>
        <MDBNavbar dark expand="md">
          <MDBNavbarBrand>
            <Link to="/">
              <BouncyDiv>
                <img
                  className="logo"
                  src={logo}
                  width="50px"
                  alt="logo rosano"
                />
              </BouncyDiv>
              <span style={{textDecoration: "underline"}}>
              <span className="rosano">Ro</span>
              <span className="s">s</span>
              <span className="rosano">ano</span>
              </span>
              <span className="s2">'s </span>
              <span className="city">City Market</span>
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            style={{ borderColor: "white", color: "red !important" }}
            onClick={toggleCollapse}
          />
          <MDBCollapseStyled id="navbarCollapse3" isOpen={state.isOpen} navbar>
            <LanguageSwitcher />
            <MDBNavbarNav left onClick={toggleCollapse}>
              <MDBNavItem active>
                <MDBNavLink to="/">{t("home")}</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/contact">{t("contact")}</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapseStyled>
        </MDBNavbar>
      </Wrapper>
    );
}

export default NavbarPage;
