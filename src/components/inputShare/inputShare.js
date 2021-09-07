import React from "react";
import BasicBtn from "../buttons/BasicBtn";
import { messages } from "../sections/about/messages";
import "./style/inputShare.css"

const InputShare = () => {
  return (
    <forms className="inputShare">
      <input className="inputShare__input name" type="text" placeholder={messages.inputName}/>
      <input className="inputShare__input"type="text" placeholder={messages.inputMail}/>
      <BasicBtn text={messages.registerSend}/>
    </forms>
  )
}

export default InputShare;
