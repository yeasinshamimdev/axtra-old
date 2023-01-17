import Head from 'next/head';
import React, { useState } from 'react';
import CtaArea from '../../components/common/ctaArea';
import CursorAnimation from '../../components/common/cursorAnimation';
import Footer from '../../components/common/footer';
import GoTopButton from '../../components/common/goTopButton';
import Offcanvas from '../../components/common/offcanvas';
import Placeholder from '../../components/common/placeholder';
import ScrollSmoother from '../../components/common/scrollSmoother';
import SwitcherAreaDark from '../../components/common/switcherAreaDark';
import PortfolioFiveArea from '../../components/portfolio/portfolioFiveArea';
import PortfolioFourArea from '../../components/portfolio/PortfolioFourArea';
import PortfolioHead from '../../components/portfolio/portfolioHead';
import PortfolioThreeArea from '../../components/portfolio/portfolioThreeArea';
import PortfolioTwoArea from '../../components/portfolio/portfolioTwoArea';

const PortfolioForAll = ({ dark, number }) => {
    const [stayDark, setStayDark] = useState(true)
    const handleDark = (prop) => {
        setStayDark(prop)
    }
    return (
        <div>
            <Head>
                {/* Fav Icon  */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
                {number === 2 && <title>Portfolio V.2 - Axtra</title>}
                {number === 3 && <title>Portfolio V.3 - Axtra</title>}
                {number === 4 && <title>Portfolio V.4 - Axtra</title>}
                {number === 5 && <title>Portfolio V.5 - Axtra</title>}
                {
                    dark ?
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
            <body className={dark && stayDark && "dark"}>
                {/* Cursor Animation  */}
                <CursorAnimation />
                {/* Preloader  */}
                <Placeholder />

                {/* Switcher Area Start  */}
                <SwitcherAreaDark handleDark={handleDark} dark={dark} />
                {/* Switcher Area End  */}

                {/* Scroll Smoother  */}
                <ScrollSmoother />

                {/* Go Top Button  */}
                <GoTopButton />
                {/* Porfolio Cursor   */}
                <div className="cursor" id="portf_cursor_6">View <br />Project</div>

                {/* Header area start   */}
                <PortfolioHead />
                {/* Header area end   */}


                {/* Offcanvas area start   */}
                <Offcanvas />
                {/* Offcanvas area end  */}



                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* Portfolio area start   */}
                            {number === 2 && <PortfolioTwoArea />}
                            {number === 3 && <PortfolioThreeArea />}
                            {number === 4 && <PortfolioFourArea />}
                            {number === 5 && <PortfolioFiveArea />}
                            {/* Portfolio area end   */}

                            {/* CTA area start  */}
                            <CtaArea pt130={true} />
                            {/* CTA area end  */}

                        </main>

                        {/* Footer area start   */}
                        <Footer />
                        {/* Footer area end   */}

                    </div>
                </div>
            </body>
        </div>
    );
};

export default PortfolioForAll;