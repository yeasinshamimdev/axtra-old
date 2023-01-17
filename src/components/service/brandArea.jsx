import React from 'react';
import { brandAreaImg } from '../constants/constants';

const BrandArea = () => {
    return (
        <section className="brand__area">
            <div className="container line pt-140 pb-100">
                <span className="line-3"></span>
                <div className="row">
                    <div className="col-xxl-12">
                        <h2 className="brand__title-3 title-anim">We are happy to work with global
                            largest brands</h2>
                        <div className="brand__list brand-gap">

                            {brandAreaImg.map((bImg, i) =>
                                <div className="brand__item-2 fade_bottom" key={i}>
                                    <img src={bImg.url} alt="Brand Logo" />
                                </div>
                            )
                            } 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandArea;