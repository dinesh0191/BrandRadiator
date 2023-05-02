import React from "react";
import "../styles/aboutUs.scss";
import { aboutUsDummyData } from "../utils";

const AboutUs = () => {
  return (
    <section>
      {aboutUsDummyData.map((item) => (
        <p className="about-text" key={item}>
          {item}
        </p>
      ))}
    </section>
  );
};

export default AboutUs;
