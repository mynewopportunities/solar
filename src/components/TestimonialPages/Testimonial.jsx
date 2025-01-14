import React from 'react';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import PageTitle from '../PageTitle.jsx';
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
  pagination:{
    dynamicBullets: true,
  },

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

function Testimonial() {
    return (
        <>
            <HomeThreeHeader />
            <PageTitle
                title="Testimonial"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/testimonial', title: 'Testimonial' },
                ]}
            />
            {/* Testimonials Section */}
            <section className="testimonial-section">
              <div className="icon-turbines-5"></div>
              <div className="auto-container">
                <div className="carousel-outer">
                  <Swiper {...swiperOptions} className="testimonial-carousel">
                    {/* testimonial Block */}
                    <SwiperSlide className="testimonial-block">
                      <div className="inner-box">
                        <div className="icon-box"><span className="icon icon-quote"></span></div>
                        <figure className="thumb"><img src="../../assets/images/resource/testi1-1.jpg" alt="Image"/></figure>
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
                        <figure className="thumb"><img src="../../assets/images/resource/testi1-2.jpg" alt="Image"/></figure>
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
                        <figure className="thumb"><img src="../../assets/images/resource/testi1-3.jpg" alt="Image"/></figure>
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
                        <figure className="thumb"><img src="../../assets/images/resource/testi1-1.jpg" alt="Image"/></figure>
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
            {/* End Testimonials Sect--> */}
            <FooterHomeOne />
        </>
    );
}

export default Testimonial;
