export default function JobDetailsModal1() {
    return (
        <div className="modal__application" id="application_form">
            <div className="modal__apply">
                <button className="modal__close-2" id="apply_close"><i className="fa-solid fa-xmark"></i></button>
                <div className="form-top">
                    <img src="assets/imgs/logo/logo-black.png" alt="Site logo" />
                    <h2 className="sec-title">Frontend Developer</h2>
                    <p>Full time</p>
                </div>
                <div className="form-apply">
                    <form action="#">
                        <div className="input-apply">
                            <p>Why you decided to apply here and why should we select you? *</p>
                            <textarea name="question" required></textarea>
                        </div>
                        <div className="input-apply">
                            <p>Tell us about a project that you worked on and felt proud of it.</p>
                            <textarea name="question-2" required></textarea>
                        </div>
                        <div className="input-apply">
                            <p>Share your portfolios. (Behance, Dribbble, etc) *</p>
                            <textarea name="question-3" required></textarea>
                        </div>
                        <div className="input-apply">
                            <p>Who`s your favorite designer? *</p>
                            <textarea name="question-4" required></textarea>
                        </div>
                        <div className="input-apply">
                            <p>Do you have any other designs which you want to show us? or this is not available on your
                                portfolio.</p>
                            <textarea name="question-5" required></textarea>
                        </div>
                        <div className="input-apply">
                            <p>What are you looking for in your next job/journey? *</p>
                            <textarea name="question-6" required></textarea>
                        </div>
                        <div className="input-apply">
                            <p>What makes you angry? and what makes you smile?</p>
                            <textarea name="question-7" required></textarea>
                        </div>
                        <div className="input-apply">
                            <p>Your current salary & what are your salary expectations? *</p>
                            <textarea name="question-8" required></textarea>
                        </div>
                    </form>
                </div>

                <div className="form-btn apply-trigger">
                    <button className="wc-btn-primary btn-hover"><span></span> next <i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    )
}