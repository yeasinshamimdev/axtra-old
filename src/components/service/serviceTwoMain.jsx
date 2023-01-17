 import React from 'react';
import ServiceTwoArea from './serviceTwoArea';
import ServiceTwoHero from './serviceTwoHero';

const ServiceTwoMain = () => {
    return (
        <section className="service__area service-v2 pt-110 pb-150">
        <div className="container">
            <ServiceTwoHero/> 
            <ServiceTwoArea/>
        </div>
    </section>
    );
};

export default ServiceTwoMain;