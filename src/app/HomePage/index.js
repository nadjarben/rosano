import React from "react";
import Divider from "@material-ui/core/Divider";
import ScrollingMenu from "../../components/ScrollingMenu";
import GenericProductsPage from "../../components/GenericProductsPage";

const Homepage = () => {
  return (
    <>
      <ScrollingMenu />
      <Divider />
      <GenericProductsPage />
    </>
  );
};

export default Homepage;
