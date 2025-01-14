import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import TestimonialImage1 from '/public/assets/images/resource/testi1-1.jpg';
import TestimonialImage2 from '/public/assets/images/resource/testi1-2.jpg';
import TestimonialImage3 from '/public/assets/images/resource/testi1-3.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 2,
        },
        1350: {
            slidesPerView: 3,
        },
    }
};

function TestimonialHomeOne({ className }) {
    return (
        <>
            <section className={`testimonial-section ${className || ''}`}>
              <div className="icon-turbines-5"></div>
              <div className="auto-container">
                <div className="sec-title text-center">
                  <div className="sub-title-outer">
                    <span className="sub-title">testimonial</span>
                    <span className="divider"></span>
                  </div>
                  <h2 className="letters-slide-up text-split">Success stories from clients</h2>
                </div>
                <div className="carousel-outer">
                  <Swiper {...swiperOptions} className="testimonial-carousel owl-carousel owl-theme default-dots">
                      {/* testimonial Block */}
                      <SwiperSlide className="testimonial-block">
                      <div className="inner-box">
                        <div className="icon-box"><span className="icon icon-quote"></span></div>
                        <figure className="thumb"><img src={TestimonialImage1} alt="Image"/></figure>
                        <div className="text">Build and implement innovative, profitable and sustainable products and services</div>
                        <h6 className="name">Mark Wood</h6>
                        <span className="designation">CEO, Soliur</span>
                        <div className="icon-bulb"></div>
                      </div>
                      </SwiperSlide>
                      {/* testimonial Block */}
                      <SwiperSlide className="testimonial-block">
                        <div className="inner-box">
                          <div className="icon-box"><span className="icon icon-quote"></span></div>
                          <figure className="thumb"><img src={TestimonialImage2} alt="Image"/></figure>
                          <div className="text">Build and implement innovative, profitable and sustainable products and services</div>
                          <h6 className="name">Mark Wood</h6>
                          <span className="designation">CEO, Soliur</span>
                          <div className="icon-bulb"></div>
                        </div>
                      </SwiperSlide>
                      {/* testimonial Block */}
                      <SwiperSlide className="testimonial-block">
                      <div className="inner-box">
                        <div className="icon-box"><span className="icon icon-quote"></span></div>
                        <figure className="thumb"><img src={TestimonialImage3} alt="Image"/></figure>
                        <div className="text">Build and implement innovative, profitable and sustainable products and services</div>
                        <h6 className="name">Mark Wood</h6>
                        <span className="designation">CEO, Soliur</span>
                        <div className="icon-bulb"></div>
                      </div>
                      </SwiperSlide>
                      {/* testimonial Block */}
                      <SwiperSlide className="testimonial-block">
                      <div className="inner-box">
                        <div className="icon-box"><span className="icon icon-quote"></span></div>
                        <figure className="thumb"><img src={TestimonialImage1} alt="Image"/></figure>
                        <div className="text">Build and implement innovative, profitable and sustainable products and services</div>
                        <h6 className="name">Mark Wood</h6>
                        <span className="designation">CEO, Soliur</span>
                        <div className="icon-bulb"></div>
                      </div>
                      </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </section>
        </>
    );
}

export default TestimonialHomeOne;
