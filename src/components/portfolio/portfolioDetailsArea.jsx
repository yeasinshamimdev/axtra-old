import Link from 'next/link';
import React from 'react';
import PortfolioDetailsContent from './portfolioDetailsContent';
import PortfolioDetailsHero from './portfolioDetailsHero';

const PortfolioDetailsArea = () => {
    return (
        <section className="portfolio__detail">
            {/* Portfolio hero */}
            <PortfolioDetailsHero />

            <div className="portfolio__detail-thumb">
                <img src="assets/imgs/portfolio/detail/1.jpg" alt="Portfolio Thumbnail" data-speed="auto" />
            </div>
            {/* Portfolio content */}
            <PortfolioDetailsContent />

        </section>
    );
};

export default PortfolioDetailsArea;