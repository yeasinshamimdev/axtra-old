import Link from 'next/link';
import React from 'react';
import { teamContent } from '../constants/constants';

const TeamSliderArea = () => {
    return (
        <div className="swiper team__slider">
            <div className="swiper-wrapper">
                {
                    teamContent.map((tC, i) =>
                        <div className="swiper-slide team__slide" key={i}>
                            <Link href="/team-details">
                                <img src={tC.url} alt="Team Member" />
                                <div className="team__info">
                                    <h4 className="team__member-name-6">{tC.title}</h4>
                                    <h5 className="team__member-role-6">{tC.subTitle}</h5>
                                </div>
                            </Link>
                        </div>
                    )
                } 
            </div>
        </div>
    );
};

export default TeamSliderArea;