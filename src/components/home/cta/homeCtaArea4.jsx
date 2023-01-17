import Link from "next/link";

export default function HomeCtaArea4() {
    return (
        <div className="cta__area-4">
            <div className="container g-0 line_4 pb-150">
                <div className="line-col-4">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className="cta__inner-4">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                            <div className="cta__content-4">
                                <img src="assets/imgs/thumb/4/1.png" alt="Cta Image" />
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                            <div className="cta__content-4">
                                <h2 className="cta__title-4 title-anim">Lat’s make someting great together</h2>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                            <div className="cta__content-4 text-anim">
                                <p>Using year-over-year most design approaches and latest techs website will be lightly.</p>
                                <Link className="btn-started" href="/contact">Get a Quote <span><i
                                    className="fa-solid fa-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>

                    <img src="assets/imgs/shape/21.png" alt="shape Image" className="cta-shape" />
                    <img src="assets/imgs/shape/22.png" alt="shape Image" className="cta-shape-2" />
                </div>
            </div>
        </div>
    )
}