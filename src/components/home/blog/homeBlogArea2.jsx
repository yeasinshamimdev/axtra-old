import Link from "next/link";

export default function HomeBlogArea2() {
    return (
        <section className="blog__area-2 blog__animation">
            <div className="container g-0 pt-150 pb-110">
                <div className="row ">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <div className="sec-title-wrapper">
                            <h2 className="sec-title title-anim">Updated Journal</h2>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-4">
                        <div className="sec-text text-anim">
                            <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.</p>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-3 col-md-4">
                        <div id="btn_wrapper" className="sec-btn">
                            <Link href="/blog" className="wc-btn-pink btn-hover btn-item"><span></span> Read <br />all journal <i
                                className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <article className="blog__item-2">
                            <div className="blog__img-wrapper">
                                <Link href="/blog-details">
                                    <div className="img-box">
                                        <img className="image-box__item" src="assets/imgs/blog/1/1.jpg" alt="Blog Thumbnail" />
                                        <img className="image-box__item" src="assets/imgs/blog/1/1.jpg" alt="BLog Thumbnail" />
                                    </div>
                                </Link>
                            </div>
                            <h4 className="blog__meta-2"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                            <h5><Link href="/blog-details" className="blog__title-2">Ways of lying to yourself about your
                                new relationship.</Link></h5>
                        </article>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <article className="blog__item-2">
                            <div className="blog__img-wrapper">
                                <Link href="/blog-details">
                                    <div className="img-box">
                                        <img className="image-box__item" src="assets/imgs/blog/1/2.jpg" alt="Blog Thumbnail" />
                                        <img className="image-box__item" src="assets/imgs/blog/1/2.jpg" alt="BLog Thumbnail" />
                                    </div>
                                </Link>
                            </div>
                            <h4 className="blog__meta-2"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                            <h5><Link href="/blog-details" className="blog__title-2">How to manage a talented and
                                successful de sign team</Link></h5>
                        </article>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <article className="blog__item-2">
                            <div className="blog__img-wrapper">
                                <Link href="/blog-details">
                                    <div className="img-box">
                                        <img className="image-box__item" src="assets/imgs/blog/1/3.jpg" alt="Blog Thumbnail" />
                                        <img className="image-box__item" src="assets/imgs/blog/1/3.jpg" alt="BLog Thumbnail" />
                                    </div>
                                </Link>
                            </div>
                            <h4 className="blog__meta-2"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                            <h5><Link href="/blog-details" className="blog__title-2">How to bring fold to your startup
                                company with Axtra</Link></h5>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}