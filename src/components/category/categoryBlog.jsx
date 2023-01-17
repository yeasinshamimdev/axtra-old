import Link from "next/link";

export default function CategoryBlog() {
    return (
        <section className="blog__area-6 blog__animation">
            <div className="container g-0 line pt-110 pb-110">
                <span className="line-3"></span>
                <div className="row pb-130">
                    <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
                        <div className="sec-title-wrapper">
                            <h2 className="sec-title-2 animation__char_come">Interior <br /> Design</h2>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
                        <div className="blog__text">
                            <p>Crafting new bright brands, unique visual systems and digital experience focused on a wide range of
                                original collabs. </p>
                        </div>
                    </div>
                </div>

                <div className="row reset-grid">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <article className="blog__item">
                            <div className="blog__img-wrapper">
                                <Link href="/blog-details">
                                    <div className="img-box">
                                        <img className="image-box__item" src="assets/imgs/blog/1.jpg" alt="Blog Thumbnail" />
                                        <img className="image-box__item" src="assets/imgs/blog/1.jpg" alt="BLog Thumbnail" />
                                    </div>
                                </Link>
                            </div>
                            <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 15 March 2019</h4>
                            <h5><Link href="/blog-details" className="blog__title">Ways of lying to yourself about your new
                                relationship.</Link></h5>
                            <Link href="/blog-details" className="blog__btn">Read More <span><i
                                className="fa-solid fa-arrow-right"></i></span></Link>
                        </article>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <article className="blog__item">
                            <div className="blog__img-wrapper">
                                <Link href="/blog-details">
                                    <div className="img-box">
                                        <img className="image-box__item" src="assets/imgs/blog/2.jpg" alt="Blog Thumbnail" />
                                        <img className="image-box__item" src="assets/imgs/blog/2.jpg" alt="BLog Thumbnail" />
                                    </div>
                                </Link>
                            </div>
                            <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                            <h5><Link href="/blog-details" className="blog__title">How to manage a talented and successful de sign
                                team</Link></h5>
                            <Link href="/blog-details" className="blog__btn">Read More <span><i
                                className="fa-solid fa-arrow-right"></i></span></Link>
                        </article>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <article className="blog__item">
                            <div className="blog__img-wrapper">
                                <Link href="/blog-details">
                                    <div className="img-box">
                                        <img className="image-box__item" src="assets/imgs/blog/3.jpg" alt="Blog Thumbnail" />
                                        <img className="image-box__item" src="assets/imgs/blog/3.jpg" alt="BLog Thumbnail" />
                                    </div>
                                </Link>
                            </div>
                            <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2022</h4>
                            <h5><Link href="/blog-details" className="blog__title">How to bring fold to your startup company with
                                Axtra</Link></h5>
                            <Link href="/blog-details" className="blog__btn">Read More <span><i
                                className="fa-solid fa-arrow-right"></i></span></Link>
                        </article>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <article className="blog__item">
                            <div className="blog__img-wrapper">
                                <Link href="/blog-details">
                                    <div className="img-box">
                                        <img className="image-box__item" src="assets/imgs/blog/4.jpg" alt="Blog Thumbnail" />
                                        <img className="image-box__item" src="assets/imgs/blog/4.jpg" alt="BLog Thumbnail" />
                                    </div>
                                </Link>
                            </div>
                            <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 22 Dec 2018</h4>
                            <h5><Link href="/blog-details" className="blog__title">Ways of lying to yourself about your new
                                relationship.</Link></h5>
                            <Link href="/blog-details" className="blog__btn">Read More <span><i
                                className="fa-solid fa-arrow-right"></i></span></Link>
                        </article>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <article className="blog__item">
                            <div className="blog__img-wrapper">
                                <Link href="/blog-details">
                                    <div className="img-box">
                                        <img className="image-box__item" src="assets/imgs/blog/5.jpg" alt="Blog Thumbnail" />
                                        <img className="image-box__item" src="assets/imgs/blog/5.jpg" alt="BLog Thumbnail" />
                                    </div>
                                </Link>
                            </div>
                            <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                            <h5><Link href="/blog-details" className="blog__title">How to manage a talented and successful de sign
                                team</Link></h5>
                            <Link href="/blog-details" className="blog__btn">Read More <span><i
                                className="fa-solid fa-arrow-right"></i></span></Link>
                        </article>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <article className="blog__item">
                            <div className="blog__img-wrapper">
                                <Link href="/blog-details">
                                    <div className="img-box">
                                        <img className="image-box__item" src="assets/imgs/blog/6.jpg" alt="Blog Thumbnail" />
                                        <img className="image-box__item" src="assets/imgs/blog/6.jpg" alt="BLog Thumbnail" />
                                    </div>
                                </Link>
                            </div>
                            <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                            <h5><Link href="/blog-details" className="blog__title">How to bring fold to your startup company with
                                Axtra</Link></h5>
                            <Link href="/blog-details" className="blog__btn">Read More <span><i
                                className="fa-solid fa-arrow-right"></i></span></Link>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}