import React from 'react';
import { Link } from 'react-router-dom';

function AboutHomeTwo({ className }) {
    return (
        <>
          <section className={`about-section-three pt-0 ${className || ''}`}>
            <div className="icon-turbines"></div>
            <div className="icon-solar"></div>
            <div className="auto-container">
              <div className="row">
        
                <div className="content-column col-xl-5 col-lg-6 col-md-12 col-sm-12 order-lg-2 wow fadeInRight">
                  <div className="inner-column">
                    <div className="sec-title">
                      <div className="sub-title-outer">
                        <span className="sub-title">Who we are</span>
                        <span className="divider"></span>
                      </div>
                      <h2 className="title letters-slide-up text-split">Industry leading solar system provider</h2>
                      <div className="text">A leading voice in low-income solar policy and the nation’s largest nonprofit solar installer, serving families <br/> throughout California</div>
                    </div>
                    <div className="bottom-box">
        
                      <div className="list-box">
                        <ul className="list-style-two">
                          <li><i className="fa fa-arrow-alt-circle-right"></i> Significantly reduces electricity</li>
                          <li><i className="fa fa-arrow-alt-circle-right"></i> A solar installation makes pure</li>
                          <li><i className="fa fa-arrow-alt-circle-right"></i> Help lower electricity residential</li>
                        </ul>
                      </div>
                      
                      <div className="icon-box">
                        <div className="inner">
                          <i className="icon flaticon-bulb"></i>
                          <h6 className="title">Best solar energy installer</h6>
                        </div>
                      </div>
                    </div>
                    <Link to="/contact" className="theme-btn btn-style-one"><span className="btn-title">Contact Us <i className="icon icon-sm-arrow"></i></span></Link>
                  </div>
                </div>
        
                <div className="image-column col-xl-7 col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image-box">
                      <figure className="image overlay-anim"><img src="../assets/images/resource/about3-1.jpg" alt="Image"/></figure>
                      <figure className="image-2 overlay-anim" data-wow-delay="300ms"><img src="../assets/images/resource/about3-2.jpg" alt="Image"/></figure>
                      <div className="exp-box bounce-x">
                        <div className="inner">
                          <div className="content">
                            <div className="count">3800</div>
                            <h6 className="title">Satisfied Clients</h6>
                          </div>
                          <i className="icon fa fa-user"></i>
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

export default AboutHomeTwo;
