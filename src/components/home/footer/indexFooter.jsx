import Link from "next/link";

export default function HomeFooter() {
    return (
        <footer className="footer__area-3">
            <div className="footer__top-3">
                <div className="footer__top-wrapper-3">
                    <div className="footer__logo-3 pt-120">
                        <img src="/assets/imgs/logo/site-logo-white-2.png" alt="Footer Logo" />
                        <p>When do they work well, and when do they on us and finally, when do we actually need how can we avoid
                            them.</p>
                    </div>
                    <div className="footer__social-3">
                        <ul>
                            <li><Link href="#">facebook</Link></li>
                            <li><Link href="#">Twitter</Link></li>
                            <li><Link href="#">Linkedin</Link></li>
                            <li><Link href="#">Instagram</Link></li>
                        </ul>
                    </div>
                    <div className="footer__contact-3">
                        <Link className="end" href="/contact">Let’s talk</Link>
                    </div>
                </div>
            </div>

            <div className="footer__btm-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                            <div className="footer__copyright-3">
                                <p>© 2022 - 2025 | Alrights reserved by <Link href="https://wealcoder.com/" target="_blank" rel="noreferrer">Wealcoder</Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <div className="footer__nav-2">
                                <ul className="footer-menu-2 menu-anim">
                                    <li><Link href="/about">about us</Link></li>
                                    <li><Link href="/contact">contact</Link></li>
                                    <li><Link href="/career">Career</Link></li>
                                    <li><Link href="/faq">FAQs</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}