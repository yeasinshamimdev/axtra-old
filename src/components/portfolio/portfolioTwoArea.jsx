import Link from 'next/link';
import React from 'react';
import { portfolioTwoContent } from '../constants/constants';
import PortfolioHero from './portfolioHero';

const PortfolioTwoArea = () => {

  const heroContent = {
    titleOne: "Selected",
    titleTwo: "Projects",
    desc: "Crafting new bright brands, unique visual systems and digital experience focused on a wide range of original collabs."
  }

  return (
    <>
      <PortfolioHero titleOne={heroContent.titleOne} titleTwo={heroContent.titleTwo} desc={heroContent.desc} />
      <section className="portfolio__area pb-140">
        <div className="container">
          <div className="row top_row">

            <h2 className="portfolio__text">work</h2>
            <div className="portfolio__list-1">
              {
                portfolioTwoContent.map((pTwo, i) =>
                  <div className="portfolio__item" key={i}>
                    <Link href="/portfolio-details"><img className="mover" src={pTwo.imageUrl}
                      alt="Portfolio Image" /></Link>
                    <div className="portfolio__info">
                      <h3 className="portfolio__title">{pTwo.title}</h3>
                      <p>{pTwo.data}</p>
                    </div>
                  </div>
                )
              }
            </div>
          </div>

          <div className="row row_bottom">
            <div className="col-xxl-12">
              <div className="portfolio__btn" id="btn_wrapper" data-speed="1" data-lag="0.2">
                <Link className="wc-btn-secondary btn-hover btn-item" href="/portfolio"><span></span>Load More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioTwoArea;