import React from "react";
import { useTranslation } from 'react-i18next'
import Typed from "react-typed";

const Banner = () => {
  const { t } = useTranslation()
  return (
    <div
      className="text-center"
      style={{
        background: "#eeeeee",
        color: "black",
        position: "absolute",
        bottom: "0vh",
        width: "100%",
      }}
    >
      <Typed
        strings={[t("Rosano City Market"), t("Free trial"), t("7 days")]}
        typeSpeed={40}
        loop
      />
    </div>
  );
};

export default Banner
