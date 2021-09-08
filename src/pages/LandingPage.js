import React from "react";
import Hero from "../components/sections/hero/Hero"
import About from "../components/sections/about/About"
import LastInfo from "../components/sections/lastInfo/LastInfo";
import './style/landingPage.css'

const LandingPage = () => {
  return (
    <main className="main__container">
      <Hero/>
      <About />
      <LastInfo />
    </main>
  )
}

export default LandingPage;
