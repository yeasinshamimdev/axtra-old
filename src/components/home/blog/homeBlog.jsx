import Link from "next/link";

export default function HomeBlog() {
    return (
        <section className="blog__area-3 pb-140 blog__animation">
            <div className="container">
                <div className="row ">
                    <div className="col-xxl-12">
                        <div className="sec-title-wrapper text-anim pt-130">
                            <h2 className="sec-sub-title">Recent Blog</h2>
                            <h3 className="sec-title title-anim">Read Updated <br />Journal</h3>
                            <p>Read our blog and try to see everything from every perspective. Our passion lies in making
                                everything
                                accessible and aesthetic for everyone. </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <article className="blog__item-3">
                            <div className="blog__img-wrapper-3">
                                <Link href="/blog-details">
                                    <div className="img-box">
                                        <img className="image-box__item" src="assets/imgs/blog/3/1.jpg" alt="Blog Thumbnail" />
                                        <img className="image-box__item" src="assets/imgs/blog/3/1.jpg" alt="BLog Thumbnail" />
                                    </div>
                                </Link>
                            </div>
                            <div className="blog__info-3">
                                <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                                <h5><Link href="/blog-details" className="blog__title-3">How to bring fold to your startup
                                    company with
                                    Axtra</Link></h5>
                                <Link href="/blog-details" className="blog__btn">Read More <span><i
                                    className="fa-solid fa-arrow-right"></i></span></Link>
                            </div>
                        </article>
                    </div>

                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <article className="blog__item-3">
                            <div className="blog__img-wrapper-3">
                                <Link href="/blog-details">
                                    <div className="img-box">
                                        <img className="image-box__item" src="assets/imgs/blog/3/2.jpg" alt="Blog Thumbnail" />
                                        <img className="image-box__item" src="assets/imgs/blog/3/2.jpg" alt="BLog Thumbnail" />
                                    </div>
                                </Link>
                            </div>
                            <div className="blog__info-3">
                                <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                                <h5><Link href="/blog-details" className="blog__title-3">How to manage a talented and
                                    successful design
                                    team</Link></h5>
                                <Link href="/blog-details" className="blog__btn">Read More <span><i
                                    className="fa-solid fa-arrow-right"></i></span></Link>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}