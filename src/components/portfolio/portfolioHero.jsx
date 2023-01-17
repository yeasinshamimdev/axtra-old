import React from 'react';

const PortfolioHero = ({ titleOne, titleTwo, desc }) => {
    return (
        <section className="pt-150 pb-130 portfolio-v2">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
                        <div className="sec-title-wrapper">
                            <h2 className="sec-title-2 animation__char_come">{titleOne} <br /> {titleTwo}</h2>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
                        <div className="blog__text">
                            <p>{desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioHero;