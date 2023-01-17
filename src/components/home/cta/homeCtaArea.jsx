import Link from "next/link";

export default function HomeCtaArea() {
    return (
        <div className="cta__area-3 wf_panel">
            <div className="container pt-150 pb-150">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="cta__content-3">
                            <p className="cta__sub-title-2">Have you project in mind?</p>
                            <h2 className="cta__title-2">Let’s make something great together!</h2>
                            <div id="btn_wrapper">
                                <Link href="/contact" className="wc-btn-black btn-hover btn-item"><span></span>Contact <br />with
                                    us <i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}