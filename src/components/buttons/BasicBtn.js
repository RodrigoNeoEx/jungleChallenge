import React from "react";
import "./style/buttons.css"

const BasicBtn = ({ text }) => {
  return (
    <button className='basicBtn'>
      { `${text}` }
    </button>
  )
}

export default BasicBtn;
