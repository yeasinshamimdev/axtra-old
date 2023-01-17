import Link from "next/link";

export default function ErrorPage() {
    return (
        <section className="error__page">
            <div className="container line">
                <span className="line-3"></span>
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="error__content">
                            <img src="assets/imgs/thumb/404.png" alt="Page not found" />
                            <h2>Sorry! page did not found</h2>
                            <p>The page you are looking for does not exist or has been moved</p>
                            <div id="btn_wrapper">
                                <Link href="/" className="wc-btn-primary btn-hover btn-item"><span></span> Back to <br />Homepage <i
                                    className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}