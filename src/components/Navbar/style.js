import styled, { keyframes } from "styled-components";
import { zoomInUp } from "react-animations";
import {
  MDBCollapse,
} from "mdbreact";

export const Wrapper = styled.div`
  font-family: "Arimo", sans-serif;
  text-transform: uppercase;
  font-size: 18px;
  background-color: rgb(25, 25, 25);

  .navbar-toggler:focus {
    outline: 1px black;
  }

  .logo {
    margin-left: auto;
    margin-right: auto;
    width: 250px;
    padding: 15px;
  }
  
  .shopping-cart {
    position: absolute;
    right: 80px;
    top: 39px;
    z-index: 1000;
    cursor: pointer;
  }
`;

export const MDBCollapseStyled = styled(MDBCollapse)`
  text-align: center;
  @media (min-width: 600px) {
    margin-left: 100px;
  }
`

export const LanguageWrapper = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  z-index: 100;
`;

const bounceAnimation = keyframes`${zoomInUp}`;

export const BouncyDiv = styled.div`
  animation: 3s ${bounceAnimation};
`;
