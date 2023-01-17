import Link from 'next/link';
import React from 'react';
import { portfolioThreeContent } from '../constants/constants';

const PortfolioThreeArea = () => {
  return (
    <section className="portfolio__area-2 portfolio-v3">
      <div className="container g-0 line pt-100 pb-140">
        <div className="row">
          <div className="col-xxl-12">
            <div className="sec-title-wrapper text-anim">
              <h2 className="sec-title-3 title-anim">Selected <span>Projects</span></h2>
              <p className="sec-text">Worked with global brands & agency at the
                intersection of flat design and digital
                technology.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="swiper portfolio__slider-2">
        <div className="swiper-wrapper">
          {
            portfolioThreeContent.map((pThree, i) =>
              <div className="swiper-slide" key={i}>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="/portfolio-details"><img src={pThree.imageUrl} alt="Portfolio Image" /></Link>
                  </div>
                  <div className="slide-content text-anim">
                    <h2 className="sec-title title-anim"> <Link href="portfolio-details ">{pThree.titleFirst} <span>{pThree.titleSecond}</span></Link>
                    </h2>
                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                      both
                      ourselves</p>
                    <div className="btn-common-wrap">
                      <Link href="portfolio-details " className="btn-common">View details <i
                        className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>

        <div className="portfolio__slider-2-pagination--">
          <div className="swiper-pagination circle-pagination right"></div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioThreeArea;