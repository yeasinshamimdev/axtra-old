import Link from 'next/link';
import React from 'react';
import { serviceOneMainContent , serviceOneMidContent } from '../constants/constants';

const ServiceOneArea = () => {
    return (
        <section className="service__area-6">
            <div className="container">
                <div className="row inherit-row">
                    <div className="col-xxl-12">
                        <div className="content-wrapper">
                            <div className="left-content">
                                <ul className="service__list-6">
                                    <li className="active"><Link href="#service_1">Interaction <br />Design</Link></li>
                                    <li><Link href="#service_2">Web & Mobile <br />Development</Link></li>
                                    <li><Link href="#service_3">Motion & Branding <br />Design</Link></li>
                                    <li><Link href="#service_4">Digital <br /> Maketing</Link></li>
                                    <li><Link href="#service_5">Concept and <br />Strategy</Link></li>
                                    <li><Link href="#service_6">Illustrations & <br /> Prototype</Link></li>
                                </ul>
                            </div>

                            <div className="mid-content">
                                {
                                    serviceOneMidContent.map((bOne, i) =>
                                        <div className="service__image" key={i}>
                                            <img src={bOne.url} alt="Service Image" />
                                        </div>
                                    )
                                } 
                            </div>

                            <div className="right-content">
                                <div className="service__items-6">

                                   { serviceOneMainContent.map((bOneMain, i) =>
                                    <div className={`${bOneMain.uniqueClass} service__item-6 has__service_animation`} id={bOneMain.uId} data-secid={bOneMain.dataSecid} key={i}>
                                        <div className="image-tab">
                                            <img src={bOneMain.src} alt="Service Image" />
                                        </div>

                                        <div className="animation__service_page">
                                            <h2 className="service__title-6">{bOneMain.title}</h2>
                                            <p>{bOneMain.desc}</p>
                                            <ul>
                                                <li>{bOneMain.item1}</li>
                                                <li>{bOneMain.item2}</li>
                                                <li>{bOneMain.item3}</li>
                                                <li>{bOneMain.item4}</li>
                                                <li>{bOneMain.item5}</li>
                                                <li>{bOneMain.item6}</li>
                                            </ul>
                                            <div id="btn_wrapper">
                                                <Link href="/service-details" className="wc-btn-secondary btn-item btn-hover"><span></span>Get
                                                    free
                                                    <br />qoutes <i className="fa-solid fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    )} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceOneArea;