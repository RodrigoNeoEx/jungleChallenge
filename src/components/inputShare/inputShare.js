import React from "react";
import BasicBtn from "../buttons/BasicBtn";
import { messages } from "../sections/about/messages";

const InputShare = () => {
  return (
    <forms>
      <input type="text" placeholder={messages.inputName}/>
      <input type="text" placeholder={messages.inputMail}/>
      <BasicBtn text={messages.registerSend}/>
    </forms>
  )
}

export default InputShare;
