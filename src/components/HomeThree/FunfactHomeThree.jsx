import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

import CounterUp from '../../lib/CounterUp.jsx'; 
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  pagination: true,
  slidesPerView: 3,
  spaceBetween: 20,
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

function FunfactHome3({ className }) {
    const percentage1 = 960;
    const percentage2 = 830;
    const percentage3 = 89;
    const percentage4 = 763;
    return (		
        <>
        <section className={`fun-fact-section-two ${className || ''}`}>
          <div className="auto-container">
            <div className="fact-counter">
              <div className="row">
        
                <div className="counter-block-four col-lg-3 col-md-6 col-sm-6 wow fadeInUp">
                  <div className="inner-box">
                    <i className="icon flaticon-solar-energy-1"></i>
                    <div className="content-box">
                      <div className="count-box"><span className="count-text justify-content-center" data-speed="3000" data-stop="30"><CounterUp count={percentage1} time={3} /></span></div>
                      <div className="counter-title">Systems Installed</div>
                    </div>
                  </div>
                </div>
          
                <div className="counter-block-four col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                  <div className="inner-box">
                    <i className="icon flaticon-solar-panels"></i>
                    <div className="content-box">
                      <div className="count-box"><span className="count-text justify-content-center" data-speed="3000" data-stop="30"><CounterUp count={percentage1} time={3} /></span></div>
                      <div className="counter-title">Lifetime Savings</div>
                    </div>
                  </div>
                </div>
          
                <div className="counter-block-four col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                  <div className="inner-box">
                    <i className="icon flaticon-solar-energy"></i>
                    <div className="content-box">
                      <div className="count-box"><span className="count-text justify-content-center" data-speed="3000" data-stop="30"><CounterUp count={percentage1} time={3} /></span></div>
                      <div className="counter-title">Trained Experts</div>
                    </div>
                  </div>
                </div>
      
                <div className="counter-block-four col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
                  <div className="inner-box">
                    <i className="icon flaticon-solar-panel-6"></i>
                    <div className="content-box">
                      <div className="count-box"><span className="count-text justify-content-center" data-speed="3000" data-stop="30"><CounterUp count={percentage1} time={3} /></span></div>
                      <div className="counter-title">Best Awards</div>
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

export default FunfactHome3;