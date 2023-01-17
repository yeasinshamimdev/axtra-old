import Link from 'next/link';
import React from 'react';

const PortfolioDetailsHero = () => {
    return (
        <div className="portfolio__detail-top">
        <div className="container g-0 line pt-110 pb-130">
            <span className="line-3"></span>

            <div className="row">
                <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-7">
                    <div className="sec-title-wrapper">
                        <h2 className="sec-title animation__char_come">Lionpro- <br />Agency</h2>
                    </div>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                    <div className="portfolio__detail-info">
                        <ul>
                            <li>Category <Link href="/category">Development</Link></li>
                            <li>Client <span>Webflow</span></li>
                            <li>Start Date <span>23 January 2021</span></li>
                            <li>Handover <span>05 March 2021</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default PortfolioDetailsHero;