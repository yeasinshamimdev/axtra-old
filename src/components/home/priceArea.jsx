import Link from "next/link";

export default function PriceArea() {
    return (
        <section className="price__area pt-130 pb-140">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="sec-title-wrapper">
                            <h2 className="sec-sub-title title-anim">Pricing Table</h2>
                            <h3 className="sec-title title-anim">Be kind to your <br />mind</h3>
                        </div>
                        <div className="faq__list-3">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Design should enrich our day
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Our design services starts and ends with a best-in-class experience strategy that builds
                                                brands. Through a process of iteration and prototyping design interfaces that bring joy to
                                                people</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Bring their individual experience and creative
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>This is the second items accordion body. It is hidden by default, until the
                                                collapse plugin adds the appropriate classes that we use to style each element. These
                                                classes.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Human centred design to challenges
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Our design services starts and ends with a best-in-class experience strategy that builds
                                                brands. Through a process of iteration and prototyping design interfaces that bring joy to
                                                people</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Design should enrich our day
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Our design services starts and ends with a best-in-class experience strategy that builds
                                                brands. Through a process of iteration and prototyping design interfaces that bring joy to
                                                people</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Developing core web applications
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Our design services starts and ends with a best-in-class experience strategy that builds
                                                brands. Through a process of iteration and prototyping design interfaces that bring joy to
                                                people</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="price__table">
                            <div className="price__item animation_from_bottom">
                                <div className="price__icon"><span><i className="fa-solid fa-check"></i></span></div>
                                <div className="price__info">
                                    <h2 className="price__type">Yearly</h2>
                                    <h3 className="price__title">14 days free</h3>
                                    <p>Subscription fee is $129.99 USD and automatically renews each year.</p>
                                </div>
                                <div className="price__amount">
                                    <h4 className="best-value">Best Value</h4>
                                    <p>$129<span> .99</span></p>
                                </div>
                            </div>

                            <div className="price__item animation_from_top">
                                <div className="price__icon"><span><i className="fa-solid fa-check"></i></span></div>
                                <div className="price__info">
                                    <h2 className="price__type">Monthly</h2>
                                    <h3 className="price__title">7 days free</h3>
                                    <p>Subscription fee is $12.99 USD and automatically renews each year.</p>
                                </div>
                                <div className="price__amount">
                                    <p>$12<span> .99</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="price__btn" id="btn_wrapper">
                            <Link href="/contact" className="wc-btn-black btn-hover btn-item"><span></span> Try it <br />Free Now <i
                                className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}