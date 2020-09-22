import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";


const splitTitle = (title) => {
  const titleSplitted = title.split(" - ")
  return titleSplitted[1] ? titleSplitted[1] : title
}


const TwilioOrder = () => {
  const order = useSelector((state) => state.checkout);
  const itemsName = order.lineItems.reduce(
    (prevValue, currentValue) => prevValue + splitTitle(currentValue.title) + " --> " +currentValue.quantity + "\n",
    ""
  );
  const totalPrice = order.totalPrice;
  const bodyMessage = itemsName + "\n" + totalPrice;
  console.log(bodyMessage)

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

  return <button onClick={handleOrderRequest}>WA</button>;
};

export default TwilioOrder;
