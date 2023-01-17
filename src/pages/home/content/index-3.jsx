import Head from "next/head";
import { Fragment, useState } from "react";
import CtaArea from "../../../components/common/ctaArea";
import CursorAnimation from "../../../components/common/cursorAnimation";
import Footer from "../../../components/common/footer";
import GoTopButton from "../../../components/common/goTopButton";
import HeaderArea from "../../../components/common/headerArea";
import Offcanvas from "../../../components/common/offcanvas";
import Placeholder from "../../../components/common/placeholder";
import ScrollSmoother from "../../../components/common/scrollSmoother";
import SwitcherArea from "../../../components/common/switcherArea";
import BrandArea1 from "../../../components/home/brand/brandArea1";
import CounterArea from "../../../components/home/counterArea";
import HeroArea1 from "../../../components/home/hero/heroArea1";
import HomeAboutArea1 from "../../../components/home/about/homeAboutArea1";
import HomeBlog1 from "../../../components/home/blog/homeBlog1";
import HomeModal from "../../../components/home/homeModal";
import HomePortfolioArea1 from "../../../components/home/portfolio/homePortfolioArea1";
import HomeServiceArea1 from "../../../components/home/service/homeServiceArea1";
import HomeTestimonialArea1 from "../../../components/home/testimonial/homeTestimonialArea1";
import RollArea from "../../../components/home/roll/rollArea";
import WorkflowArea1 from "../../../components/home/workflow/workflowArea1";

export default function Index3({ mode }) {
    const [bgMode, setBgMode] = useState(mode);

    return (
        <Fragment>
            <Head>
                {/* Fav Icon  */}
                <title>Home - Digital Agency</title>
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

                {/* Testimonial Play Cursor  */}
                <div className="cursor" id="client_cursor">Play</div>

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
                <HeaderArea />
                {/* Header area end */}

                {/* Offcanvas area start */}
                <Offcanvas />
                {/* Offcanvas area end */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            {/* Hero area start */}
                            <HeroArea1 />
                            {/* Hero area start */}

                            {/* Roll area start */}
                            <RollArea />
                            {/* Roll area end */}

                            {/* About area start */}
                            <HomeAboutArea1 />
                            {/* About area end */}

                            {/* Service area start */}
                            <HomeServiceArea1 />
                            {/* Service area end */}

                            {/* Counter area start */}
                            <CounterArea />
                            {/* Counter area end */}

                            {/* Workflow area start */}
                            <WorkflowArea1 />
                            {/* Workflow area end */}

                            {/* Portfolio area start */}
                            <HomePortfolioArea1 />
                            {/* Portfolio area end */}

                            {/* Brand area start */}
                            <BrandArea1 />
                            {/* Brand area end */}

                            {/* Testimonial area start */}
                            <HomeTestimonialArea1 />
                            {/* Testimonial area end */}

                            {/* Blog area start */}
                            <HomeBlog1 />
                            {/* Blog area end */}

                            {/* Cta area start */}
                            <CtaArea />
                            {/* Cta area end */}
                        </main>
                        <Footer />
                    </div>
                </div>
                <HomeModal />
            </main >
        </Fragment >
    )
}