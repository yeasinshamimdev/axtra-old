import Head from "next/head";
import { Fragment, useState } from "react";
import CursorAnimation from "../../components/common/cursorAnimation";
import Footer from "../../components/common/footer";
import GoTopButton from "../../components/common/goTopButton";
import HeaderArea from "../../components/common/headerArea";
import Offcanvas from "../../components/common/offcanvas";
import Placeholder from "../../components/common/placeholder";
import ScrollSmoother from "../../components/common/scrollSmoother";
import SwitcherArea from "../../components/common/switcherArea";
import JobDetailsArea from "../../components/jobDetails/jobDetailsArea";
import JobDetailsModal1 from "../../components/jobDetails/jobDetailsModal1";
import JobDetailsModal2 from "../../components/jobDetails/jobDetailsModal2";

export default function JobDetailsPage({ mode }) {
    const [bgMode, setBgMode] = useState(mode);

    return (
        <Fragment>
            <Head>
                {/* Fav Icon  */}
                <title>Job Details - Axtra</title>
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
                <HeaderArea />
                {/* Header area end */}

                {/* Offcanvas area start */}
                <Offcanvas />
                {/* Offcanvas area end */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* Job details top start  */}
                            <section className="job__detail-top">
                                <img src="assets/imgs/career/6.jpg" alt="Image" data-speed="auto" />
                            </section>
                            {/* Job details top end   */}

                            {/* Job details area start */}
                            <JobDetailsArea />
                            {/* Job details area start */}
                        </main>
                        {/* Footer area start      */}
                        <Footer />
                        {/* Footer area end      */}
                    </div>
                </div>
                {/* Job details Modal 1 start */}
                <JobDetailsModal1 />
                {/* Job details Modal 1 end */}

                {/* Job details Modal  start */}
                <JobDetailsModal2 />
                {/* Job details Modal 2 end */}
            </main >
        </Fragment>
    )
}