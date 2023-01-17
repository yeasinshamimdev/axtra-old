export default function JobDetailsModal2() {
    return (
        <div className="modal__application" id="application_form2">
            <div className="modal__apply">
                <button className="modal__close-2" id="apply_close2"><i className="fa-solid fa-xmark"></i></button>
                <div className="form-top">
                    <img src="assets/imgs/logo/logo-black.png" alt="Site logo" />
                    <h2 className="sec-title">Frontend Developer</h2>
                    <p>Full time</p>
                </div>
                <div className="form-apply">
                    <form action="#">
                        <div className="input-apply-2">
                            <p>Name *</p>
                            <input type="text" name="name" required />
                        </div>
                        <div className="input-apply-2">
                            <p>Email *</p>
                            <input type="email" name="email" required />
                        </div>
                        <div className="input-apply-2">
                            <p>Phone *</p>
                            <input type="tel" name="phone" required />
                        </div>
                        <div className="input-apply-2">
                            <p>Upload CV *</p>
                            <input type="file" name="cv" />
                        </div>
                    </form>
                </div>
                <div className="form-btn-2">
                    <button className="wc-btn-primary btn-hover" id="back_form1"><span></span> back <i
                        className="fa-solid fa-arrow-right"></i></button>
                    <button type="submit" className="wc-btn-primary btn-hover"><span></span> Submit <i
                        className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    )
}