import React from "react";
import Register from "./register/Register";
import { messages } from "../messages";
import ShareHome from "../../../../images/shareHome.png"
import "./style/shareDescription.css"

const ShareDescripion = () => {
  return (
    <section className="shareDescription">
      <main className="shareDescription__main">
        <article className="main__article">
          <h2 className="article__title">{messages.shareHomeTitle}</h2>
          <p className="article__description">
            <span>
              {messages.shareHomeDescription1}
            <a>{messages.shareHomeDescriptionLink}</a>
              {messages.shareHomeDescription2}
            </span>
          </p>
        <a className="article__link">{messages.ready}</a>
        </article>
        <img src={ShareHome} alt="costs example" className="main__img"/>
      </main>
      <Register registerClass="shareDescription__register"/>
    </section>
  )
}

export default ShareDescripion;
