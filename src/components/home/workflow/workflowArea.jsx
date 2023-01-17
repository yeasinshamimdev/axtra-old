import Link from "next/link";
import HomeCtaArea from "../cta/homeCtaArea";

export default function WorkflowArea() {
    return (
        <section className="workflow__area-3">
            <div className="workflow__wrapper-3">
                <div className="choose-wrapper wf_panel">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="choose-title-wrapper">
                                    <h2 className="choose-title title-anim">why <br /> choose us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="research__area wf_panel pt-150">
                    <div className="container inner_content">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                <div className="sec-title-wrapper">
                                    <h2 className="sec-sub-title">why <br />choose us</h2>
                                    <h3 className="sec-title">Keword,Research Strategy, Survey, & Analytics</h3>
                                    <p>Attention, we take out our round glasses and our sweater with elbow patches to go back to the
                                        origins of the user experience: the first mention of the user and its importance was born in the
                                    </p>
                                </div>
                                <ul className="research__tools">
                                    <li><Link href="#">Google</Link></li>
                                    <li><Link href="#">pinterest</Link></li>
                                    <li><Link href="#">Instagram</Link></li>
                                </ul>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                <div className="research__list">
                                    <div className="research__item">
                                        <div className="research__number">
                                            <span>60%</span>
                                        </div>
                                        <div className="research__info">
                                            <h4 className="research__title">Strategy</h4>
                                            <p>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
                                        </div>
                                    </div>

                                    <div className="research__item">
                                        <div className="research__number">
                                            <span>95%</span>
                                        </div>
                                        <div className="research__info">
                                            <h4 className="research__title">Audience</h4>
                                            <p>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
                                        </div>
                                    </div>

                                    <div className="research__item">
                                        <div className="research__number">
                                            <span>70%</span>
                                        </div>
                                        <div className="research__info">
                                            <h4 className="research__title">Keyword</h4>
                                            <p>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="counter__area-3 wf_panel">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="sec-title-wrapper">
                                    <h2 className="sec-sub-title">Why <br />Choose Us</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                                <div className="counter__wrapper-3">
                                    <div className="counter__item-3">
                                        <h2 className="counter__number">25k</h2>
                                        <p>Project <br />completed</p>
                                    </div>
                                    <div className="counter__item-3">
                                        <h2 className="counter__number">8k</h2>
                                        <p>Happy <br />customers</p>
                                    </div>
                                    <div className="counter__item-3">
                                        <h2 className="counter__number">15</h2>
                                        <p>Years <br />experiences</p>
                                    </div>
                                    <div className="counter__item-3">
                                        <h2 className="counter__number">98</h2>
                                        <p>Awards <br />achievement</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                                <div className="counter__img-3">
                                    <img src="assets/imgs/thumb/counter-3.png" alt="Counter Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CTA area start */}
                <HomeCtaArea />
                {/* CTA area end */}
            </div>
        </section>
    )
}