import Link from "next/link";

export default function HomePortfolio7() {
    return (
        <section className="portfolio__area-7">
            <div className="container pt-100 pb-140">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="sec-title-wrapper text-anim">
                            <h2 className="sec-title title-anim">work</h2>
                            <p className="sec-text">Worked with global brands & agency at the
                                intersection of flat design and digital
                                technology.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="swiper portfolio__slider-7">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="portfolio__slide-7">
                            <div className="slide-img">
                                <Link href="/portfolio-details"><img src="assets/imgs/home-7/p1.jpg" alt="Portfolio Image" /></Link>
                            </div>
                            <div className="slide-content">
                                <Link href="/portfolio-details">
                                    <h2 className="title"> Lionpro <span>Agency</span> </h2>
                                </Link>
                                <h4 className="date">02 May 2021</h4>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="portfolio__slide-7">
                            <div className="slide-img">
                                <Link href="/portfolio-details"><img src="assets/imgs/home-7/p2.jpg" alt="Portfolio Image" /></Link>
                            </div>
                            <div className="slide-content">
                                <Link href="/portfolio-details">
                                    <h2 className="title"> Lionpro <span>Agency</span> </h2>
                                </Link>
                                <h4 className="date">02 May 2021</h4>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="portfolio__slide-7">
                            <div className="slide-img">
                                <Link href="/portfolio-details"><img src="assets/imgs/home-7/p1.jpg" alt="Portfolio Image" /></Link>
                            </div>
                            <div className="slide-content">
                                <Link href="/portfolio-details">
                                    <h2 className="title"> Lionpro <span>Agency</span> </h2>
                                </Link>
                                <h4 className="date">02 May 2021</h4>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="portfolio__slide-7">
                            <div className="slide-img">
                                <Link href="/portfolio-details"><img src="assets/imgs/home-7/p2.jpg" alt="Portfolio Image" /></Link>
                            </div>
                            <div className="slide-content">
                                <Link href="/portfolio-details">
                                    <h2 className="title"> Lionpro <span>Agency</span> </h2>
                                </Link>
                                <h4 className="date">02 May 2021</h4>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="portfolio__slide-7">
                            <div className="slide-img">
                                <Link href="/portfolio-details"><img src="assets/imgs/home-7/p1.jpg" alt="Portfolio Image" /></Link>
                            </div>
                            <div className="slide-content">
                                <Link href="/portfolio-details">
                                    <h2 className="title"> Lionpro <span>Agency</span> </h2>
                                </Link>
                                <h4 className="date">02 May 2021</h4>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="portfolio__slide-7">
                            <div className="slide-img">
                                <Link href="/portfolio-details"><img src="assets/imgs/home-7/p2.jpg" alt="Portfolio Image" /></Link>
                            </div>
                            <div className="slide-content">
                                <Link href="/portfolio-details">
                                    <h2 className="title"> Lionpro <span>Agency</span> </h2>
                                </Link>
                                <h4 className="date">02 May 2021</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}