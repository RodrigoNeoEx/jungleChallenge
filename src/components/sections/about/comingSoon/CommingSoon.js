import React from "react";
import upCommingFunctions from "../../../../images/commingSoon.png"
import { messages } from "../messages";
import "./style/commingSoon.css"

const CommingSoon = () => {
  return (
    <section className="commingSoon">
      <img
       src={upCommingFunctions}
       alt="small cartoons with a book tablet and child pic"
       className="commingSoon__pic"/>
      <article className="commingSoon__article">
        <h2 className="article__title">{messages.commingSoonTitle}</h2>
        <p className="article__description">{messages.commingSoonDescription}</p>
      </article>
    </section>
  )
}

export default CommingSoon;
