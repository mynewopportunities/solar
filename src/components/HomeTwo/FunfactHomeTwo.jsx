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

function FunfactHomeTwo({ className }) {
    const percentage1 = 960;
    const percentage2 = 830;
    const percentage3 = 89;
    const percentage4 = 763;
    return (		
        <>
        <section className={`project-section-two pt-0 ${className || ''}`}>
          <div className="auto-container">
            <div className="outer-box">
              <div className="bg bg-image" style={{ backgroundImage: 'url(../../assets/images/background/7.jpg)' }}></div>

              <div className="fact-counter">
                <div className="icon-turbines-12"></div>
                <div className="row">

                  <div className="counter-block-two col-lg-4 col-sm-6 wow fadeInUp">
                    <div className="inner">
                      <div className="content">
                        <i className="icon flaticon-solar-panels"></i>
                        <div className="count-box"><span className="count-text justify-content-center" data-speed="3000" data-stop="30"><CounterUp count={percentage1} time={3} /></span></div>
                        <h6 className="counter-title">Systems installed</h6>
                      </div>
                    </div>
                  </div>

                  <div className="counter-block-two col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                    <div className="inner">
                      <div className="content">
                        <i className="icon flaticon-solar-panel-6"></i>
                        <div className="count-box"><span className="count-text justify-content-center" data-speed="3000" data-stop="30"><CounterUp count={percentage2} time={3} /></span></div>
                        <h6 className="counter-title">Lifetime Savings</h6>
                      </div>
                    </div>
                  </div>

                  <div className="counter-block-two col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                    <div className="inner">
                      <div className="content">
                        <i className="icon flaticon-solar-energy-1"></i>
                        <div className="count-box"><span className="count-text justify-content-center" data-speed="3000" data-stop="30"><CounterUp count={percentage3} time={3} /></span></div>
                        <h6 className="counter-title">Participants Trained</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="sec-title text-center">
              <div className="sub-title-outer">
                <span className="sub-title">SUCCESSFUL Installations</span>
                <span className="divider"></span>
              </div>
              <h2 className="letters-slide-up text-split">A track record that speaks <br/>for itself</h2>
            </div>
          </div>
          <div className="carousel-outer">
            <Swiper {...swiperOptions} className="projects-carousel-two owl-carousel owl-theme default-dots">
              {/* project Block */}
              <SwiperSlide className="project-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link to="/project-details"><img src="../../assets/images/resource/project1-1.jpg" alt="Image"/></Link></figure>
                  </div>
                  <div className="content-box">
                    <h1 className="float-text">Solar</h1>
                    <span className="cat">echanix inc ltd</span><br/>
                    <h4 className="title"><Link to="/project-details">Power project</Link></h4>
                    <Link to="/project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link><br/>
                  </div>
                  <div className="overlay-1"></div>
                </div>
              </SwiperSlide>
              {/* project Block */}
              <SwiperSlide className="project-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link to="/project-details"><img src="../../assets/images/resource/project1-2.jpg" alt="Image"/></Link></figure>
                  </div>
                  <div className="content-box">
                    <h1 className="float-text">Solar</h1>
                    <span className="cat">echanix inc ltd</span><br/>
                    <h4 className="title"><Link to="/project-details">Power project</Link></h4>
                    <Link to="/project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link><br/>
                  </div>
                  <div className="overlay-1"></div>
                </div>
              </SwiperSlide>
              {/* project Block */}
              <SwiperSlide className="project-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link to="/project-details"><img src="../../assets/images/resource/project1-3.jpg" alt="Image"/></Link></figure>
                  </div>
                  <div className="content-box">
                    <h1 className="float-text">Solar</h1>
                    <span className="cat">echanix inc ltd</span><br/>
                    <h4 className="title"><Link to="/project-details">Power project</Link></h4>
                    <Link to="/project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link><br/>
                  </div>
                  <div className="overlay-1"></div>
                </div>
              </SwiperSlide>
              {/* project Block */}
              <SwiperSlide className="project-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link to="/project-details"><img src="../../assets/images/resource/project1-1.jpg" alt="Image"/></Link></figure>
                  </div>
                  <div className="content-box">
                    <h1 className="float-text">Solar</h1>
                    <span className="cat">echanix inc ltd</span><br/>
                    <h4 className="title"><Link to="/project-details">Power project</Link></h4>
                    <Link to="/project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link><br/>
                  </div>
                  <div className="overlay-1"></div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
		</>
    );
}

export default FunfactHomeTwo;