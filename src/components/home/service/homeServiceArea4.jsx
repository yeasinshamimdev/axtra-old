import Link from "next/link";

export default function HomeServiceArea4() {
    return (
        <section className="service__area-4">
            <div className="container g-0 line_4 pt-150 pb-140">
                <div className="line-col-4">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className="row">
                    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                        <div className="service__left-6">
                            <h2 className="sec-subtile-6">Services</h2>
                            <h3 className="sec-title-6 title-anim">Our full <br /> creative services <br /> for you</h3>
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
                        <div className="service__right-4">
                            <p>We are constantly rethinking the future by creating the next generation of products, <span>brands
                                and services from a hybrid perspective.</span></p>
                            <Link className="btn-view" href="/service">View All Service <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="service__inner-4">
                    <div className="row">
                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                            <div className="service__img-left">
                                <img src="assets/imgs/service/4/service-1.png" alt="Service" />
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
                            <div className="service__list-4">
                                <div className="service__item-4 fade_bottom_2">
                                    <div className="service__item-number">
                                        <span>01</span>
                                    </div>
                                    <div className="service__title-wrapper-4">
                                        <h4><Link className="service__item-title" href="#">Brand Strategy</Link></h4>
                                    </div>
                                    <div className="service__item-icon">
                                        <Link href="/service-details"><i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                                <div className="service__item-4 fade_bottom_2">
                                    <div className="service__item-number">
                                        <span>02</span>
                                    </div>
                                    <div className="service__title-wrapper-4">
                                        <h4><Link className="service__item-title" href="#">Development</Link></h4>
                                    </div>
                                    <div className="service__item-icon">
                                        <Link href="/service-details"><i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                                <div className="service__item-4 fade_bottom_2">
                                    <div className="service__item-number">
                                        <span>03</span>
                                    </div>
                                    <div className="service__title-wrapper-4">
                                        <h4><Link className="service__item-title" href="#">UI/UX Design</Link></h4>
                                    </div>
                                    <div className="service__item-icon">
                                        <Link href="/service-details"><i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                                <div className="service__item-4 fade_bottom_2">
                                    <div className="service__item-number">
                                        <span>04</span>
                                    </div>
                                    <div className="service__title-wrapper-4">
                                        <h4><Link className="service__item-title" href="#">Digital marketing</Link></h4>
                                    </div>
                                    <div className="service__item-icon">
                                        <Link href="/service-details"><i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}