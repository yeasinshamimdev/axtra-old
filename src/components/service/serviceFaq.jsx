import React from 'react';

const ServiceFaq = () => {
    return (
        <section className="faq__area">
            <div className="container g-0 line pb-140">
                <div className="line-3"></div>
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="faq__img">
                            <img src="assets/imgs/thumb/faq.jpg" alt="FAQ Image" data-speed="auto" />
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="faq__content">
                            <h2 className="faq__title title-anim">Product making for friendly users</h2>

                            <div className="faq__list">
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
                                                <p>Our design services starts and ends with a best-in-class experience strategy that
                                                    builds brands. Through a process of iteration and prototyping design interfaces that
                                                    bring joy to people</p>
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
                                                    classes
                                                    control the overall appearance, as well as the showing and hiding via CSS transitions.
                                                    You can
                                                    modify any of this with custom CSS or overriding our default variables.</p>
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
                                                <p>Our design services starts and ends with a best-in-class experience strategy that
                                                    builds brands. Through a process of iteration and prototyping design interfaces that
                                                    bring joy to people</p>
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
                                                <p>Our design services starts and ends with a best-in-class experience strategy that
                                                    builds brands. Through a process of iteration and prototyping design interfaces that
                                                    bring joy to people</p>
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
                                                <p>Our design services starts and ends with a best-in-class experience strategy that
                                                    builds brands. Through a process of iteration and prototyping design interfaces that
                                                    bring joy to people</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceFaq;