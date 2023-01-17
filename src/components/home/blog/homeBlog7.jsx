import Link from "next/link";

export default function HomeBlog7() {
    return (
        <section className="blog__area-7 blog__animation">
            <div className="container g-0 pb-140">
                <div className="row">
                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                        <div className="sec-title-wrapper">
                            <h3 className="sec-title title-anim">News insignt</h3>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <article className="blog__item">
                            <div className="blog__img-wrapper">
                                <Link href="/blog-details">
                                    <div className="img-box">
                                        <img className="image-box__item" src="assets/imgs/blog/1/1.jpg" alt="" />
                                        <img className="image-box__item" src="assets/imgs/blog/1/1.jpg" alt="" />
                                    </div>
                                </Link>
                            </div>
                            <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
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
                                        <img className="image-box__item" src="assets/imgs/blog/1/2.jpg" alt="" />
                                        <img className="image-box__item" src="assets/imgs/blog/1/2.jpg" alt="" />
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
                                        <img className="image-box__item" src="assets/imgs/blog/1/3.jpg" alt="Blog Thumbnail" />
                                        <img className="image-box__item" src="assets/imgs/blog/1/3.jpg" alt="BLog Thumbnail" />
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