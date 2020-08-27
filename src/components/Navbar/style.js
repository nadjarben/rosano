import styled, { keyframes } from "styled-components";
import { zoomInUp } from "react-animations";

export const Wrapper = styled.div`
    font-family: 'Alef', sans-serif;
  text-transform: uppercase;
  font-size: 18px;

  .logo {
    margin-left: auto;
    margin-right: auto;
  }

  .shopping-cart {
    position: absolute;
    right: 80px;
    top: 16px;
    z-index: 1000;
    cursor: pointer;
  }
`;

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
