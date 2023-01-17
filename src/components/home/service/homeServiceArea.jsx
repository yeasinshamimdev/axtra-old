import Link from "next/link";

export default function HomeServiceArea() {
    return (
        <section className="service__area-3 pb-150">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="sec-title-wrapper pt-130 text-anim">
                            <h2 className="sec-sub-title title-anim">Services</h2>
                            <h3 className="sec-title title-anim">Our marketing <br /> Services</h3>
                            <p>Consumers today rely heavily on digital means to research products.
                                We
                                research a brand of bldend
                                engaging with it, according to the meanwhile, 51% of consumers say they use Google to research
                                products before buying.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xx-12">
                        <div className="service__list-3">
                            <div className="service__item-3 service_animation">
                                <h3><Link href="/service-details" className="service__title-3">Search Engine <br />Optimization</Link></h3>
                                <div className="service__content-3">
                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                    </p>
                                    <ul className="">
                                        <li>+ Logo Design</li>
                                        <li>+ Advertisement</li>
                                        <li>+ Promotion</li>
                                    </ul>
                                </div>
                                <div className="service__btn-3">
                                    <div id="btn_wrapper">
                                        <Link href="/service-details" className="wc-btn-black btn-hover btn-item"><span></span> Details
                                            <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>

                                <div className="service__hover-3" style={{ backgroundImage: "url(assets/imgs/service/3/1.jpg)" }}></div>
                            </div>

                            <div className="service__item-3 service_animation">
                                <h3><Link href="/service-details" className="service__title-3 ">Email <br />Marketing</Link></h3>
                                <div className="service__content-3">
                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                    </p>
                                    <ul className="">
                                        <li>+ Logo Design</li>
                                        <li>+ Advertisement</li>
                                        <li>+ Promotion</li>
                                    </ul>
                                </div>
                                <div className="service__btn-3">
                                    <div id="btn_wrapper">
                                        <Link href="/service-details" className="wc-btn-black btn-hover btn-item"><span></span> Details
                                            <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>

                                <div className="service__hover-3" style={{ backgroundImage: "url(assets/imgs/service/3/2.png)" }}></div>
                            </div>

                            <div className="service__item-3 service_animation">
                                <h3 className=""><Link href="/service-details" className="service__title-3">COntent
                                    <br />Marketing</Link></h3>
                                <div className="service__content-3">
                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                    </p>
                                    <ul className="">
                                        <li>+ Logo Design</li>
                                        <li>+ Advertisement</li>
                                        <li>+ Promotion</li>
                                    </ul>
                                </div>
                                <div className="service__btn-3 ">
                                    <div id="btn_wrapper">
                                        <Link href="/service-details" className="wc-btn-black btn-hover btn-item"><span></span> Details
                                            <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>

                                <div className="service__hover-3" style={{ backgroundImage: "url(assets/imgs/service/3/3.png)" }}></div>
                            </div>

                            <div className="service__item-3 service_animation">
                                <h3 className=""><Link href="/service-details" className="service__title-3">Social
                                    <br />Marketing</Link></h3>
                                <div className="service__content-3">
                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                    </p>
                                    <ul className="">
                                        <li>+ Logo Design</li>
                                        <li>+ Advertisement</li>
                                        <li>+ Promotion</li>
                                    </ul>
                                </div>
                                <div className="service__btn-3">
                                    <div id="btn_wrapper">
                                        <Link href="/service-details" className="wc-btn-black btn-hover btn-item"><span></span> Details
                                            <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>

                                <div className="service__hover-3" style={{ backgroundImage: "url(assets/imgs/service/3/4.png)" }}></div>
                            </div>

                            <div className="service3__img-wrap">
                                <div className="service3__img"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}