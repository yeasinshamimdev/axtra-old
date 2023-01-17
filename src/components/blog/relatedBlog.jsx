import Link from "next/link";

export default function RelatedBlog() {
    return (
        <section className="blog__related blog__animation">
            <div className="container g-0 line pt-130 pb-140">
                <span className="line-3"></span>
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="sec-title-wrapper">
                            <h2 className="sec-title title-anim">Related Aricles</h2>
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
                            <h4 className="blog__meta sub-title-anim"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                            <h5><Link href="/blog-details" className="blog__title sub-title-anim">Ways of lying to yourself about
                                your new
                                relationship.</Link></h5>
                            <Link href="/blog-details" className="blog__btn">Read More <span><i
                                className="fa-solid fa-arrow-right"></i></span></Link>
                        </article>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <article className="blog__item" data-speed="auto">
                            <div className="blog__img-wrapper">
                                <Link href="/blog-details">
                                    <div className="img-box">
                                        <img className="image-box__item" src="assets/imgs/blog/2.jpg" alt="Blog Thumbnail" />
                                        <img className="image-box__item" src="assets/imgs/blog/2.jpg" alt="BLog Thumbnail" />
                                    </div>
                                </Link>
                            </div>
                            <h4 className="blog__meta sub-title-anim"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                            <h5><Link href="/blog-details" className="blog__title sub-title-anim">How to manage a talented and
                                successful de sign
                                team</Link></h5>
                            <Link href="/blog-details" className="blog__btn">Read More <span><i
                                className="fa-solid fa-arrow-right"></i></span></Link>
                        </article>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <article className="blog__item" data-speed="auto">
                            <div className="blog__img-wrapper">
                                <Link href="/blog-details">
                                    <div className="img-box">
                                        <img className="image-box__item" src="assets/imgs/blog/3.jpg" alt="Blog Thumbnail" />
                                        <img className="image-box__item" src="assets/imgs/blog/3.jpg" alt="BLog Thumbnail" />
                                    </div>
                                </Link>
                            </div>
                            <h4 className="blog__meta sub-title-anim"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                            <h5><Link href="/blog-details" className="blog__title sub-title-anim">How to bring fold to your startup
                                company with
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