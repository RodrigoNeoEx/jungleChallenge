import React, { useState } from "react";
import BasicBtn from "../buttons/BasicBtn";
import postRegister from "../../services/postRegister"
import { messages } from "../sections/about/messages";
import "./style/inputShare.css"

const InputShare = () => {

  const [name, setName] = useState('')
  const [mail, setMail] = useState('')

  const handleName = ({ target }) => {
    setName(target.value);
  }

  const handleMail = ({ target }) => {
    setMail(target.value);
  }

  const checkMail = () => {
    const emailRegex = /^([\w.-]+)@([\w-]+)((.(\w){2,3})+)$/;
    const check = emailRegex.test(mail)
    return check
  }

  const handleClick = async () => {
    const check = checkMail()
    const body = { "name": name, "email": mail }

    let registerAnswer = await postRegister(body)
    let answer = JSON.parse(registerAnswer.config.data)

    if(body.name.length === 0) return alert("fill a valid name")
    if(!check) return alert("fill a valid e-mail")

    alert(`Hello ${answer.name}! We send to you more info in your registered e-mail (${answer.email})`);
    setMail('')
    setName('')
  }

  return (
    <forms className="inputShare">
      <input
        className="inputShare__input name"
        type="text"
        value={name}
        onChange={handleName}
        placeholder={messages.inputName}
      />
      <input
        className="inputShare__input"
        type="text"
        value={mail}
        onChange={handleMail}
        placeholder={messages.inputMail}
      />
      <BasicBtn text={messages.registerSend} onClick={handleClick}/>
    </forms>
  )
}

export default InputShare;
