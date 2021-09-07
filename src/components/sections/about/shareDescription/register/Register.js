import React from "react";
import InputShare from "../../../../inputShare/inputShare";
import { messages } from "../../messages";

const Register = () => {
  return (
    <section>
      <h1>{messages.inputTitle}</h1>
      <p>{messages.inputDescription}</p>
      <InputShare />
    </section>
  )
}

export default Register;
