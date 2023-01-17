import React from 'react';
import ServiceThreeArea from './serviceThreeArea';
import ServiceThreeHero from './serviceThreeHero';

const ServiceThreeMain = () => {
    return (
        <section className="service__area-2 service-v3 pt-130 pb-140">
            <div className="container">
                <ServiceThreeHero/> 
                <ServiceThreeArea/>
            </div>
        </section>
    );
};

export default ServiceThreeMain;