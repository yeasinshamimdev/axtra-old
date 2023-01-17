import Link from "next/link";
import { useState } from "react";
import { searchContent } from "../constants/constants";

export default function Offcanvas() {
    const [query, setQuery] = useState("")
    const [searchRes, setSearchRes] = useState([])

    const handleSearch = (e) => {
        e.preventDefault();
        const result = searchContent.filter(sC => sC?.title?.toLowerCase().includes(query.toLowerCase()));
        return setSearchRes(result)
    }

    return (
        <div className="offcanvas__area">
            <div className="offcanvas__body">
                <div className="offcanvas__left">
                    <div className="offcanvas__logo">
                        <Link href="/"><img src="assets/imgs/logo/site-logo-white-2.png" alt="Offcanvas Logo" /></Link>
                    </div>
                    <div className="offcanvas__social">
                        <h3 className="social-title">Follow Us</h3>
                        <ul>
                            <li><Link href="#">Dribbble</Link></li>
                            <li><Link href="#">Behance</Link></li>
                            <li><Link href="#">Instagram</Link></li>
                            <li><Link href="#">Facebook</Link></li>
                            <li><Link href="#">Twitter</Link></li>
                            <li><Link href="#">YouTube</Link></li>
                        </ul>
                    </div>
                    <div className="offcanvas__links">
                        <ul>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">contact</Link></li>
                            <li><Link href="/career">Career</Link></li>
                            <li><Link href="/blog">blog</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="offcanvas__mid">
                    <div className="offcanvas__menu-wrapper">
                        <nav className="offcanvas__menu">
                            <ul className="menu-anim">
                                <li><Link href="/">home</Link>
                                    <ul>
                                        <li><Link href="/">Digital Maketing</Link></li>
                                        <li><Link href="/index-dark">Digital Maketing dark</Link></li>
                                        <li><Link href="/index-2">Design Studio </Link></li>
                                        <li><Link href="/index-2-dark">Design Studio dark</Link></li>
                                        <li><Link href="/index-3">Digital Agency</Link></li>
                                        <li><Link href="/index-3-dark">Digital Agency dark</Link></li>
                                        <li><Link href="/index-4">personal Portfolio</Link></li>
                                        <li><Link href="/index-4-dark">personal Portfolio dark</Link></li>
                                        <li><Link href="/index-5">portfolio showcase</Link></li>
                                        <li><Link href="/index-5-dark">portfolio showcase dark</Link></li>
                                        <li><Link href="/index-6">Startup Agency</Link></li>
                                        <li><Link href="/index-6-dark">Startup Agency dark</Link></li>
                                        <li><Link href="/index-7">creative Agency</Link></li>
                                        <li><Link href="/index-7-dark">creative Agency dark</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/about">about</Link></li>
                                <li>
                                    <Link href="/service">Service</Link>
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
                                <li><Link href="#">pages</Link>
                                    <ul>
                                        <li>
                                            <Link href="/">Home</Link>
                                            <ul>
                                                <li><Link href="/">Digital Maketing</Link></li>
                                                <li><Link href="/index-dark">Digital Maketing dark</Link></li>
                                                <li><Link href="/index-2">Design Studio </Link></li>
                                                <li><Link href="/index-2-dark">Design Studio dark</Link></li>
                                                <li><Link href="/index-3">Digital Agency</Link></li>
                                                <li><Link href="/index-3-dark">Digital Agency dark</Link></li>
                                                <li><Link href="/index-4">personal Portfolio</Link></li>
                                                <li><Link href="/index-4-dark">personal Portfolio dark</Link></li>
                                                <li><Link href="/index-5">portfolio showcase</Link></li>
                                                <li><Link href="/index-5-dark">portfolio showcase dark</Link></li>
                                                <li><Link href="/index-6">Startup Agency</Link></li>
                                                <li><Link href="/index-6-dark">Startup Agency dark</Link></li>
                                                <li><Link href="/index-7">creative Agency</Link></li>
                                                <li><Link href="/index-7-dark">creative Agency dark</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="/service">Service</Link>
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
                                            <Link href="/portfolio">portfolio</Link>
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
                                            <Link href="/team">team</Link>
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
                                            <Link href="/blog">blog</Link>
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
                                            <Link href="#">Others</Link>
                                            <ul>
                                                <li><Link href="/faq">FAQs</Link></li>
                                                <li><Link href="/faq-dark">FAQs dark</Link></li>
                                                <li><Link href="/contact">contact</Link></li>
                                                <li><Link href="/contact-dark">contact dark</Link ></li>
                                                <li><Link href="/404">404</Link></li>
                                                <li><Link href="/404-dark">404 dark</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><Link href="/blog">blog</Link>
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
                                <li><Link href="/contact">contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="offcanvas__right">
                    <div className="offcanvas__search">
                        <form action="#" onChange={handleSearch}>
                            <input type="text" name="search" placeholder="Search keyword" onChange={(e) => setQuery(e.target.value)} />
                            <button><i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                        {query &&
                            <ul>
                                {searchRes.map((sR, i) => (
                                    <li className="searchOffCanvas" key={i}><Link href={sR.link}>{sR.title.slice(0, 35)}</Link></li>
                                ))}
                            </ul>}
                    </div>
                    <div className="offcanvas__contact">
                        <h3>Get in touch</h3>
                        <ul>
                            <li><Link href="tel:02094980547">+(02) - 094 980 547</Link></li>
                            <li><Link href="mailto:info@extradesign.com">info@extradesign.com</Link></li>
                            <li>230 Norman Street New York, QC (USA) H8R 1A1</li>
                        </ul>
                    </div>
                    <img src="assets/imgs/shape/11.png" alt="shape" className="shape-1" />
                    <img src="assets/imgs/shape/12.png" alt="shape" className="shape-2" />
                </div>
                <div className="offcanvas__close">
                    <button type="button" id="close_offcanvas"><i className="fa-solid fa-xmark"></i></button>
                </div>
            </div>
        </div>
    )
}