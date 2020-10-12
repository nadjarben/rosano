import React from "react";
import Divider from "@material-ui/core/Divider";
import SocialNetworks from "./SocialNetworks";
import { Wrapper } from "./style";
//import Banner from "../Banner";

const Footer = () => {
  return (
    <Wrapper>
      <Divider />
      <SocialNetworks />
      <Divider />
      <div className="footer">
        <span className="footer-title">Rosano City Market</span>
        <span className="footer-copyright"> © 2020</span>
      </div>
    </Wrapper>
  );
};

export default Footer;
