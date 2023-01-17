import Link from 'next/link';
import React from 'react';
import TeamHero from './teamHero';
import TeamSliderArea from './teamSliderArea';

const TeamAreaMain = () => {
    return (
        <section className="team__area-6">
            <div className="container line pt-120">
                <span className="line-3"></span>
                <TeamHero/>
            </div>

            <TeamSliderArea/>

            <div className="container line pt-150">
                <div className="line-3"></div>
            </div>

            <div className="team__join-btn">
                <div id="btn_wrapper">
                    <Link href="/contact" className="wc-btn-primary btn-item btn-hover"><span></span> Join our  <br />talented team
                        <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>
        </section>
    );
};

export default TeamAreaMain;