import React, { useEffect, useState } from 'react';
import logo1 from '/public/assets/images/logo.png';
import logo2 from '/public/assets/images/logo-2.png';
import StickyHeader from '../../lib/StickyMenu.js';
import Navigation from '../Navigation.jsx';
import MobileMenu from '../MobileMenu.jsx';
import { Link } from 'react-router-dom';

function Header3({ className = '', scroll = false}) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSearchPopupOpen, setSearchPopupOpen] = useState(false);

    useEffect(() => {
        StickyHeader();
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };
    const toggleSearchPopup = () => setSearchPopupOpen((prev) => !prev); // Toggle search popup
    const closeSearchPopup = () => setSearchPopupOpen(false); // Close search popup

    return (
        <header className={`main-header header-style-three ${className || ''}`}>
            {/* Header Top */}
            <div className="header-top">
                <div className="inner-container">
                    
                    <div className="top-left">
                    <ul className="list-style-one">
                        <li><i className="fal fa-clock"></i> Mon - Fri: 09.00am - 10.00 pm</li>
                        <li><i className="fa fa-map-marker-alt"></i> Richardson, California 62639 </li>
                        <li><i className="fa fa-envelope"></i> <Link to="#" className="mailto:soliur@mail.com">Soliur@mail.com</Link></li>
                    </ul>
                    </div>
                
                    <div className="top-right">

                    <ul className="social-icon-one light">
                        <li><Link to="#"><i className="icon fab fa-google"></i></Link></li>
                        <li><Link to="#"><i className="icon fab fa-pinterest"></i></Link></li>
                        <li><Link to="#"><i className="icon fab fa-twitter"></i></Link></li>
                        <li><Link to="#"><i className="icon fab fa-facebook-f"></i></Link></li>
                        <li><Link to="#"><i className="icon fab fa-linkedin-in"></i></Link></li>
                    </ul>
                    </div>
                </div>
            </div>
            {/* Header lower */}
            <div className="header-lower">
                <div className="main-box">
                    <div className="logo-box">
                        <div className="logo"><Link to="/"><img src={logo1} alt="Logo" title="Soliur"/></Link></div>
                    </div>

                    <div className="nav-outer">    
                        <nav className="nav main-menu">
                            <Navigation />
                        </nav>
                    </div>

                    <div className="outer-box">

                    <Link to="tel:+92(8800)9806" className="info-btn-three">
                        <i className="icon fa fa-phone"></i>
                        <small>Call Us Anytime</small>
                        <strong>23 4567 890</strong>
                    </Link>

                    <button className="ui-btn ui-btn search-btn" onClick={toggleSearchPopup}>
                        <span className="icon lnr lnr-icon-search"></span>
                    </button>

                    <span className="divider"></span>
                    
                    <button className="ui-btn ui-btn cart-btn">
                        <i className="icon lnr lnr-icon-cart"></i>
                        <span className="count">0</span>
                    </button>

                    <div className="btn-box">
                        <Link to="/contact" className="theme-btn btn-style-one bg-orange"><span className="btn-title">Request a quote</span></Link>
                    </div>
                        
                    <div className="mobile-nav-toggler" onClick={toggleMobileMenu}><span className="icon lnr-icon-bars"></span></div>
                    </div>
                </div>
            </div>
            
            {/* Header Search */}
            <div className={`search-popup ${isSearchPopupOpen ? 'active' : ''}`}>
                <span className="search-back-drop" onClick={closeSearchPopup} />
                <button className="close-search" onClick={closeSearchPopup}>
                    <span className="fa fa-times" />
                </button>
                <div className="search-inner">
                    <form method="post" action="/">
                        <div className="form-group">
                            <input
                                type="search"
                                name="search-field"
                                placeholder="Search..."
                                required
                            />
                            <button type="submit">
                                <i className="fa fa-search" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* End Header Search */}       

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="menu-backdrop" onClick={closeMobileMenu} />
                <nav className="menu-box">
                    <div className="upper-box">
                        <div className="nav-logo">
                            <Link to="/"><img src={logo1} alt="Soliur" title="Soliur" /></Link>
                        </div>
                        <div className="close-btn" onClick={closeMobileMenu}>
                            <i className="icon fa fa-times" />
                        </div>
                    </div>
                    <MobileMenu />
                    <ul className="contact-list-one">
                        <li>
                            <div className="contact-info-box">
                                <i className="icon lnr-icon-phone-handset" />
                                <span className="title">Call Now</span>
                                <Link to="tel:+92880098670">+92 (8800) - 98670</Link>
                            </div>
                        </li>
                        <li>
                            <div className="contact-info-box">
                                <span className="icon lnr-icon-envelope1" />
                                <span className="title">Send Email</span>
                                <Link to="mailto:help@company.com">help@company.com</Link>
                            </div>
                        </li>
                        <li>
                            <div className="contact-info-box">
                                <span className="icon lnr-icon-clock" />
                                <span className="title">Opening Hours</span>
                                Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                            </div>
                        </li>
                    </ul>
                    <ul className="social-links">
                        <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                        <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link to="#"><i className="fab fa-pinterest" /></Link></li>
                        <li><Link to="#"><i className="fab fa-instagram" /></Link></li>
                    </ul>
                </nav>
            </div>
            {/* Sticky Header */}
            <div className={`sticky-header ${scroll ? 'fixed-header animated slideInDown' : ''}`}>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="logo">
                            <Link to="/"><img src={logo1} alt="Soliur" /></Link>
                        </div>
                        <div className="nav-outer">
                            <nav className="main-menu">
                                <div className="navbar-collapse show collapse clearfix">
                                    <Navigation />
                                </div>
                            </nav>
                            <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                                <span className="icon lnr-icon-bars"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header3;
