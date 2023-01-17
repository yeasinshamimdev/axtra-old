import React from 'react';
import { serviceThreeContent } from '../constants/constants';

const ServiceThreeArea = () => {
    return (
        <div className="row pt-140">
            <div className="col-xxl-12">
                <div className="service__list-2 animation__service-2">
                    {serviceThreeContent.map((sThreeC, i) =>
                        <div className="service__item-2" key={i}>
                            <div>
                                <img src={sThreeC.url} alt="Service Icon" />
                                <h3 className="service__title-2">{sThreeC.title1} <br />{sThreeC.title2}</h3>
                                <p>{sThreeC.desc}
                                </p>
                                <ul>
                                    <li>{sThreeC.item1}</li>
                                    <li>{sThreeC.item2}</li>
                                    <li>{sThreeC.item3}</li>
                                </ul>
                            </div>
                        </div>
                    )} 
                </div>
            </div>
        </div>
    );
};

export default ServiceThreeArea;