import React from "react";
import {messages} from "./messages";
import BasicBtn from "../buttons/BasicBtn";

const HeaderSingin = ({signInClass}) => {
  return (
    <div className={signInClass}>
      <BasicBtn text={messages.becomeBtn}/>
      <a className="signIn__link">{messages.signIn}</a>
    </div>
  )
}

export default HeaderSingin;
