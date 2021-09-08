import React from "react";
import { messages } from "./messages";
import "./style/footers.css"

const GeneralFooter = () => {
  return (
    <footer className="generalFooter">
      <p className="generalFooter__text">{messages.copyright}</p>
    </footer>
  )
}

export default GeneralFooter;
