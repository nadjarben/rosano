import React from "react";
import SocialNetworks from "./SocialNetworks";
import { Wrapper } from "./style";

const Footer = () => {
  return (
    <Wrapper>
      <SocialNetworks />
      <div className="footer">
      <span className="footer-title">Rosano City Market</span>
      <span className="footer-copyright"> © 2020</span>
      </div>
    </Wrapper>
  );
};

export default Footer;
