import React from "react";
import PaymentExemple from "../../../../images/sharePayment.png"
import { messages } from "../messages";
import "./style/sharedPayment.css"

const SharePayment = () => {
  return (
    <section className="sharedPayment">
      <img src={PaymentExemple} alt="share payment table" className="sharedPayment__img" />
      <article className="sharedPayment__article">
        <h2 className="article__title">{messages.sharePaymentTitle}</h2>
        <p className="article__description">{messages.sharePaymentDescription}</p>
        <a className="article__link">{messages.sharePaymentLink}</a>
      </article>
    </section>
  )
}

export default SharePayment;
