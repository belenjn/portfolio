import React from "react";
import "./portfolio.css";
import SW from '../../assets/sw.png'
import IMG1 from '../../assets/foto4.jpg'
import IMG2 from '../../assets/foto1.jpg'
import {strings} from '../../utils/strings'



export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>{strings.title_portfolio1}</h5>
      <h2>{strings.title_portfolio2}</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">

          <img src={SW} alt='star wars img'/>

          </div>

            <h3>{strings.title_portfolio3}</h3>
          <div className="portfolio__item-cta">

            <a
              href="https://github.com/belenjn/star-wars-app"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              {strings.link_portfolio1}
            </a>
            <a
              href="https://star-wars-first-app.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              {strings.link_portfolio2}
            </a>
            </div>
          
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">

          <img src={IMG1} alt='star wars img'/>

          </div>

            <h3>{strings.title_portfolio4}</h3>
          <div className="portfolio__item-cta">

            <a
              href="https://github.com/belenjn/star-wars-app"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              {strings.link_portfolio1}
            </a>
            <a
              href="https://star-wars-first-app.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              {strings.link_portfolio2}
            </a>
            </div>
          
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">

          <img src={IMG2} alt='star wars img'/>

          </div>

            <h3>{strings.title_portfolio4}</h3>
          <div className="portfolio__item-cta">

            <a
              href="https://github.com/belenjn/star-wars-app"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              {strings.link_portfolio1}
            </a>
            <a
              href="https://star-wars-first-app.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              {strings.link_portfolio2}
            </a>
            </div>
          
        </article>
      </div>
    </section>
  );
};
