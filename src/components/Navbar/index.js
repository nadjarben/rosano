import React from "react";
import { ReactNavbar } from "react-responsive-animate-navbar";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <ReactNavbar
      color="rgb(25, 25, 25)"
      logo={logo}
      menu={[
        { name: "HOME", to: "/" },
        { name: "ARTICLES", to: "/articles" },
        { name: "ABOUT ME", to: "/about" },
        { name: "CONTACT", to: "/contact" },
      ]}
      social={[
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/nayarnzeh-taha/",
          icon: ["fab", "linkedin-in"],
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/nazeh200/",
          icon: ["fab", "facebook-f"],
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/nazeh_taha/",
          icon: ["fab", "instagram"],
        },
        {
          name: "Twitter",
          url: "http://nazehtaha.herokuapp.com/",
          icon: ["fab", "twitter"],
        },
      ]}
    />
  );
};

export default Navbar;
