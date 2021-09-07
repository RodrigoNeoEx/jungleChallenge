import React from "react";
import FrameworkPic from "../../../../images/billingHistory.png"
import { messages } from "../messages";

const FrameworkDescription = () => {
  return (
    <section>
      <article>
        <h1>{messages.frameworkTitle}</h1>
        <p>{messages.frameworkDescription}</p>
        <a>{messages.frameworkLink}</a>
      </article>
      <img src={FrameworkPic} alt="app example"/>
    </section>
  )
}

export default FrameworkDescription;
