import React from "react";
import { messages } from "./messages";
import calendar from "../../svg/Iconbtn.svg"

const CreateNanny = () => {
  return (
    <button type="button" className="createNanny">
      <img className="createNanny__pic" src={calendar} alt="small pic of a calendar"/>
      <div className="createNanny__text">
        <p className="text__major">{messages.createNanny}</p>
        <p className="text__minor">{messages.lessThan}</p>
      </div>
    </button>
  )
}

export default CreateNanny;
