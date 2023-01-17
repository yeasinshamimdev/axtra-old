import Link from "next/link";

export default function TeamArea7() {
    return (
        <section className="team__area-7">
            <h2 className="team__title-7 title-anim">Team</h2>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="sec-text pb-140 text-anim">
                            <p>We are here to help you achieve your business goals and the team create an amazing outstanding
                                product for your business.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="team__items-7">
                            <Link href="/team-details">
                                <div className="team__item-7 fade_bottom_3">
                                    <div className="team__name-wrap-7">
                                        <p className="tm-serial">01</p>

                                        <h3 className="tm-name">Saymon D. Halk</h3>
                                    </div>
                                    <h4 className="tm-role">Web <br /> Developer</h4>
                                    <div className="tm-link"><i className="fa-solid fa-arrow-right"></i></div>
                                    <div className="team__hover-7" style={{ backgroundImage: "url(assets/imgs/team/1.jpg)" }}></div>
                                </div>
                            </Link>

                            <Link href="/team-details">
                                <div className="team__item-7 fade_bottom_3">
                                    <div className="team__name-wrap-7">
                                        <p className="tm-serial">02</p>

                                        <h3 className="tm-name">Aliya D. Albert</h3>
                                    </div>
                                    <h4 className="tm-role">Founder <br /> CEO</h4>
                                    <div className="tm-link"><i className="fa-solid fa-arrow-right"></i></div>
                                    <div className="team__hover-7" style={{ backgroundImage: "url(assets/imgs/team/2.jpg" }} ></div>
                                </div>
                            </Link>

                            <Link href="/team-details">
                                <div className="team__item-7 fade_bottom_3">
                                    <div className="team__name-wrap-7">
                                        <p className="tm-serial">03</p>
                                        <h3 className="tm-name">Jassica Oliver</h3>
                                    </div>
                                    <h4 className="tm-role">Creative <br /> Content Writer </h4>
                                    <div className="tm-link"><i className="fa-solid fa-arrow-right"></i></div>
                                    <div className="team__hover-7" style={{ backgroundImage: "url(assets/imgs/team/3.jpg)" }}></div>
                                </div>
                            </Link>
                            <Link href="/team-details">
                                <div className="team__item-7 fade_bottom_3">
                                    <div className="team__name-wrap-7">
                                        <p className="tm-serial">04</p>
                                        <h3 className="tm-name">Daniyel Adamson</h3>
                                    </div>
                                    <h4 className="tm-role">Head of <br /> Researcher</h4>
                                    <div className="tm-link"><i className="fa-solid fa-arrow-right"></i></div>
                                    <div className="team__hover-7" style={{ backgroundImage: "url(assets/imgs/team/4.jpg)" }}></div>
                                </div>
                            </Link>
                            <Link href="/team-details">
                                <div className="team__item-7 fade_bottom_3">
                                    <div className="team__name-wrap-7">
                                        <p className="tm-serial">05</p>
                                        <h3 className="tm-name">Hardiya Kethrine</h3>
                                    </div>
                                    <h4 className="tm-role">Digital <br /> Marketer</h4>
                                    <div className="tm-link"><i className="fa-solid fa-arrow-right"></i></div>
                                    <div className="team__hover-7" style={{ backgroundImage: "url(assets/imgs/team/5.jpg)" }}></div>
                                </div>
                            </Link>
                            <Link href="/team-details">
                                <div className="team__item-7 fade_bottom_3">
                                    <div className="team__name-wrap-7">
                                        <p className="tm-serial">06</p>
                                        <h3 className="tm-name">Julian B. Folder</h3>
                                    </div>
                                    <h4 className="tm-role">Creative <br /> Designer</h4>
                                    <div className="tm-link"><i className="fa-solid fa-arrow-right"></i></div>
                                    <div className="team__hover-7" style={{ backgroundImage: "url(assets/imgs/team/6.jpg)" }}></div>
                                </div>
                            </Link>
                            <Link href="/team-details">
                                <div className="team__item-7 fade_bottom_3">
                                    <div className="team__name-wrap-7">
                                        <p className="tm-serial">07</p>
                                        <h3 className="tm-name">Denial Karlos</h3>
                                    </div>
                                    <h4 className="tm-role">Backend <br /> Developer</h4>
                                    <div className="tm-link"><i className="fa-solid fa-arrow-right"></i></div>
                                    <div className="team__hover-7" style={{ backgroundImage: "url(assets/imgs/team/7.jpg)" }}></div>
                                </div>
                            </Link>
                            <div className="team7__img-wrap">
                                <div className="team7__img"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}