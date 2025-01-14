// MobileMenu.jsx
import { useState } from "react";
import { Link } from "react-router-dom"; // Ensure correct import for react-router-dom

const MobileMenu = () => {
    const [isActive, setIsActive] = useState({ status: false, key: "" });
    const [isSubActive, setSubIsActive] = useState({ status: false, key: "" });

    const handleClick = (key) => {
        setIsActive((prevState) =>
            prevState.key === key
                ? { status: false, key: "" }
                : { status: true, key }
        );
    };
    const handleSubClick = (key) => {
        // Handle second-level menu toggle
        setSubIsActive((prevState) =>
            prevState.key === key
                ? { status: false, key: "" }
                : { status: true, key }
        );
    };

    return (
        <>

        <ul className="navigation">
            <li className="dropdown">
                <Link to="#">Home</Link>
                <ul className={isActive.key === 1 ? "d-block" : "d-none"}>
                    <li><Link to="/">Home page 01</Link></li>
                    <li><Link to="/home-two">Home page 02</Link></li>
                    <li><Link to="/home-three">Home page 03</Link></li>
                    {/* <li className="dropdown">
                        <Link to="#">Single Styles</Link>
                        <ul className={isSubActive.key === 5 ? "d-block" : "d-none"}>
                            <li><Link to="/index-1-single">Single Style One</Link></li>
                            <li><Link to="/index-2-single">Single Style Two</Link></li>
                        </ul>
                        <div className={isSubActive.key === 5 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(5)} >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li> */}
                    {/* <li className="dropdown">
                        <Link to="#">Dark Styles</Link>
                        <ul className={isSubActive.key === 6 ? "d-block" : "d-none"}>
                            <li><Link to="/index-1-dark">Dark Style One</Link></li>
                            <li><Link to="/index-2-dark">Dark Style Two</Link></li>
                        </ul>
                        <div className={isSubActive.key === 6 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(6)} >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li> */}
                    {/* <li><Link to="/index-1-rtl">RTL Style One</Link></li> */}
                </ul>
                <div className={isActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(1)} >
                    <i className="fa fa-angle-down"></i>
                </div>
            </li>
            <li className="dropdown">
                <Link to="#">Services</Link>
                <ul className={isActive.key === 2 ? "d-block" : "d-none"}>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/services-details">Services Details</Link></li>
                </ul>
                <div className={isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(2)}>
                    <i className="fa fa-angle-down"></i>
                </div>
            </li>
            <li className="dropdown">
                <Link to="#">Pages</Link>
                <ul className={isActive.key === 3 ? "d-block" : "d-none"}>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/faq">Faq</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/testimonial">Testimonials</Link></li>
                    <li><Link to="/404">404</Link></li>
                    <li className="dropdown">
                        <Link to="#">Team</Link>
                        <ul className={isSubActive.key === 7 ? "d-block" : "d-none"}>
                            <li><Link to="/team">Team List</Link></li>
                            <li><Link to="/team-details">Team Details</Link></li>
                        </ul>
                        <div className={isSubActive.key === 7 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(7)} >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    <li className="dropdown">
                        <Link to="#">Shop</Link>
                        <ul className={isSubActive.key === 8 ? "d-block" : "d-none"}>
                            <li><Link to="/shop-products">Products</Link></li>
                            <li><Link to="/shop-products-sidebar">Products with Sidebar</Link></li>
                            <li><Link to="/shop-product-details">Product Details</Link></li>
                            <li><Link to="/shop-cart">Cart</Link></li>
                            <li><Link to="/shop-checkout">Checkout</Link></li>
                        </ul>
                        <div className={isSubActive.key === 8 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(8)} >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                </ul>
                <div className={isActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(3)} >
                    <i className="fa fa-angle-down"></i>
                </div>
            </li>
            <li className="dropdown">
                <Link to="#">News</Link>
                <ul className={isActive.key === 4 ? "d-block" : "d-none"}>
                    <li><Link to="/news-grid">News Grid</Link></li>
                    <li><Link to="/news-details">News Details</Link></li>
                </ul>
                <div className={isActive.key === 4 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(4)} >
                    <i className="fa fa-angle-down"></i>
                </div>
            </li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>

        </>
    );
};

export default MobileMenu;
