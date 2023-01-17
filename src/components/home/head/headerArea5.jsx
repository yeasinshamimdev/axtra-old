import Link from "next/link";

export default function HeaderArea5() {
    return (
        <header className="header__area-5">
            <div className="header__inner-5">
                <div className="header__logo-5">
                    <Link href="/" className="logo-dark"><img src="assets/imgs/logo/logo-black.png" alt="Site Logo" /></Link>
                    <Link href="/" className="logo-light"><img src="assets/imgs/logo/site-logo-white-2.png" alt="Site Logo" /></Link>
                </div>
                <div className="header__nav-icon-5">
                    <button id="open_offcanvas"><span className="menu-text-5">Menu</span><img src="assets/imgs/icon/menu-black.png"
                        alt="Menubar Icon" /></button>
                </div>
            </div>
        </header>
    )
}