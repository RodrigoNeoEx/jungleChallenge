import React from "react";
import { messages } from "./messages";
import "./style/playBtn.css"
import { FaPlay } from "react-icons/fa";

const PlayBtn = () => {
  return (
    <div className="playBtn">
      <button type="button" className="playBtn__btn">
        <FaPlay />
      </button>
      <span className="playBtn__message">{messages.playBtn}</span>
    </div>
  )
}

export default PlayBtn;
