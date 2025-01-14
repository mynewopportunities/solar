import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        
    };

function ServiceHome3({ className }) {
    return (
        <>
            <section className={`services-section-three ${className || ''}`}>
                <div className="icon-solar-5"></div>
                <div className="icon-turbines-11"></div>
                <div className="auto-container">
                    <div className="sec-title text-center">
                    <div className="sub-title-outer">
                        <span className="sub-title">Services</span>
                        <span className="divider"></span>
                    </div>
                    <h2 className="letters-slide-up text-split">Best Solar provider</h2>
                    </div>
                    <div className="row">            
                        <div className="content-column col-xl-6 col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="300ms">
                            <div className="inner-column">
                            <div className="bg bg-image bg-parallax" style={{ backgroundImage: 'url(../../assets/images/background/9.jpg)' }}></div>
                                <Swiper {...swiperOptions} className="services-carousel-two owl-carousel owl-theme default-dots">
                                    {/* service Block */}
                                    <SwiperSlide className="service-block-four">
                                        <div className="inner-box">
                                        <i className="icon flaticon-bulb"></i>
                                        <h4 className="title">Industry leading solar <br/>system provider</h4>
                                        <div className="text">A leading voice in low-income solar policy and the nation’s largest nonprofit solar installer, serving families throughout California</div>
                                        <Link to="/service-details" className="theme-btn btn-style-one bg-orange"><span className="btn-title">Read More<i className="icon-sm-arrow"></i></span></Link>
                                        </div>
                                    </SwiperSlide>
                                    {/* service Block */}
                                    <SwiperSlide className="service-block-four">
                                        <div className="inner-box">
                                        <i className="icon flaticon-bulb"></i>
                                        <h4 className="title">Industry leading solar <br/>system provider</h4>
                                        <div className="text">A leading voice in low-income solar policy and the nation’s largest nonprofit solar installer, serving families throughout California</div>
                                        <Link to="/service-details" className="theme-btn btn-style-one bg-orange"><span className="btn-title">Read More<i className="icon-sm-arrow"></i></span></Link>
                                        </div>
                                    </SwiperSlide>
                                    {/* service Block */}
                                    <SwiperSlide className="service-block-four">
                                        <div className="inner-box">
                                        <i className="icon flaticon-bulb"></i>
                                        <h4 className="title">Industry leading solar <br/>system provider</h4>
                                        <div className="text">A leading voice in low-income solar policy and the nation’s largest nonprofit solar installer, serving families throughout California</div>
                                        <Link to="/service-details" className="theme-btn btn-style-one bg-orange"><span className="btn-title">Read More<i className="icon-sm-arrow"></i></span></Link>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                
                        <div className="services-column col-xl-6 col-lg-6">
                            <div className="inner-column">
                            <div className="row">
                
                                <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="content">
                                    <i className="icon flaticon-solar-panels"></i>
                                    <h6 className="title"><Link to="/service-details">Commercial <br/>Installation</Link></h6>
                                    </div>
                                    <Link to="/service-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
                                    <div className="icon-bulb-5"></div>
                                </div>
                                </div>
                
                                <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="content">
                                    <i className="icon flaticon-solar-panel-6"></i>
                                    <h6 className="title"><Link to="/service-details">Home <br/>Installation</Link></h6>
                                    </div>
                                    <Link to="/service-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
                                    <div className="icon-bulb-5"></div>
                                </div>
                                </div>
                
                                <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="content">
                                    <i className="icon flaticon-solar-energy-1"></i>
                                    <h6 className="title"><Link to="/service-details">Repair & <br/>Maintenence</Link></h6>
                                    </div>
                                    <Link to="/service-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
                                    <div className="icon-bulb-5"></div>
                                </div>
                                </div>
                
                                <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="content">
                                    <i className="icon flaticon-solar-house-1"></i>
                                    <h6 className="title"><Link to="/service-details">Energy <br/>Powerment</Link></h6>
                                    </div>
                                    <Link to="/service-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
                                    <div className="icon-bulb-5"></div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServiceHome3;
