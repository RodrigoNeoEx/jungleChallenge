import React from "react";
import InputShare from "../../../../inputShare/inputShare";
import ShareHome from "../../../../../images/shareHome.png"
import { messages } from "../../messages";

const Register = () => {
  return (
    <section>
      <h1>{messages.inputTitle}</h1>
      <p>{messages.inputDescription}</p>
      <InputShare />
      <hr />
    </section>
  )
}

export default Register;
