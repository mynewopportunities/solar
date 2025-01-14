import React from 'react';
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

function TestimonialHomeTwo({ className }) {
    return (
        <>
            <section className={`testimonial-section-two pt-0 ${className || ''}`}>
              <div className="icon-turbines-9"></div>
              <div className="auto-container">
                <div className="row">
          
                  <div className="funfact-column col-lg-5 col-md-6 col-sm-12">
                    <div className="inner-column">
          
                      <div className="counter-block-three wow fadeInUp">
                        <div className="inner">
                          <div className="icon-turbines-10"></div>
                          <div className="content">
                            <i className="icon fal fa-messages"></i>
                            <div className="count-box"><span className="count-text" data-speed="3000" data-stop="1776">0</span>k+</div>
                            <h6 className="counter-title">Satisfied <br/> clients</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
          
                  <div className="testimonial-column col-lg-7 col-md-6 col-sm-12">
                    <div className="inner-column">
                      <div className="carousel-outer">
                        <div className="icon-bulb-4"></div>
                          <Swiper {...swiperOptions} className="testimonial-carousel-two owl-carousel owl-theme default-dots">
                              {/* testimonial Block */}
                              <SwiperSlide className="testimonial-block-two">
                                <div className="inner-box">
                                  <div className="content">
                                    <div className="image-box">
                                      <figure className="thumb"><img src="../../assets/images/resource/testi2-1.jpg" alt="Image"/></figure>
                                      <div className="icon-quote"></div>
                                    </div>
                                    <div className="text">Build and implement innovative, profitable and sustainable products and services Dolor amety consectetur.</div>
                                    <h6 className="name">Mark Wood</h6>
                                    <span className="designation">CEO, Soliur</span>
                                  </div>
                                </div>
                              </SwiperSlide>
                              {/* testimonial Block */}
                              <SwiperSlide className="testimonial-block-two">
                                <div className="inner-box">
                                  <div className="content">
                                    <div className="image-box">
                                      <figure className="thumb"><img src="../../assets/images/resource/testi2-1.jpg" alt="Image"/></figure>
                                      <div className="icon-quote"></div>
                                    </div>
                                    <div className="text">Build and implement innovative, profitable and sustainable products and services Dolor amety consectetur.</div>
                                    <h6 className="name">Mark Wood</h6>
                                    <span className="designation">CEO, Soliur</span>
                                  </div>
                                </div>
                              </SwiperSlide>
                              {/* testimonial Block */}
                              <SwiperSlide className="testimonial-block-two">
                                <div className="inner-box">
                                  <div className="content">
                                    <div className="image-box">
                                      <figure className="thumb"><img src="../../assets/images/resource/testi2-1.jpg" alt="Image"/></figure>
                                      <div className="icon-quote"></div>
                                    </div>
                                    <div className="text">Build and implement innovative, profitable and sustainable products and services Dolor amety consectetur.</div>
                                    <h6 className="name">Mark Wood</h6>
                                    <span className="designation">CEO, Soliur</span>
                                  </div>
                                </div>
                              </SwiperSlide>
                          </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </>
    );
}

export default TestimonialHomeTwo;
