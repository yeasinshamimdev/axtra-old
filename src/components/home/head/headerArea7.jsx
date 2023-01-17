import Link from "next/link";

export default function HeaderArea7() {
    return (
        <header className="header__area-7">
            <div className="header__inner-2">
                <div className="header__logo-2">
                    <Link href="/" className="logo-dark"><img src="assets/imgs/logo/logo-black.png" alt="Site Logo" /></Link>
                    <Link href="/" className="logo-light"><img src="assets/imgs/logo/site-logo-white-2.png" alt="Site Logo" /></Link>
                </div>
                <div className="header__nav-2">
                    <ul className="main-menu-4 menu-anim">
                        <li><Link href="#">home</Link>
                            <ul className="mega-menu-2">
                                <li>
                                    <ul>
                                        <li><Link href="/">Digital Maketing</Link></li>
                                        <li><Link href="/index-dark">Digital Maketing dark</Link></li>
                                        <li><Link href="/index-2">Design Studio </Link></li>
                                        <li><Link href="/index-2-dark">Design Studio dark</Link></li>
                                        <li><Link href="/index-3">Digital Agency</Link></li>
                                        <li><Link href="/index-3-dark">Digital Agency dark</Link></li>
                                        <li><Link href="/index-4">personal Portfolio</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>

                                        <li><Link href="/index-4-dark">personal Portfolio dark</Link></li>
                                        <li><Link href="/index-5">portfolio showcase</Link></li>
                                        <li><Link href="/index-5-dark">portfolio showcase dark</Link></li>
                                        <li><Link href="/index-6">Startup Agency</Link></li>
                                        <li><Link href="/index-6-dark">Startup Agency dark</Link></li>
                                        <li><Link href="/index-7">creative Agency</Link></li>
                                        <li><Link href="/index-7-dark">creative Agency dark</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><Link href="/about">About</Link></li>
                        <li className="has-megamenu"><Link href="/about">Pages</Link>
                            <ul className="mega-menu">
                                <li>
                                    <a>Home</a>
                                    <ul>
                                        <li><Link href="/">Digital Maketing</Link></li>
                                        <li><Link href="/index-dark">Digital Maketing Dark</Link></li>
                                        <li><Link href="/index-2">Design Studio </Link></li>
                                        <li><Link href="/index-2-dark">Design Studio Dark</Link></li>
                                        <li><Link href="/index-3">Digital Agency</Link></li>
                                        <li><Link href="/index-3-dark">Digital Agency Dark</Link></li>
                                        <li><Link href="/index-4">Personal Portfolio</Link></li>
                                        <li><Link href="/index-4-dark">Personal Portfolio Dark</Link></li>
                                        <li><Link href="/index-5">portfolio showcase</Link></li>
                                        <li><Link href="/index-5-dark">portfolio showcase dark</Link></li>
                                        <li><Link href="/index-6">Startup Agency</Link></li>
                                        <li><Link href="/index-6-dark">Startup Agency dark</Link></li>
                                        <li><Link href="/index-7">creative Agency</Link></li>
                                        <li><Link href="/index-7-dark">creative Agency dark</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <a>Service</a>
                                    <ul>
                                        <li><Link href="/service">service</Link></li>
                                        <li><Link href="/service-dark">service dark</Link></li>
                                        <li><Link href="/service-2">service V.2</Link></li>
                                        <li><Link href="/service-2-dark">service V.2 dark</Link></li>
                                        <li><Link href="/service-3">service V.3</Link></li>
                                        <li><Link href="/service-3-dark">service V.3 dark</Link></li>
                                        <li><Link href="/service-4">service V.4</Link></li>
                                        <li><Link href="/service-4-dark">service V.4 dark</Link></li>
                                        <li><Link href="/service-5">service V.5</Link></li>
                                        <li><Link href="/service-5-dark">service V.5 dark</Link></li>
                                        <li><Link href="/service-6">service V.6</Link></li>
                                        <li><Link href="/service-6-dark">service V.6 dark</Link></li>
                                        <li><Link href="/service-details">service details</Link></li>
                                        <li><Link href="/service-details-dark">service details dark</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <a>portfolio</a>
                                    <ul>
                                        <li><Link href="/portfolio">portfolio</Link></li>
                                        <li><Link href="/portfolio-dark">portfolio dark</Link></li>
                                        <li><Link href="/portfolio-2">portfolio v.2</Link></li>
                                        <li><Link href="/portfolio-2-dark">portfolio v.2 dark</Link></li>
                                        <li><Link href="/portfolio-3">portfolio v.3</Link></li>
                                        <li><Link href="/portfolio-3-dark">portfolio v.3 dark</Link></li>
                                        <li><Link href="/portfolio-4">portfolio v.4</Link></li>
                                        <li><Link href="/portfolio-4-dark">portfolio v.4 dark</Link></li>
                                        <li><Link href="/portfolio-5">portfolio v.5</Link></li>
                                        <li><Link href="/portfolio-5-dark">portfolio v.5 dark</Link></li>
                                        <li><Link href="/portfolio-details">portfolio details</Link></li>
                                        <li><Link href="/portfolio-details-dark">portfolio details dark</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <a>team</a>
                                    <ul>
                                        <li><Link href="/team">Team</Link></li>
                                        <li><Link href="/team-dark">Team dark</Link></li>
                                        <li><Link href="/team-details">Team Details</Link></li>
                                        <li><Link href="/team-details-dark">Team Details dark</Link></li>
                                        <li><Link href="/career">career</Link></li>
                                        <li><Link href="/career-dark">career dark</Link></li>
                                        <li><Link href="/job-details">job details</Link></li>
                                        <li><Link href="/job-details-dark">job details dark</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <a>blog</a>
                                    <ul>
                                        <li><Link href="/blog">blog</Link></li>
                                        <li><Link href="/blog-dark">blog dark</Link></li>
                                        <li><Link href="/blog-2">blog v.2</Link></li>
                                        <li><Link href="/blog-2-dark">blog v.2 dark</Link></li>
                                        <li><Link href="/category">category</Link></li>
                                        <li><Link href="/category-dark">category dark</Link></li>
                                        <li><Link href="/blog-details">blog details</Link></li>
                                        <li><Link href="/blog-details-dark">blog details dark</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <a>Others</a>
                                    <ul>
                                        <li><Link href="/faq">FAQs</Link></li>
                                        <li><Link href="/faq-dark">FAQs dark</Link></li>
                                        <li><Link href="/contact">contact</Link></li>
                                        <li><Link href="/contact-dark">contact dark</Link></li>
                                        <li><Link href="/404">404</Link></li>
                                        <li><Link href="/404-dark">404 dark</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><Link href="/portfolio">services</Link>
                            <ul className="main-dropdown">
                                <li><Link href="/service">service</Link>
                                    <ul className="sub-dropdown">
                                        <li><Link href="/service-dark">service dark</Link></li>
                                        <li><Link href="/service-2-dark">service V.2 dark</Link></li>
                                        <li><Link href="/service-3-dark">service V.3 dark</Link></li>
                                        <li><Link href="/service-4-dark">service V.4 dark</Link></li>
                                        <li><Link href="/service-5-dark">service V.5 dark</Link></li>
                                        <li><Link href="/service-6-dark">service V.6 dark</Link></li>
                                        <li><Link href="/service-details-dark">service details dark</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/service-2">service V.2</Link></li>
                                <li><Link href="/service-3">service V.3</Link></li>
                                <li><Link href="/service-4">service V.4</Link></li>
                                <li><Link href="/service-5">service V.5</Link></li>
                                <li><Link href="/service-6">service V.6</Link></li>
                                <li><Link href="/service-details">service details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/team">team</Link>
                            <ul className="main-dropdown">
                                <li><Link href="/team">team</Link></li>
                                <li><Link href="/team-details">team details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/blog">Blog</Link>
                            <ul className="main-dropdown">
                                <li><Link href="/blog">blog</Link></li>
                                <li><Link href="/blog-2">blog v.2</Link></li>
                                <li><Link href="/category">category</Link></li>
                                <li><Link href="/blog-details">blog details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="header__nav-icon-7">
                    <button className="menu-icon-2" id="open_offcanvas"><img src="assets/imgs/icon/menu-dark.png"
                        alt="Menubar Icon" /></button>
                </div>
            </div>
        </header>
    )
}