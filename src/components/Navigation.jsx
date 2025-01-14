import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="nav main-menu">
            <ul className="navigation">
                <li className="current dropdown">
                    <Link href="#">Home</Link>
                    <ul className="sub-menu">
                        <li><Link to="/">Home page 01</Link></li>
                        <li><Link to="/home-two">Home page 02</Link></li>
                        <li><Link to="/home-three">Home page 03</Link></li>
                        {/*<li className="dropdown">
                            <Link href="#">Boxed</Link>
                            <ul className="sub-menu">
                                <li><Link to="/home-one-boxed">Home Boxed 1</Link></li>
                                <li><Link to="/home-two-boxed">Home Boxed 2</Link></li>
                            </ul>
                        </li>*/}
                    </ul>
                </li>

                <li className="dropdown">
                    <Link href="#">Pages</Link>
                    <ul className="sub-menu">
                        <li><Link to="/about">About</Link></li>
                        <li className="dropdown">
                            <Link href="#">Services</Link>
                            <ul className="sub-menu">
                                <li><Link to="/services">Services List</Link></li>
                                <li><Link to="/service-details">Services Details</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link href="#">Our Team</Link>
                            <ul className="sub-menu">
                                <li><Link to="/team">Team List</Link></li>
                                <li><Link to="/team-details">Team Details</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/testimonial">Testimonial</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/error">Page 404</Link></li>
                    </ul>
                </li>

                <li className="dropdown">
                    <Link href="#">Projects</Link>
                    <ul className="sub-menu">
                        <li><Link to="/projects">Projects List</Link></li>
                        <li><Link to="/project-details">Projects Details</Link></li>
                    </ul>
                </li>

                <li className="dropdown">
                    <Link href="#">Shop</Link>
                    <ul className="sub-menu">
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/products-sidebar">Products with Sidebar</Link></li>
                        <li><Link to="/products-details">Product Details</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/checkout">Checkout</Link></li>
                    </ul>
                </li>

                <li className="dropdown">
                    <Link href="#">News</Link>
                    <ul className="sub-menu">
                        <li><Link to="/news">News Grid</Link></li>
                        <li><Link to="/news-details">News Details</Link></li>
                    </ul>
                </li>

                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
