export default function HeroArea() {
    return (
        <section className="hero__area-3">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="hero__inner-3">
                            <div className="sec-title-wrapper">
                                <h2 className="sec-sub-title">Digital</h2>
                                <h3 className="sec-title title-left">Mark</h3>
                                <h3 className="sec-title title-right">eting</h3>
                            </div>
                            <div className="hero__text-3">
                                <p className="hero__text-animation">Static and dynamic secure code review can prevent a day before your product is even released. We can integrate with your dev environment</p>
                            </div>
                            <div className="scroll-down">
                                <button><img src="assets/imgs/icon/arrow-down-sm.png" alt="arrow icon" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="video-info">
                    <div className="video-intro">
                        <input id="video_check" type="checkbox" />
                        <div className="intro-title">
                            <h4 className="video-title">Watch <span>video intro</span></h4>
                            <h4 className="video-title close-video-title">Close <span>video intro</span></h4>
                        </div>
                        <div className="video">
                            <video src="assets/video/hero-3.mp4" loop muted autoPlay playsInline></video>
                        </div>

                    </div>
                </div>
            </div>

            <div className="hero3-img-ani">
                <img src="assets/imgs/hero/3/1.jpg" alt="Hero Image" className="hero3-img" />
            </div>
        </section>
    )
}