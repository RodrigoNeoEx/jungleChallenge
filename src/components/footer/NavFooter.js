import React from "react";
import "./style/footers.css"
import hapu from "../../svg/Logohapu.svg"
import facebook from "../../images/Facebook.png"
import twiter from "../../images/Twitter.png"
import insta from "../../images/Instagram.png"

const NavFooter = () => {
  return (
    <footer>
      <img src={hapu}/>
      <nav>
        <a></a>
        <a></a>
        <a></a>
      </nav>
      <nav>
        <a><img src={facebook}/></a>
        <a><img src={twiter}/></a>
        <a><img src={insta}/></a>
      </nav>
    </footer>
  )
}

export default NavFooter;