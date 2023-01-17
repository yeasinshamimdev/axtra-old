import Link from "next/link";

export default function HomeBlog4() {
    return (
        <section className="blog__area-4 blog__animation">
            <div className="container g-0 line_4 pt-150 pb-150">
                <div className="line-col-4">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <div className="sec-title-wrapper text-anim">
                            <h2 className="sec-subtile-6">Recent Blog</h2>
                            <h3 className="sec-title-6 title-anim">Updated <br /> Journal</h3>
                            <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.</p>
                            <Link className="btn-started" href="#">All Articles <span><i
                                className="fa-solid fa-arrow-right"></i></span></Link>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <article className="blog__item-4">
                            <div className="blog__img-4">
                                <Link href="/blog-details">
                                    <img src="assets/imgs/blog/4/1.jpg" alt="Blog Image" />
                                </Link>
                            </div>
                            <h4 className="blog__meta-4"><Link href="/category">UI Design</Link> <span>02 May 2019</span></h4>
                            <h5><Link href="/blog-details" className="blog__title-4">Ways of lying to yourself about your new
                                relationship.</Link></h5>
                            <Link href="/blog-details" className="blog__btn-4">Read More <span><i
                                className="fa-solid fa-arrow-right"></i></span></Link>
                        </article>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <article className="blog__item-4">
                            <div className="blog__img-4">
                                <Link href="/blog-details">
                                    <img src="assets/imgs/blog/4/2.jpg" alt="Blog Image" />
                                </Link>
                            </div>
                            <h4 className="blog__meta-4"><Link href="/category">UX Design</Link> <span>02 May 2019</span></h4>
                            <h5><Link href="/blog-details" className="blog__title-4">Ways of lying to yourself about your new
                                relationship.</Link></h5>
                            <Link href="/blog-details" className="blog__btn-4">Read More <span><i
                                className="fa-solid fa-arrow-right"></i></span></Link>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}