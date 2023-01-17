import Link from "next/link";

export default function IndexFooter5() {
    return (
        <footer className="footer__area-5">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <Link href="/" className="logo-dark"><img src="assets/imgs/icon/5/footer-logo-5-2.png"
                            alt="Site Logo" /></Link>
                        <Link href="/" className="logo-light"><img src="assets/imgs/icon/5/footer-logo-5.png"
                            alt="Site Logo" /></Link>
                        <ul className="footer__menu-5 menu-anim">
                            <li><Link href="#">Facebook</Link></li>
                            <li><Link href="#">Twitter</Link></li>
                            <li><Link href="#">behance</Link></li>
                            <li><Link href="#">Dribbble</Link></li>
                        </ul>
                        <div className="footer__copyright-4">
                            <p>© 2022 - 2025 | Alrights reserved<br /> by <Link href="https://themeforest.net/user/crowdyflow/portfolio"
                                target="_blank" rel="noreferrer">Crowdyflow</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}