import Link from 'next/link';
import React from 'react';
import { portfolioFourContent } from '../constants/constants'; 
import PortfolioFourHero from './portfolioFourHero'; 

const PortfolioFourArea = () => {
 

    return (
        <section className="portfolio__area-3 portfolio-v4">
            <div className="container pt-100 pb-150">
                <PortfolioFourHero />

                <div className="row">
                    <div className="col-xxl-12">
                        <div className="sec-title-wrapper">
                            <h2 className="sec-sub-title title-anim">Featured <br />Work</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xxl-12">
                        <div className="swiper portfolio__slider-3">
                            <div className="swiper-wrapper">
                                {
                                    portfolioFourContent.map((pFour, i) =>
                                        <div className="swiper-slide" key={i}>
                                            <div className="portfolio__slide-3">
                                                <Link href="/service-details">
                                                    <h3 className="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                                    <img src={pFour.imageUrl} alt="Portfolio Image" />
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>

                            <div className="swiper-pagination"></div>
                            <div className="swiper-btn">
                                <div className="pp-prev"><i className="fa-solid fa-arrow-left"></i></div>
                                <div className="pp-next"><i className="fa-solid fa-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioFourArea;