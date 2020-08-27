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
//import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "../../assets/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { Wrapper, BouncyDiv } from "./style";
import TotalCart from "./TotalCart";

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
          <TotalCart checkout={this.props.checkout} />
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
              Rosano City Market
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            style={{ borderColor: "white", color: "red !important" }}
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
