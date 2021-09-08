import React, { useState } from "react";
import BasicBtn from "../buttons/BasicBtn";
import { messages } from "../sections/about/messages";
import "./style/inputShare.css"

const InputShare = () => {

  const [name, setName] = useState()
  const [mail, setMail] = useState()


  const handleName = ({ target }) => {
    setName(target.value);
    return console.log(name)
  }

  const handleMail = ({ target }) => {
    setMail(target.value);
    return console.log(mail)
  }

  const checkMail = () => {
    const emailRegex = /^([\w.-]+)@([\w-]+)((.(\w){2,3})+)$/;
    const check = emailRegex.test(mail)
    if(!check) {return alert("please set a valid e-mail")}
    return console.log(name, mail, "ok");
  }

  const handleClick = () => {
    console.log(name, mail, "ok");
    checkMail()
  }

  return (
    <forms className="inputShare">
      <input
        className="inputShare__input name"
        type="text"
        onChange={handleName}
        placeholder={messages.inputName}
      />
      <input
        className="inputShare__input"
        type="text"
        onChange={handleMail}
        placeholder={messages.inputMail}
      />
      <BasicBtn text={messages.registerSend} onClick={handleClick}/>
    </forms>
  )
}

export default InputShare;
