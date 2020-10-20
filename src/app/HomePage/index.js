import React from "react";
import Divider from "@material-ui/core/Divider";
import ScrollingBar from "../../components/ScrollingBar";
import Products from "../../components/Products";
//import Banner from "../../components/Banner"

const Homepage = () => {
  return (
    <>
      <ScrollingBar />
      <Divider />
      <Products />
      <br />
      <br />
      <br />
    </>
  );
};

export default Homepage;
