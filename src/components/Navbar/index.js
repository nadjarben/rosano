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
  MDBFormInline,
} from "mdbreact";
import logo from "../../assets/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { Wrapper, MDBNavItemStyled } from "./style";

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
        <MDBNavbar color="indigo" dark expand="md">
          <MDBNavbarBrand>
            <Link to="/">
              <img src={logo} width="50px" alt="logo" />
              <p>Rosano City Market</p>
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler style={{borderColor: "white"}} onClick={this.toggleCollapse} />
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
            <MDBNavbarNav right>
              <MDBNavItemStyled>
                <MDBFormInline waves>
                  <div className="md-form my-0">
                    <input
                      className="form-control mr-sm-2"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </MDBFormInline>
              </MDBNavItemStyled>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Wrapper>
    );
  }
}

export default NavbarPage;
