import Link from 'next/link';
import React from 'react';
import { portfolioFiveContent, portfolioFiveContentTwo } from '../constants/constants';
import PortfolioHero from './portfolioHero';

const PortfolioFiveArea = () => {
    const heroContent = {
        titleOne: "Awesome",
        titleTwo: "Projects",
        desc: "Crafting new bright brands, unique visual systems and digital experience focused on a wide range of original collabs."
      }
    return (
        <section className="portfolio-v5 portfolio__project">
            <div className="container line">
                <div className="line-3"></div>  
                <PortfolioHero titleOne={heroContent.titleOne} titleTwo={heroContent.titleTwo} desc={heroContent.desc} />

                <div className="row">
                    <div className="col-xxl-12">
                        <div className="pp-title-wrap">
                            <h2 className="pp-title">Selected <br /> Work</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-8">
                        <div className="pp-slider-wrapper">
                            <div className="swiper portfolio__project-slider">
                                <div className="swiper-wrapper">
                                    {
                                        portfolioFiveContent.map((pFive, i) =>
                                            <div className="swiper-slide pp-slide" key={i}>
                                                <div className="pp-slide-img">
                                                    <Link href="/portfolio-details"><img src={pFive.imageUrl}
                                                        alt="Portfolio Thumbnail" /></Link>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>

                            <div className="pp-next swipper-btn">prev</div>
                            <div className="pp-prev swipper-btn">Next</div>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
                        <div className="swiper portfolio__project-thumbs">
                            <div className="swiper-wrapper">
                                {portfolioFiveContentTwo.map((pFiveTwo, i) =>
                                    <div className="swiper-slide" key={i}>
                                        <div className="pp-slide-thumb">
                                            <h3 className="pp-slide-title">{pFiveTwo.title}</h3>
                                            <p>{pFiveTwo.date}</p>
                                        </div>
                                    </div>
                                )
                                } 
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    );
};

export default PortfolioFiveArea;