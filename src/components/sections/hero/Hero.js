import React from "react";
import Header from "../../header/HeroHeader"
import HeroFooter from "../../footer/HeroFooter"
import PlayBtn from "../../buttons/PlayBtn"
import "./style/heroSection.css"

const Hero = () => {
  return (
    <React.Fragment>
      <Header/>
      <main className="heroSection">

        <article className="heroSection__article">
          <h1>Hey</h1>
          <p>Ya!</p>
          <PlayBtn/>
        </article>

        <aside className="heroSection__aside">
          <image className="heroSection__aside__img"/>
        </aside>

      </main>
      <HeroFooter/>
    </React.Fragment>

  )
}

export default Hero;