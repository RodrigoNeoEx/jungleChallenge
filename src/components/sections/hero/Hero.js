import React from "react";
import Header from "../../header/HeroHeader"
import HeroFooter from "../../footer/HeroFooter"
import PlayBtn from "../../buttons/PlayBtn"
import { messages } from "./messages";
import imageHeader from "../../../images/ImageHeader.png"
// import heroBackground from "../../../images/heroBackground.png"

import "./style/heroSection.css"

const Hero = () => {
  return (
    <React.Fragment>
      <section className="heroSection">
        <img className="heroSection__bg"/>
        <main className="heroSection__main">

          <Header/>

          <article className="heroSection__article">
            <h1>{messages.head}</h1>
            <p>{messages.description}</p>
            <PlayBtn/>
          </article>

          <aside className="heroSection__aside">
            <img src={imageHeader} alt="App Example" className="heroSection__aside__img"/>
          </aside>

          <HeroFooter/>
        </main>

      </section>

    </React.Fragment>

  )
}

export default Hero;