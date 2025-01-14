import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  pagination: true,
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


function Projects() {
    return (
        <>
        <section className="project-section-three">
          <div className="bg bg-pattern-2"></div>
          <div className="large-container">
            
            <Swiper {...swiperOptions} className="projects-carousel owl-carousel owl-theme default-dots">
              {/* project Block */}
              <SwiperSlide className="project-block-two">
                <div className="inner-box">
                  <figure className="image"><Link to="/project-details"><img src="../../assets/images/resource/project2-1.jpg" alt="Image"/></Link></figure>
                  <div className="content-box">
                    <div className="inner">
                      <span className="cat">echanix inc ltd</span>
                      <h4 className="title"><Link to="/project-details">Power project</Link></h4>
                      <Link to="/project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* project Block */}
              <SwiperSlide className="project-block-two">
                <div className="inner-box">
                  <figure className="image"><Link to="/project-details"><img src="../../assets/images/resource/project2-2.jpg" alt="Image"/></Link></figure>
                  <div className="content-box">
                    <div className="inner">
                      <span className="cat">echanix inc ltd</span>
                      <h4 className="title"><Link to="/project-details">Power project</Link></h4>
                      <Link to="/project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* project Block */}
              <SwiperSlide className="project-block-two">
                <div className="inner-box">
                  <figure className="image"><Link to="/project-details"><img src="../../assets/images/resource/project2-3.jpg" alt="Image"/></Link></figure>
                  <div className="content-box">
                    <div className="inner">
                      <span className="cat">echanix inc ltd</span>
                      <h4 className="title"><Link to="/project-details">Power project</Link></h4>
                      <Link to="/project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* project Block */}
              <SwiperSlide className="project-block-two">
                <div className="inner-box">
                  <figure className="image"><Link to="/project-details"><img src="../../assets/images/resource/project2-1.jpg" alt="Image"/></Link></figure>
                  <div className="content-box">
                    <div className="inner">
                      <span className="cat">echanix inc ltd</span>
                      <h4 className="title"><Link to="/project-details">Power project</Link></h4>
                      <Link to="/project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        </>
    );
}

export default Projects;
