import React from "react";
import CommingSoon from "./comingSoon/CommingSoon";
import FrameworkDescription from "./frameworkDescription/FrameworkDescription";
import ShareDescription from "./shareDescription/ShareDescripion";
import SharePayment from "./sharePayment/SharePayment";
import "./style/about.css";

const About = () => {
  return (
    <section className="aboutContainer">
      <ShareDescription />
      <hr/>
      <SharePayment />
      <hr/>
      <FrameworkDescription />
      <hr/>
      <CommingSoon />
    </section>
  )
}

export default About;
