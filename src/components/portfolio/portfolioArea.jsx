import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { portfolioContent } from '../constants/constants'; 

const PortfolioArea = () => { 
    return ( 
        <section className="portfolio__area-6">
            <div className="container line pt-100 pb-140">
                <span className="line-3"></span>
                <div className="zi-9">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6">
                            <div className="sec-title-wrapper portfolio__title-wrap-6">
                                <div className="">
                                    <h2 className="sec-sub-title animation__char_come">Featured</h2>
                                    <h3 className="sec-title animation__char_come_long">Work</h3>
                                    <p>View the full case study of our recent featured and awesome works that we created for our
                                        clients.
                                    </p>
                                </div>
                                <div className="portfolio__pagination-6">
                                    <span className="portfolio__current">01</span> / 0<span className="portfolio__total"></span>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-8 col-xl-7 col-lg-7 col-md-6">
                            <div className="portfolio__wrapper-6">
                                <div className="portfolio__list-6">
                                    {
                                        portfolioContent.map((pC, i) =>  
                                            <div key={i} className="portfolio__item-6" data-portfitem={pC.dataPortfitem}>
                                                <Link href="/portfolio-details">
                                                    <img src={pC.imageUrl} alt="Portfolio Image" data-speed="0.4"/>
                                                    <div className="portfolio__content-6">
                                                        <h4 className="portfolio__title-6">Lionpro Agency</h4>
                                                        <h5 className="portfolio__date">02 May 2021</h5>
                                                    </div>
                                                </Link>
                                            </div> 
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioArea;