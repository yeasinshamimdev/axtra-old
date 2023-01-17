import Link from "next/link";

export default function CareerHero() {
    return (
        <section className="career__top">
            <div className="career__top-title">
                <div className="container pt-120">
                    <div className="row pb-120">
                        <div className="col-xxl-10 col-xl-9 col-lg-9 col-md-9">
                            <div className="sec-title-wrapper">
                                <h2 className="sec-title-2 animation__char_come">Join our team & let’s work together</h2>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-3">
                            <div id="btn_wrapper">
                                <Link href="#job_list" className="wc-btn-secondary btn-hover btn-item"><span></span> Explore job
                                    <br />vacancies <i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="career__thumb">
                <div className="container g-0">
                    <div className="row inherit">
                        <div className="col-xxl-12">
                            <div className="career__top-img">
                                <video autoPlay muted loop>
                                    <source src="assets/video/video.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}