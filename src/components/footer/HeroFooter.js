import React from "react";
import Avatar from "../../images/ProfileImageavatar.png"
import { messages } from "../footer/messages";
import "./style/footers.css"

const HeroFooter = () => {
  return (
    <footer className="heroFooter">
      <img src={Avatar} alt="experienced nanny" className="heroFooter__avatar"/>
      <a className="heroFooter__link">{messages.avaiableLink}</a>
      <span className="heroFooter__schedule"><strong>{messages.schedule}</strong></span>
    </footer>
  )
}

export default HeroFooter;
