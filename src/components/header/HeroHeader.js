import React from "react";
import LogoTag from "../logoTag/LogoTag"
import HeaderSignIn from "./HeaderSignIn";
import NavHeader from "./NavHeader"
import "./style/HeroHeader.css"

const HeroHeader = () => {
  const signInClass = 'heroHeader__signIn';
  const navClass = 'heroHeader__nav';
  return (
    <header className="heroHeader">
      <LogoTag />
      <NavHeader navClass={navClass}/>
      <HeaderSignIn signInClass={signInClass}/>
    </header>
  )
}

export default HeroHeader;
