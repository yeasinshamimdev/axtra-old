import Head from 'next/head';
import React, { useState } from 'react';
import CtaArea from '../../components/common/ctaArea';
import CursorAnimation from '../../components/common/cursorAnimation';
import Footer from '../../components/common/footer';
import GoTopButton from '../../components/common/goTopButton';
import HeaderArea from '../../components/common/headerArea';
import Offcanvas from '../../components/common/offcanvas';
import Placeholder from '../../components/common/placeholder';
import ScrollSmoother from '../../components/common/scrollSmoother';
import SwitcherAreaDark from '../../components/common/switcherAreaDark';
import BrandArea from '../../components/service/brandArea';
import ServiceFiveMain from '../../components/service/serviceFiveMain';
import ServiceFourMain from '../../components/service/serviceFourMain';
import ServiceOneMain from '../../components/service/serviceOneMain';
import ServiceThreeMain from '../../components/service/serviceThreeMain';
import ServiceTwoMain from '../../components/service/serviceTwoMain';

const ServiceForAll = ({ dark, number }) => {
    const [stayDark, setStayDark] = useState(true)
    const handleDark = (prop) => {
        setStayDark(prop)
    }

    return (
        <div>
            <Head>

                {number === 1 && <title>Service - Axtra</title>}
                {number === 2 && <title>Service V.2 - Axtra</title>}
                {number === 3 && <title>Service V.3 - Axtra</title>}
                {number === 4 && <title>Service V.4 - Axtra</title>}
                {number === 5 && <title>Service V.5 - Axtra</title>}
                {number === 6 && <title>Service V.6 - Axtra</title>}

                {/* Fav Icon */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png"></link>
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

            <main className={dark && stayDark && "dark"}>
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
                {/* Header area start  */}
                <HeaderArea />
                {/* Header area end  */}

                {/* Offcanvas area start  */}
                <Offcanvas />
                {/* Offcanvas area end  */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            {/* Service Area start */}
                            {number === 1 && <ServiceOneMain />}
                            {number === 2 && <ServiceTwoMain />}
                            {number === 3 && <ServiceThreeMain />}
                            {number === 4 && <ServiceFourMain />}
                            {number === 5 && <ServiceFiveMain />}
                            {/* Service Area end */}

                            {/* Brand area start  */}
                            <BrandArea />
                            {/* Brand area end  */}
                            {/* CTA area start  */}
                            <CtaArea pt130={true} />
                            {/* CTA area end  */}

                        </main>

                        {/* Footer area start  */}
                        <Footer />
                        {/* Footer area end  */}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ServiceForAll;