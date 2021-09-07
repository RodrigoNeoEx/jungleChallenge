import React from "react";
import Divider from "../../../../divider/divider";
import InputShare from "../../../../inputShare/inputShare";
import { messages } from "../../messages";
import "./style/align.css"

const Register = ({ registerClass }) => {

  return (
    <section className={`${registerClass} input`}>
      <Divider />
      <h3 className="input__title">{messages.inputTitle}</h3>
      <p className="input__description">{messages.inputDescription}</p>
      <InputShare />
    </section>
  )
}

export default Register;
