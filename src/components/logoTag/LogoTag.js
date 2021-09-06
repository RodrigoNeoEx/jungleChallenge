import React from "react";
import logo from "../../svg/logo.svg"
import "./style/logo.css"

const LogoTag = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Hapu logo" className="logo__img" />
    </div>
  )
}

export default LogoTag;

