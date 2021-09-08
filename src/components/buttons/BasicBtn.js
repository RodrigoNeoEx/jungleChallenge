import React from "react";
import "./style/buttons.css"

const BasicBtn = ({ text, onClick}) => {
  return (
    <button className='basicBtn' onClick={onClick}>
      { `${text}` }
    </button>
  )
}

export default BasicBtn;
