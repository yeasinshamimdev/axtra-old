import Link from 'next/link';
import React from 'react';
import { serviceFourContent } from '../constants/constants';

const ServiceFourArea = () => {
    return (
        <div className="row">
            <div className="col-xx-12">
                <div className="service__list-3">
                    { serviceFourContent.map(sFourC => 
                   <div className="service__item-3 service_animation" key={sFourC.number}>
                        <h3><Link href="/service-details" className="service__title-3">{sFourC.title1} <br />{sFourC.title2} </Link></h3>
                        <div className="service__content-3">
                            <p>{sFourC.desc}
                            </p>
                            <ul className="">
                                <li>{sFourC.item1}</li>
                                <li>{sFourC.item2}</li>
                                <li>{sFourC.item3}</li>
                            </ul>
                        </div>
                        <div className="service__btn-3">
                            <div id="btn_wrapper">
                                <Link href="/service-details" className="wc-btn-black btn-hover btn-item"><span></span> Details
                                    <i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>

                        {sFourC.number === "1" && <div className="service__hover-3" style={{"background-image": "url(assets/imgs/service/3/1.jpg)"}}></div>}
                        {sFourC.number === "2" && <div className="service__hover-3" style={{"background-image": "url(assets/imgs/service/3/2.png)"}}></div>}

                        {sFourC.number === "3" && <div className="service__hover-3" style={{"background-image": "url(assets/imgs/service/3/3.png)"}}></div>}
                        {sFourC.number === "4" && <div className="service__hover-3" style={{"background-image": "url(assets/imgs/service/3/4.png)"}}></div>}
                        
                    </div> ) } 
                    <div className="service3__img-wrap">
                        <div className="service3__img"></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceFourArea;