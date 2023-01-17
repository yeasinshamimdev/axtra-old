import Link from "next/link";
import { Fragment } from "react";

export default function HeroArea6() {
    return (
        <Fragment>
            <section className="hero__area-6">
                <div className="container g-0 line_4">
                    <div className="line-col-4">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            <div className="hero__content-6 hero__six_anim">
                                <img className="hero__arrow-icon" src="assets/imgs/hero/4/arrow-icon.png" alt="Arrow Icon" />
                                <h1 className="hero__title-6 ">Magical <br /> Axtra Startup Solution </h1>
                                <p>Our team always reviews all previous methods with <br /> models, and
                                    processes to determined</p>
                                <Link className="btn-started btn-hover" href="/contact">Get Started</Link>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            <div className="hero__right-6">
                                <img src="assets/imgs/hero/4/hero-4.png" alt="Hero Image" />
                            </div>
                        </div>
                    </div>
                </div>
                <img className="hero__shape" src="assets/imgs/hero/4/hero-shape.png" alt="Shape Image" />
                <img className="hero__shape-2" src="assets/imgs/hero/4/hero-shape-2.png" alt="Layout" />
                <img className="hero__shape-3" src="assets/imgs/hero/4/hero-shape-3.png" alt="Star Icon" />
                <img className="shape-4" src="assets/imgs/shape/20.png" alt="Star Icon" />
            </section>
        </Fragment>
    )
}