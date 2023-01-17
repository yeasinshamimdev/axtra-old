import Head from "next/head";
import { Fragment, useState } from "react";
import CursorAnimation from "../../../components/common/cursorAnimation";
import GoTopButton from "../../../components/common/goTopButton";
import Offcanvas from "../../../components/common/offcanvas";
import Placeholder from "../../../components/common/placeholder";
import ScrollSmoother from "../../../components/common/scrollSmoother";
import SwitcherArea from "../../../components/common/switcherArea";
import HomeBlog4 from "../../../components/home/blog/homeBlog4";
import BrandArea6 from "../../../components/home/brand/brandArea6";
import HomeCtaArea4 from "../../../components/home/cta/homeCtaArea4";
import FaqArea4 from "../../../components/home/faqArea4";
import FeatureArea6 from "../../../components/home/feature/featureArea6";
import IndexFooter6 from "../../../components/home/footer/indexFooter6";
import IndexHeader from "../../../components/home/head/indexHeader";
import HeroArea6 from "../../../components/home/hero/heroArea6";
import HomePortfolio6 from "../../../components/home/portfolio/homePortfolio6";
import HomeServiceArea4 from "../../../components/home/service/homeServiceArea4";
import SolutionArea4 from "../../../components/home/solutionArea";
import HomeTestimonialArea4 from "../../../components/home/testimonial/homeTestimonialArea4";
import WorkflowArea4 from "../../../components/home/workflow/workflowArea4";

export default function Index6({ mode }) {
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
                <IndexHeader />
                {/* Header area end */}

                {/* Offcanvas area start */}
                <Offcanvas />
                {/* Offcanvas area end */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            <div className="home-wrapper-4">
                                {/* Hero area start  */}
                                <HeroArea6 />
                                {/* Hero area end */}

                                {/* Workflow area start  */}
                                <WorkflowArea4 />
                                {/* Workflow area end  */}

                                {/* Feature area start  */}
                                <FeatureArea6 />
                                {/* Feature area end  */}

                                {/* Service area start  */}
                                <HomeServiceArea4 />
                                {/* Service area end  */}

                                {/* FAQ area start  */}
                                <FaqArea4 />
                                {/* FAQ area end  */}

                                {/* Portfolio  area start  */}
                                <HomePortfolio6 />
                                {/* Portfolio area end  */}

                                {/* Brand area start  */}
                                <BrandArea6 />
                                {/* Brand area end  */}

                                {/* Testimonial area start  */}
                                <HomeTestimonialArea4 />
                                {/* Testimonial area end  */}

                                {/* Solution area start  */}
                                <SolutionArea4 />
                                {/* Solution area end  */}

                                {/* Blog area start  */}
                                <HomeBlog4 />
                                {/* Blog area end  */}

                                {/* CTA area start  */}
                                <HomeCtaArea4 />
                                {/* CTA area end  */}
                            </div>
                        </main>
                        <IndexFooter6 />
                    </div>
                </div>
            </main >
        </Fragment>
    )
}