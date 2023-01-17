import Link from "next/link";

export default function HomePortfolioArea() {
    return (
        <section className="portfolio__area-3">
            <div className="container pt-100 pb-150">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="sec-title-wrapper">
                            <h2 className="sec-sub-title title-anim">Featured <br />Work</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xxl-12">
                        <div className="swiper portfolio__slider-3">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="portfolio__slide-3">
                                        <Link href="/service-details">
                                            <h3 className="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                            <img src="assets/imgs/portfolio/3/2.jpg" alt="Portfolio Image" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="portfolio__slide-3">
                                        <Link href="/service-details">
                                            <h3 className="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                            <img src="assets/imgs/portfolio/3/1.jpg" alt="Portfolio Image" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="portfolio__slide-3">
                                        <Link href="/service-details">
                                            <h3 className="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                            <img src="assets/imgs/portfolio/3/3.jpg" alt="Portfolio Image" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="portfolio__slide-3">
                                        <Link href="/service-details">
                                            <h3 className="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                            <img src="assets/imgs/portfolio/3/4.jpg" alt="Portfolio Image" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-pagination"></div>

                            <div className="swiper-btn">
                                <div className="pp-prev"><i className="fa-solid fa-arrow-left"></i></div>
                                <div className="pp-next"><i className="fa-solid fa-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}