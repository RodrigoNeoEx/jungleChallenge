import React from "react";
import CreateNanny from "../../buttons/CreateNanny";
import GeneralFooter from "../../footer/GeneralFooter";
import NavFooter from "../../footer/NavFooter";
import { messages } from "./messages";
import "./style/lastInfor.css"

const LastInfo = () => {
  return (
    <section className="lastInfo">
      <h2></h2>
      <p></p>
      <CreateNanny />
      <NavFooter />
      <GeneralFooter />
    </section>
  )
}

export default LastInfo;
