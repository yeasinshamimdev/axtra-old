import Link from "next/link";

export default function FaqArea4() {
    return (
        <section className="faq__area-4 pt-150 pb-150">
            <div className="container g-0">
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-6">
                        <div className="faq__sec-title text-anim">
                            <h2 className="sec-subtile-6">Expertise</h2>
                            <h3 className="sec-title-6 title-anim">With more than 16+ years of experience, our team has become a
                                leader in
                                digital innovations.</h3>
                            <p>Grow brands through bold, strategic creative</p>
                            <Link className="btn-view" href="/about">Know More <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-6">
                        <div className="faq__list-4">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item fade_bottom_3">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button " type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Design should enrich our day
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Using year-over-year design approaches and latest techs, we will ensure that your new
                                                website will be <span>accessible, and treads lightly</span>.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item fade_bottom_3">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Bring their individual experience and creative
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>This is the second items accordion body. It is hidden by default, until the
                                                collapse plugin adds the appropriate classes that we use to style each element. These
                                                classes</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item fade_bottom_3">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
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

                                <div className="accordion-item fade_bottom_3">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
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
                            </div>
                        </div>
                    </div>
                </div>
                <img className="faq__img6-1" src="assets/imgs/bg/4/1.png" alt="Shape" />
                <img className="faq__img6-2" src="assets/imgs/bg/4/2.png" alt="Shape" />
            </div>
        </section>
    )
}