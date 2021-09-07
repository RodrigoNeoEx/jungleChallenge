import React from "react";
import CommingSoon from "./comingSoon/CommingSoon";
import FrameworkDescription from "./frameworkDescription/FrameworkDescription";
import ShareDescription from "./shareDescription/ShareDescripion";
import "./style/about.css";

const About = () => {
  return (
    <section className="aboutContainer">
      <ShareDescription />
      <FrameworkDescription />
      <CommingSoon />
    </section>
  )
}

export default About;
