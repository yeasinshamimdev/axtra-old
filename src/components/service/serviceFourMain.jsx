import Link from 'next/link';
import React from 'react';
import ServiceFourArea from './serviceFourArea';
import ServiceFourHero from './serviceFourHero';

const ServiceFourMain = () => {
    return (
        <section className="service__area-3 service-v4 pb-150">
            <div className="container">
                <ServiceFourHero/>
                <ServiceFourArea/>
            </div>
        </section>
    );
};

export default ServiceFourMain;