 
import ServiceFiveHero from './serviceFiveHero';
 import ServiceFiveArea from './serviceFiveArea';

const ServiceFiveMain = () => {
    return (
        <section className="portfolio__service service-v5 pt-140 pb-140">
            <div className="container">
                <ServiceFiveHero/>
                <ServiceFiveArea/>
            </div>
        </section>
    );
};

export default ServiceFiveMain;