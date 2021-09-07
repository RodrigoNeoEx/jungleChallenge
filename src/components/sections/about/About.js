import React from "react";
import CommingSoon from "./comingSoon/CommingSoon";
import FrameworkDescription from "./frameworkDescription/FrameworkDescription";
import ShareDescription from "./shareDescription/ShareDescripion";
import SharePayment from "./sharePayment/SharePayment";
import Divider from "../../divider/divider";
import "./style/about.css";

const About = () => {
  return (
    <section className="aboutContainer">
      <ShareDescription />
      <Divider/>
      <SharePayment />
      <Divider/>
      <FrameworkDescription />
      <Divider/>
      <CommingSoon />
    </section>
  )
}

export default About;
