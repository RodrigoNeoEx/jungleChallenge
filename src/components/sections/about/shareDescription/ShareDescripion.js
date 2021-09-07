import React from "react";
import Register from "./register/Register";
import { messages } from "../messages";
import ShareHome from "../../../../images/shareHome.png"

const ShareDescripion = () => {
  return (
    <section className="shareDescription">
      <main>
      <article>
        <h1>{messages.shareHomeTitle}</h1>
        <p>
          <span>
            {messages.shareHomeDescription1}
          <a>{messages.shareHomeDescriptionLink}</a>
            {messages.shareHomeDescription2}
          </span>
        </p>
      </article>
        <img src={ShareHome} alt="costs example" />
      </main>
      <hr/>
      <Register />
    </section>
  )
}

export default ShareDescripion;
