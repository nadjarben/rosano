import React from "react";
import axios from "axios";

const TwilioOrder = () => {
  const bodyMessage = "test";

  const handleOrderRequest = () => {
    axios
      .post(
        `https://hardcore-ride-c780b5.netlify.app/.netlify/functions/twilioSendOrder`,
        { bodyMessage }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  return <button onClick={handleOrderRequest}>test</button>;
};

export default TwilioOrder;
