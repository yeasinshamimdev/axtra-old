import Link from "next/link";

export default function HomeServiceArea2() {
    return (
        <section className="service__area-2 pt-130 pb-110">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="sec-text text-anim">
                            <p>We are passionate to create connected brands and services, and campaigns to enable stable and
                                successful relationships between businesses and customers.</p>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="sec-title-wrapper">
                            <h2 className="sec-title title-anim">We grow your brands through
                                bold service
                                we’re providing</h2>
                        </div>
                    </div>
                </div>

                <div className="row pt-140">
                    <div className="col-xxl-12">
                        <div className="service__list-2 animation__service-2">
                            <div className="service__item-2">
                                <div>
                                    <img src="assets/imgs/service/2/1.png" alt="Service Icon" />
                                    <h3 className="service__title-2">Branding <br />Design</h3>
                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                    </p>
                                    <ul>
                                        <li>+ Logo Design</li>
                                        <li>+ Advertisement</li>
                                        <li>+ Promotion</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="service__item-2">
                                <div>
                                    <img src="assets/imgs/service/2/2.png" alt="Service Icon" />
                                    <h3 className="service__title-2 ">Digital Product <br />Design</h3>
                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                    </p>
                                    <ul>
                                        <li>+ Logo Design</li>
                                        <li>+ Advertisement</li>
                                        <li>+ Promotion</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="service__item-2">
                                <div>
                                    <img src="assets/imgs/service/2/3.png" alt="Service Icon" />
                                    <h3 className="service__title-2">Architectural <br />Design</h3>
                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                    </p>
                                    <ul>
                                        <li>+ Logo Design</li>
                                        <li>+ Advertisement</li>
                                        <li>+ Promotion</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-12">
                        <div id="btn_wrapper" className="service__btn-2">
                            <Link href="/service" className="wc-btn-pink btn-hover btn-item"><span></span> View <br />all services
                                <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}