import React from "react";
import "./about.css";
import { strings } from "../../utils/strings";
import ME from "../../assets/be2.png";

export const About = () => {
  return (
    <section id="about">
      <h5>{strings.title_about1}</h5>
      <h2>{strings.title_about2}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Imagen sobre mi" />
          </div>
        </div>

        <div className="about__content">
          <p>
            {strings.line1_about} <br></br>
            <br></br>
            {strings.line2_about}
            <br></br>
            <br></br>
            {strings.line4_about}
            <br></br> <br></br>
            {strings.line3_about}
            <br></br>
            <br></br>
          </p>

          <a href="#contact" className="btn btn-primary">
            {strings.button_about}
          </a>
        </div>
      </div>
    </section>
  );
};
