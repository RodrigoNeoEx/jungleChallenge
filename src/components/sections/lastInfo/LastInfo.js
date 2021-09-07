import React from "react";
import CreateNanny from "../../buttons/CreateNanny";
import GeneralFooter from "../../footer/GeneralFooter";
import NavFooter from "../../footer/NavFooter";
import { messages } from "./messages";
import "./style/lastInfor.css"

const LastInfo = () => {
  return (
    <section className="lastInfo">
      <div className="lastInfo__text">
        <h2 className="text__title">{messages.becomeNanny}</h2>
        <p className="text__description">{messages.lessThan}</p>
      </div>
      <CreateNanny />
      <a className="lastInfo__link">{messages.link}</a>
      <NavFooter />
      <GeneralFooter />
    </section>
  )
}

export default LastInfo;
