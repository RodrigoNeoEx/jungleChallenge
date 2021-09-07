import React from "react";
import upCommingFunctions from "../../../../images/commingSoon.png"
import { messages } from "../messages";

const CommingSoon = () => {
  return (
    <section>
      <img src={upCommingFunctions} alt="small cartoons with a book tablet and child pic"/>
      <h1>{messages.commingSoonTitle}</h1>
      <p>{messages.commingSoonDescription}</p>
    </section>
  )
}

export default CommingSoon;
