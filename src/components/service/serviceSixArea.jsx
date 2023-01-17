import Link from 'next/link';
import React from 'react';
import { serviceSixContent } from '../constants/constants';

const ServiceSixArea = () => {
    return (
        <section className="service__area-7 pt-130">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="service__items-7 animation_service_7">
                                {
                                    serviceSixContent.map((sSixC, i) => 
                                    <div className="service__item-7" key={i}>
                                    <Link href="/service-details">
                                        <h3 className="service__title-7">{sSixC.title1} <span>{sSixC.title2}</span></h3>
                                    </Link>
                                    <p> {sSixC.desc}
                                    </p>
                                    <ul>
                                        <li>{sSixC.item1}</li>
                                        <li>{sSixC.item2}</li>
                                        <li>{sSixC.item3}</li>
                                    </ul>
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

export default ServiceSixArea;