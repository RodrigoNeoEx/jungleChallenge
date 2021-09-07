import React from "react";
import PaymentExemple from "../../../../images/sharePayment.png"
import { messages } from "../messages";

const SharePayment = () => {
  return (
    <section>
      <img src={PaymentExemple} alt="share payment table" />
      <h1>{messages.sharePaymentTitle}</h1>
      <p>{messages.sharePaymentDescription}</p>
      <a>{messages.sharePaymentLink}</a>
    </section>
  )
}

export default SharePayment;
