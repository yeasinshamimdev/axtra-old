import { Fragment } from "react";

export default function HomeModal() {
    return (
        <Fragment>
            {/* Modal 1  */}
            <div className="modal__testimonial" id="modal_testimonial">
                <div className="modal__testimonial-content">
                    <span className="modal__close" id="modal_close"><i className="fa-solid fa-xmark"></i></span>
                    <iframe src="https://www.youtube.com/embed/vZgyWfmw_Kw" title="Testimonial Video"
                        allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope;" allowfullscreen>
                    </iframe>
                </div>
            </div>

            {/* Modal 2  */}
            <div className="modal__testimonial" id="modal_testimonial2">
                <div className="modal__testimonial-content">
                    <span className="modal__close" id="modal_close2"><i className="fa-solid fa-xmark"></i></span>
                    <iframe src="https://www.youtube.com/embed/JulIeG1V8T4" allowfullscreen></iframe>
                </div>
            </div>

            {/* Modal 3  */}
            <div className="modal__testimonial" id="modal_testimonial3">
                <div className="modal__testimonial-content">
                    <span className="modal__close" id="modal_close3"><i className="fa-solid fa-xmark"></i></span>
                    <iframe src="https://www.youtube.com/embed/7QkL-40FRfE" allowfullscreen></iframe>
                </div>
            </div>
        </Fragment>
    )
}