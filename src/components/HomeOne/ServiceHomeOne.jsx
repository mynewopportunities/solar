import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

				breakpoints:{
            320: {
                slidesPerView: 1,
                // spaceBetween: 30,
            },
            575: {
                slidesPerView: 1,
                // spaceBetween: 30,
            },
            767: {
                slidesPerView: 2,
                // spaceBetween: 30,
            },
            991: {
                slidesPerView: 2,
                // spaceBetween: 30,
            },
            1199: {
                slidesPerView: 3,
                // spaceBetween: 30,
            },
            1350: {
                slidesPerView: 3,
                // spaceBetween: 30,
            },
        }
    };

function ServiceHomeOne({ className }) {
    return (
        <>
            <section className={`services-section pull-up ${className || ''}`}>
                <div className="bg bg-pattern-3"></div>
                <div className="auto-container">
                    <div className="sec-title light text-center">
                    <div className="sub-title-outer">
                        <span className="sub-title">What we do</span>
                        <span className="divider"></span>
                    </div>
                    <h2 className="letters-slide-up text-split">Affordable solar panel <br/> installation for all</h2>
                    </div>
                    <Swiper {...swiperOptions} className="services-carousel owl-carousel owl-theme default-dots">
                        {/* service Block */}
                        <SwiperSlide className="service-block">
                            <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/service-details"><img src="../assets/images/resource/service1-1.jpg" alt="Image"/></Link></figure>
                            </div>
                            <div className="content-box">
                                <div className="icon-border-2"></div>
                                <div className="icon-border-3"></div>
                                <i className="icon flaticon-solar-panels"></i>
                                <div className="content">
                                <h4 className="title"><Link to="/service-details">Uitility Solutions</Link></h4>
                                <div className="text">With over four decades of experience providing solutions to large-scale enterprises</div>
                                </div>
                                <div className="count">01</div>
                            </div>
                            </div>
                        </SwiperSlide>
                        {/* service Block */}
                        <SwiperSlide className="service-block">
                        <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><Link to="/service-details"><img src="../assets/images/resource/service1-2.jpg" alt="Image"/></Link></figure>
                        </div>
                        <div className="content-box">
                            <div className="icon-border-2"></div>
                            <div className="icon-border-3"></div>
                            <i className="icon flaticon-solar-panel-6"></i>
                            <div className="content">
                            <h4 className="title"><Link to="/service-details">C&I Solutions</Link></h4>
                            <div className="text">With over four decades of experience providing solutions to large-scale enterprises</div>
                            </div>
                            <div className="count">01</div>
                        </div>
                        </div>
                        </SwiperSlide>
                        {/* service Block */}
                        <SwiperSlide className="service-block">
                            <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/service-details"><img src="../assets/images/resource/service1-3.jpg" alt="Image"/></Link></figure>
                            </div>
                            <div className="content-box">
                                <div className="icon-border-2"></div>
                                <div className="icon-border-3"></div>
                                <i className="icon flaticon-solar-energy-1"></i>
                                <div className="content">
                                <h4 className="title"><Link to="/service-details">Residential Solutions</Link></h4>
                                <div className="text">With over four decades of experience providing solutions to large-scale enterprises</div>
                                </div>
                                <div className="count">01</div>
                            </div>
                            </div>
                        </SwiperSlide>
                        {/* service Block */}
                        <SwiperSlide className="service-block">
                            <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/service-details"><img src="../assets/images/resource/service1-1.jpg" alt="Image"/></Link></figure>
                            </div>
                            <div className="content-box">
                                <div className="icon-border-2"></div>
                                <div className="icon-border-3"></div>
                                <i className="icon flaticon-solar-panels"></i>
                                <div className="content">
                                <h4 className="title"><Link to="/service-details">Uitility Solutions</Link></h4>
                                <div className="text">With over four decades of experience providing solutions to large-scale enterprises</div>
                                </div>
                                <div className="count">01</div>
                            </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default ServiceHomeOne;
