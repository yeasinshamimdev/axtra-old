import Head from "next/head";
import { Fragment, useState } from "react";
import CursorAnimation from "../../../components/common/cursorAnimation";
import GoTopButton from "../../../components/common/goTopButton";
import Offcanvas from "../../../components/common/offcanvas";
import Placeholder from "../../../components/common/placeholder";
import ScrollSmoother from "../../../components/common/scrollSmoother";
import SwitcherArea from "../../../components/common/switcherArea";
import HomeAboutArea7 from "../../../components/home/about/homeAboutArea7";
import AwardArea7 from "../../../components/home/award/awardArea7";
import HomeBlog7 from "../../../components/home/blog/homeBlog7";
import BrandArea from "../../../components/home/brand/brandArea";
import HomeCtaArea7 from "../../../components/home/cta/homeCtaArea7";
import HomeFooter2 from "../../../components/home/footer/indexFooter2";
import HeaderArea7 from "../../../components/home/head/headerArea7";
import HeroArea7 from "../../../components/home/hero/heroArea7";
import HomePortfolio7 from "../../../components/home/portfolio/homePortfolio7";
import HomeServiceArea7 from "../../../components/home/service/homeServiceArea7";
import TeamArea7 from "../../../components/home/teamArea";

export default function Index7({ mode }) {
    const [bgMode, setBgMode] = useState(mode);

    return (
        <Fragment>
            <Head>
                {/* Fav Icon */}
                <title>Home - Startup Agency</title>
                {
                    bgMode === "dark" ?
                        <>
                            <script src="assets/js/jquery-3.6.0.min.js" async />
                            <script src="assets/js/bootstrap.bundle.min.js" async />
                            <script src="assets/js/swiper-bundle.min.js" async />
                            <script src="assets/js/counter.js" async />
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js" async />
                            <script src="assets/js/ScrollTrigger.min.js" async />
                            <script src="assets/js/ScrollToPlugin.min.js" async />
                            <script src="assets/js/ScrollSmoother.min.js" async />
                            <script src="assets/js/SplitText.min.js" async />
                            <script src="assets/js/chroma.min.js" async />
                            <script src="assets/js/jquery.meanmenu.min.js" async />
                            <script src="assets/js/main.js" async />
                            <script src="assets/js/TweenMax.min.js" async />
                        </> :
                        <>
                            <script src="assets/js/jquery-3.6.0.min.js" async />
                            <script src="assets/js/bootstrap.bundle.min.js" async />
                            <script src="assets/js/swiper-bundle.min.js" async />
                            <script src="assets/js/counter.js" async />
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js" async />
                            <script src="assets/js/ScrollTrigger.min.js" async />
                            <script src="assets/js/ScrollToPlugin.min.js" async />
                            <script src="assets/js/ScrollSmoother.min.js" async />
                            <script src="assets/js/SplitText.min.js" async />
                            <script src="assets/js/chroma.min.js" async />
                            <script src="assets/js/jquery.meanmenu.min.js" async />
                            <script src="assets/js/main.js" async />
                            <script src="assets/js/TweenMax.min.js" async />
                        </>
                }
            </Head>
            <main className={bgMode === "dark" ? "dark" : ""}>
                {/* Cursor Animation */}
                <CursorAnimation />

                {/* Preloader */}
                <Placeholder />

                {/* Switcher Area Start */}
                <SwitcherArea setBgMode={setBgMode} bgMode={bgMode} />
                {/* Switcher Area End */}

                {/* Scroll Smoother */}
                <ScrollSmoother />

                {/* Go Top Button */}
                <GoTopButton />

                {/* Header area start */}
                <HeaderArea7 />
                {/* Header area end */}

                {/* Offcanvas area start */}
                <Offcanvas />
                {/* Offcanvas area end */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            {/* Hero area start  */}
                            <HeroArea7 />
                            {/* Hero area end */}

                            <div className="video__area about__img-2">
                                <img src="assets/imgs/home-7/video.jpg" alt="Video Image" data-speed="0.2" />
                            </div>

                            {/* About area start  */}
                            <HomeAboutArea7 />
                            {/* About area end  */}

                            {/* Service area start  */}
                            <HomeServiceArea7 />
                            {/* Service area end  */}

                            {/* Award area start  */}
                            <AwardArea7 />
                            {/* Award area end  */}

                            {/* Portfolio  area start  */}
                            <HomePortfolio7 />
                            {/* Portfolio area end  */}

                            {/* Team area start  */}
                            <TeamArea7 />
                            {/* Team area end  */}

                            {/* Brand area start  */}
                            <BrandArea />
                            {/* Brand area end  */}

                            {/* Blog area start  */}
                            <HomeBlog7 />
                            {/* Blog area end  */}

                            {/* CTA area start  */}
                            <HomeCtaArea7 />
                            {/* CTA area end  */}
                        </main>
                        <HomeFooter2 />
                    </div>
                </div>
            </main >
        </Fragment>
    )
}