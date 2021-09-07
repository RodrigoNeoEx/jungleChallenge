import React from "react";
import "./style/footers.css"
import hapu from "../../svg/Logohapu.svg"
import facebook from "../../images/Facebook.png"
import twiter from "../../images/Twitter.png"
import insta from "../../images/Instagram.png"
import { messages } from "./messages";

const NavFooter = () => {
  return (
    <footer className="navFooter">
      <img src={hapu} alt="logo hapu" className="navFooter__logo"/>
      <nav className="navFooter__links">
        <a>{messages.shareNany}</a>
        <a>{messages.ourStory}</a>
        <a>{messages.blog}</a>
        <a>{messages.terms}</a>
      </nav>
      <nav className="navFooter__midias">
        <a><img src={facebook} alt="logo facebook"/></a>
        <a><img src={twiter} alt="logo twiter"/></a>
        <a><img src={insta} alt="logo instagram"/></a>
      </nav>
    </footer>
  )
}

export default NavFooter;