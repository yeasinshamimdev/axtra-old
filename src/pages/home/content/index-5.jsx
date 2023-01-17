import Head from "next/head";
import { Fragment, useState } from "react";
import CursorAnimation from "../../../components/common/cursorAnimation";
import GoTopButton from "../../../components/common/goTopButton";
import Offcanvas from "../../../components/common/offcanvas";
import Placeholder from "../../../components/common/placeholder";
import ScrollSmoother from "../../../components/common/scrollSmoother";
import SwitcherArea from "../../../components/common/switcherArea";
import HomeCtaArea5 from "../../../components/home/cta/homeCtaArea5";
import IndexFooter5 from "../../../components/home/footer/indexFooter5";
import HeaderArea5 from "../../../components/home/head/headerArea5";
import HeroArea5 from "../../../components/home/hero/heroArea5";
import HomePortfolio5 from "../../../components/home/portfolio/homePortfolio5";

export default function Index5({ mode }) {
    const [bgMode, setBgMode] = useState(mode);

    return (
        <Fragment>
            <Head>
                {/* Fav Icon */}
                <title>Agency Portfolio</title>
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

                {/* Featured Work  */}
                <div className="cursor" id="portfolio4_cursor">View</div>

                {/* Header area start */}
                <HeaderArea5 />
                {/* Header area end */}

                {/* Offcanvas area start */}
                <Offcanvas />
                {/* Offcanvas area end */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            <div className="home-wrapper-5">
                                {/* Hero area start  */}
                                <HeroArea5 />
                                {/* Hero area end */}

                                {/* Portfolio area start  */}
                                <HomePortfolio5 />
                                {/* Portfolio area end  */}

                                {/* CTA area start  */}
                                <HomeCtaArea5 />
                                {/* CTA area end  */}
                            </div>
                        </main>
                        <IndexFooter5 />
                    </div>
                </div>
            </main >
        </Fragment>
    )
}