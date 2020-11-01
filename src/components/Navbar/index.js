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
  const [isOpen, setIsOpen] = React.useState(false)
 
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
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
                  width="100px"
                  alt="logo rosano"
                />
              </BouncyDiv>
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            style={{ borderColor: "white", color: "red !important" }}
            onClick={toggleCollapse}
          />
          <MDBCollapseStyled id="navbarCollapse3" isOpen={isOpen} navbar>
            <LanguageSwitcher toggleCollapse={toggleCollapse} />
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
