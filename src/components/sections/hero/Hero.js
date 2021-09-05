import React from "react";
import Header from "../../header/HeroHeader"
import HeroFooter from "../../footer/HeroFooter"
import PlayBtn from "../../buttons/PlayBtn"
import { messages } from "./messages";
import imageHeader from "../../../images/ImageHeader.png"
import "./style/heroSection.css"

const Hero = () => {
  return (
    <React.Fragment>
      <Header/>
      <main className="heroSection">

        <article className="heroSection__article">
          <h1>{messages.head}</h1>
          <p>{messages.description}</p>
          <PlayBtn/>
        </article>

        <aside className="heroSection__aside">
          <img src={imageHeader} alt="App Example" className="heroSection__aside__img"/>
        </aside>

      </main>
      <HeroFooter/>
    </React.Fragment>

  )
}

export default Hero;