import Link from "next/link";

export default function TeamAbout() {
    return (
        <section className="team__area pt-140 pb-140">
            <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">Our Team</h2>
                <h3 className="sec-title title-anim">How we work</h3>
            </div>


            <div className="swiper team__slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide team__slide">
                        <Link href="/team-details">
                            <img src="assets/imgs/team/1.jpg" alt="Team Member" />
                            <div className="team__info">
                                <h4 className="team__member-name">Saymon D. Halk</h4>
                                <h5 className="team__member-role">Founder & CEO</h5>
                            </div>
                        </Link>
                    </div>

                    <div className="swiper-slide team__slide">
                        <Link href="/team-details">
                            <img src="assets/imgs/team/2.jpg" alt="Team Member" />
                            <div className="team__info">
                                <h4 className="team__member-name">Jassica Oliver</h4>
                                <h5 className="team__member-role">Researcher</h5>
                            </div>
                        </Link>
                    </div>

                    <div className="swiper-slide team__slide">
                        <Link href="/team-details">
                            <img src="assets/imgs/team/3.jpg" alt="Team Member" />
                            <div className="team__info">
                                <h4 className="team__member-name">Daniyel Adamson</h4>
                                <h5 className="team__member-role">Digital Marketer</h5>
                            </div>
                        </Link>
                    </div>

                    <div className="swiper-slide team__slide">
                        <Link href="/team-details">
                            <img src="assets/imgs/team/4.jpg" alt="Team Member" />
                            <div className="team__info">
                                <h4 className="team__member-name">Hardiya Kethrine</h4>
                                <h5 className="team__member-role">Lead Designer</h5>
                            </div>
                        </Link>
                    </div>

                    <div className="swiper-slide team__slide">
                        <Link href="/team-details">
                            <img src="assets/imgs/team/2.jpg" alt="Team Member" />
                            <div className="team__info">
                                <h4 className="team__member-name">Saymon D. Halk</h4>
                                <h5 className="team__member-role">Researcher</h5>
                            </div>
                        </Link>
                    </div>

                    <div className="swiper-slide team__slide">
                        <Link href="/team-details">
                            <img src="assets/imgs/team/3.jpg" alt="Team Member" />
                            <div className="team__info">
                                <h4 className="team__member-name">Jassica Oliver</h4>
                                <h5 className="team__member-role">Lead Designer</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}