import Head from "next/head";
import { Fragment, useState } from "react";
import CursorAnimation from "../../../components/common/cursorAnimation";
import GoTopButton from "../../../components/common/goTopButton";
import HomeCtaArea from "../../../components/home/cta/homeCtaArea";
import Offcanvas from "../../../components/common/offcanvas";
import Placeholder from "../../../components/common/placeholder";
import ScrollSmoother from "../../../components/common/scrollSmoother";
import SwitcherArea from "../../../components/common/switcherArea";
import AwardArea from "../../../components/home/award/awardArea";
import FeatureArea from "../../../components/home/feature/featureArea";
import HeaderArea2 from "../../../components/home/head/headerArea2";
import HeroArea2 from "../../../components/home/hero/heroArea2";
import HomeAboutArea2 from "../../../components/home/about/homeAboutArea2";
import HomeBlogArea2 from "../../../components/home/blog/homeBlogArea2";
import HomePortfolioArea2 from "../../../components/home/portfolio/homePortfolioArea2";
import HomeServiceArea2 from "../../../components/home/service/homeServiceArea2";
import HomeFooter2 from "../../../components/home/footer/indexFooter2";
import RollArea2 from "../../../components/home/roll/rollArea2";
import RollArea3 from "../../../components/home/roll/rollArea3";

export default function Index2({ mode }) {
    const [bgMode, setBgMode] = useState(mode);

    return (
        <Fragment>
            <Head>
                <title>Home - Digital Studio</title>
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
                <HeaderArea2 />
                {/* Header area end */}

                {/* Offcanvas area start */}
                <Offcanvas />
                {/* Offcanvas area end */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            {/* Hero area start */}
                            <HeroArea2 />
                            {/* Hero area start */}

                            {/* Features area start */}
                            <FeatureArea />
                            {/* Features area end */}

                            {/* Roll area start */}
                            <RollArea2 />
                            {/* Roll area end */}

                            {/* Roll area start */}
                            <RollArea3 />
                            {/* Roll area end */}

                            {/* Portfolio area start */}
                            <HomePortfolioArea2 />
                            {/* Portfolio area end */}

                            {/* About area start */}
                            <HomeAboutArea2 />
                            {/* About area end */}

                            {/* Service area start */}
                            <HomeServiceArea2 />
                            {/* Service area end */}

                            {/* Award area start */}
                            <AwardArea />
                            {/* Award area end */}

                            {/* CTA area start */}
                            <HomeCtaArea />
                            {/* CTA area end */}

                            {/* Blog area start */}
                            <HomeBlogArea2 />
                            {/* Blog area end */}

                        </main>
                        <HomeFooter2 />
                    </div>
                </div>
            </main >
        </Fragment>
    )
}