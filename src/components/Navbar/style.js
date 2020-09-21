import styled, { keyframes } from "styled-components";
import { zoomInUp } from "react-animations";
import {
  MDBCollapse,
} from "mdbreact";

export const Wrapper = styled.div`
  font-family: "Arimo", sans-serif;
  text-transform: uppercase;
  font-size: 18px;

  .logo {
    margin-left: auto;
    margin-right: auto;
  }
  .rosano {
    font-weight: bold;
    font-size: 18px;
    font-family: 'Alef', sans-serif !important;
  }
  .s {
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
    padding-right: 2px;
  }
  .s2 {
    font-size: 14px;
    font-style: italic;
    padding-right: 2px;
  }
  .city {
    font-size: 14px;
  }

  .shopping-cart {
    position: absolute;
    right: 80px;
    top: 19px;
    z-index: 1000;
    cursor: pointer;
  }
`;

export const MDBCollapseStyled = styled(MDBCollapse)`
  text-align: center;
`


export const LanguageWrapper = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  z-index: 100;
`;

const bounceAnimation = keyframes`${zoomInUp}`;

export const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation};
`;
