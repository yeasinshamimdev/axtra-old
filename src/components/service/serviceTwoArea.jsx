import Link from 'next/link';
import React from 'react';
import { serviceTwoContent } from '../constants/constants';

const ServiceTwoArea = () => {
    return (
        <div className="service__list-wrapper">
            <div className="row">
                <div className="col-xxl-4 col-xl-4 col-lg-0 col-md-0">
                    <div className="service__img-wrapper">
                        <img src="assets/imgs/service/1/1.jpg" alt="Service Image" className="service__img img-1 active" />
                        <img src="assets/imgs/service/1/2.png" alt="Service Image" className="service__img img-2" />
                        <img src="assets/imgs/service/1/3.png" alt="Service Image" className="service__img img-3" />
                        <img src="assets/imgs/service/1/4.png" alt="Service Image" className="service__img img-4" />

                        <span className="shape-box-1 current"></span>
                        <span className="shape-box-2"></span>
                        <span className="shape-box-3"></span>
                        <span className="shape-box-4"></span>
                    </div>
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
                    <div className="service__list">

                        {serviceTwoContent.map((sMainC, i) =>
                            <Link href="/service-details" key={i}>
                                <div className="service__item  animation_home1_service" data-service={sMainC.number} >
                                    <div className="service__number"><span>0{sMainC.number}</span></div>
                                    <div className="service__title-wrapper">
                                        <h4 className="service__title">{sMainC.title1} <br />{sMainC.title2}</h4>
                                    </div>
                                    <div className="service__text">
                                        <p> {sMainC.desc}</p>
                                    </div>
                                    <div className="service__link">
                                        <p><i className="fa-solid fa-arrow-right"></i></p>
                                    </div>
                                </div>
                            </Link>
                        )}

                        <Link href="/service-details">
                            <div className="service__item  animation_home1_service" data-service="4">
                                <div className="service__number"><span>04</span></div>
                                <div className="service__title-wrapper">
                                    <h4 className="service__title">Branding and Strategy</h4>
                                </div>
                                <div className="service__text">
                                    <p>We create, products, brands, apps & websites for the companies all around the world class
                                        digital
                                        products</p>
                                </div>
                                <div className="service__link">
                                    <p><i className="fa-solid fa-arrow-right"></i></p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceTwoArea;