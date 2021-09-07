import React from "react";
import FrameworkPic from "../../../../images/billingHistory.png"
import { messages } from "../messages";
import "./style/framework.css";

const FrameworkDescription = () => {
  return (
    <section className="frameworkInfo">
      <article className="frameworkInfo__article">
        <h2 className="article__title">{messages.frameworkTitle}</h2>
        <p className="article__description">{messages.frameworkDescription}</p>
        <a className="article__link">{messages.frameworkLink}</a>
      </article>
      <img src={FrameworkPic} alt="app example" className="frameworkInfo__pic"/>
    </section>
  )
}

export default FrameworkDescription;
