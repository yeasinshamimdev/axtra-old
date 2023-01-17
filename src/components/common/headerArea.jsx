import Link from "next/link";

export default function HeaderArea() {
    return (
        <header className="header__area">
            <div className="header__inner">
                <div className="header__logo">
                    <Link href="/">
                        <img className="logo-primary" src="assets/imgs/logo/site-logo-white.png" alt="Site Logo" />
                        <img className="logo-secondary" src="assets/imgs/logo/site-logo-white-2.png" alt="Moibile Logo" />
                    </Link>
                </div>
                <div className="header__nav-icon">
                    <button id="open_offcanvas"><img src="assets/imgs/icon/menu-white.png" alt="Menubar Icon" /></button>
                </div>
                <div className="header__support">
                    <p>Support center <Link href="tel:+9587325902">+9 587 325 902</Link></p>
                </div>
            </div>
        </header>
    )
}