import React from "react";
import Divider from "@material-ui/core/Divider";
import ScrollingBar from "../../components/ScrollingBar";
import GenericProductsPage from "../../components/GenericProductsPage";

const Homepage = () => {
  return (
    <>
      <ScrollingBar />
      <Divider />
      <GenericProductsPage />
      <br/>
      <br/>
      <br/>
    </>
  );
};

export default Homepage;
