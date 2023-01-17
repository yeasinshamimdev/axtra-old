 import React from 'react';
import ServiceOneArea from './serviceOneArea';
import ServiceOneHero from './serviceOneHero';

const ServiceOneMain = () => {
    return (
        <>
            {/* Hero area start  */}
            <ServiceOneHero/>
            {/* Hero area end  */}

            {/* Service area start  */}
            <ServiceOneArea/>
            {/* Service area end  */}
 
        </>
    );
};

export default ServiceOneMain;