import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "../../assets/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { Wrapper, BouncyDiv } from "./style";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Wrapper>
        <div className="shopping-cart" onClick={this.props.handleCartOpen}>
          <ShoppingCartIcon
            fontSize="large"
          />
        </div>
        <MDBNavbar dark expand="md">
          <MDBNavbarBrand>
            <Link to="/">
              <BouncyDiv><img className="logo" src={logo} width="50px" alt="logo rosano" /></BouncyDiv>
              <p>Rosano City Market</p>
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            style={{ borderColor: "white" }}
            onClick={this.toggleCollapse}
          />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <LanguageSwitcher />
            <MDBNavbarNav left onClick={this.toggleCollapse}>
              <MDBNavItem active>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/contact">Contact</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/pricing">Pricing</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Wrapper>
    );
  }
}

export default NavbarPage;
