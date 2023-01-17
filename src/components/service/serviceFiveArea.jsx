import Link from 'next/link';
import React from 'react';
import { serviceFiveContent } from '../constants/constants';

const ServiceFiveArea = () => {
    return (
        <div className="portfolio__service-list">
                    <div className="row">
                        {serviceFiveContent.map((sFiveC, i) => 
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4" key={i}>
                        <div className="portfolio__service-item">
                            <Link href="/service-details">
                                <h3 className="ps-title">{sFiveC.title1} <br />{sFiveC.title2}</h3>
                                <ul>
                                    <li>{sFiveC.item1}</li>
                                    <li>{sFiveC.item2}</li>
                                    <li>{sFiveC.item3}</li>
                                </ul>
                            </Link>
                        </div>
                    </div>
                        )} 
                    </div>
                </div>
    );
};

export default ServiceFiveArea;