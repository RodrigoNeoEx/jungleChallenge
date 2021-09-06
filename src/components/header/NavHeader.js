import React from "react";
import { messages } from "./messages";

const NavHeader = ({navClass}) => {
  return (
    <nav className={navClass}>
      <a className="navLink">{messages.createNanny}</a>
      <a className="navLink">{messages.shares}</a>
      <a className="navLink">{messages.story}</a>
    </nav>
  )
}

export default NavHeader;