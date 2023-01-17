import Link from "next/link";

export default function HomePortfolioArea1() {
    return (
        <section className="portfolio__area pb-140">
            <div className="container">
                <div className="row top_row">

                    <h2 className="portfolio__text">work</h2>
                    <div className="portfolio__list-1">
                        <div className="portfolio__item">
                            <Link href="/portfolio-details"><img className="mover" src="assets/imgs/portfolio/1/1.jpg"
                                alt="Portfolio Image" /></Link>
                            <div className="portfolio__info">
                                <h3 className="portfolio__title">Arteck Lyon Conseil</h3>
                                <p>02 May 2021</p>
                            </div>
                        </div>
                        <div className="portfolio__item">
                            <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/2.jpg" alt="Portfolio Image" /></Link>
                            <div className="portfolio__info">
                                <h3 className="portfolio__title">Arteck Lyon Conseil</h3>
                                <p>02 May 2021</p>
                            </div>
                        </div>
                        <div className="portfolio__item">
                            <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/3.jpg" alt="Portfolio Image" /></Link>
                            <div className="portfolio__info">
                                <h3 className="portfolio__title">Arteck Lyon Conseil</h3>
                                <p>02 May 2021</p>
                            </div>
                        </div>
                        <div className="portfolio__item">
                            <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/4.jpg" alt="Portfolio Image" /></Link>
                            <div className="portfolio__info">
                                <h3 className="portfolio__title">Arteck Lyon Conseil</h3>
                                <p>02 May 2021</p>
                            </div>
                        </div>
                        <div className="portfolio__item">
                            <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/1.jpg" alt="Portfolio Image" /></Link>
                            <div className="portfolio__info">
                                <h3 className="portfolio__title">Arteck Lyon Conseil</h3>
                                <p>02 May 2021</p>
                            </div>
                        </div>
                        <div className="portfolio__item">
                            <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/2.jpg" alt="Portfolio Image" /></Link>
                            <div className="portfolio__info">
                                <h3 className="portfolio__title">Arteck Lyon Conseil</h3>
                                <p>02 May 2021</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row row_bottom">
                    <div className="col-xxl-12">
                        <div className="portfolio__btn" id="btn_wrapper" data-speed="1" data-lag="0.2">
                            <Link className="wc-btn-secondary btn-hover btn-item" href="/portfolio"><span></span>View <br />all
                                projects <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}