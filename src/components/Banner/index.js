import React from "react";
import { useTranslation } from 'react-i18next'
import Typed from "react-typed";

const Banner = () => {
  const { t } = useTranslation()
  return (
    <div
      className="text-center"
      style={{
        minHeight: "3.5vh",
        letterSpacing: "0.08857em",
        background: "lightgray",
        color: "black",
        width: "100%",
        fontSize: "15px",
        marginTop: "1px",
        fontWeight: "bold"
      }}
    >
      <Typed
        strings={[t("Rosano City Market"), t("Fast Delivery in Ashdod"), t("Order and enjoy")]}
        typeSpeed={70}
        showCursor={false}
        loop
      />
    </div>
  );
};

export default Banner
