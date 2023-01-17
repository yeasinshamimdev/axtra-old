import Head from "next/head";
import HomeFooter from "../../../components/home/footer/indexFooter";
import HeroArea from "../../../components/home/hero/heroArea";
import BrandArea from "../../../components/home/brand/brandArea";
import HomeAboutArea from "../../../components/home/about/homeAboutArea";
import HomeServiceArea from "../../../components/home/service/homeServiceArea";
import HomePortfolioArea from "../../../components/home/portfolio/homePortfolioArea";
import HomeTestimonialArea from "../../../components/home/testimonial/homeTestimonialArea";
import PriceArea from "../../../components/home/priceArea";
import WorkflowArea from "../../../components/home/workflow/workflowArea";
import HomeBlog from "../../../components/home/blog/homeBlog";
import SwitcherArea from "../../../components/common/switcherArea";
import Offcanvas from "../../../components/common/offcanvas";
import GoTopButton from "../../../components/common/goTopButton";
import ScrollSmoother from "../../../components/common/scrollSmoother";
import IndexHeader from "../../../components/home/head/indexHeader";
import Placeholder from "../../../components/common/placeholder";
import CursorAnimation from "../../../components/common/cursorAnimation";
import { Fragment, useEffect, useState } from "react";

export default function Index1({ mode }) {
    const [bgMode, setBgMode] = useState(mode);

    return (
        <Fragment>
            <Head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />
                <title>Home - Digital Marketing</title>
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
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
                <IndexHeader />
                {/* Header area end */}

                {/* Offcanvas area start */}
                <Offcanvas />
                {/* Offcanvas area end */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            {/* Hero area start */}
                            <HeroArea />
                            {/* Hero area start */}

                            {/* Brand area start */}
                            <BrandArea />
                            {/* Brand area end */}

                            {/* About area start */}
                            <HomeAboutArea />
                            {/* About area end */}

                            {/* Service area start */}
                            <HomeServiceArea />
                            {/* Service area end */}

                            {/* Portfolio area start */}
                            <HomePortfolioArea />
                            {/* Portfolio area end */}

                            {/* Testimonial area start */}
                            <HomeTestimonialArea />
                            {/* Testimonial area end */}

                            {/* Workflow area start */}
                            <WorkflowArea />
                            {/* Workflow area end */}

                            {/* Price area start */}
                            <PriceArea />
                            {/* Price area end */}

                            {/* Blog area start */}
                            <HomeBlog />
                            {/* Blog area end */}

                        </main>
                        <HomeFooter />
                    </div>
                </div>
            </main >
        </Fragment>
    )
}