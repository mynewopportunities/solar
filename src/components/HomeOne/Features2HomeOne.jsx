import React from 'react';
import { Link } from 'react-router-dom';
const Features2 = () => {
    return (
        <>
        <section className="features-section-two">
          <div className="float-image"><img src="../assets/images/resource/float-img.png" alt="Image"/></div>
          <div className="icon-dots-2"></div>
          <div className="auto-container">
             <div className="row">

              <div className="content-column col-lg-8 order-lg-2">
                <div className="inner-column">
                  <div className="sec-title light">
                    <div className="sub-title-outer">
                      <span className="sub-title">Innovation</span>
                      <span className="divider"></span>
                    </div>
                    <h2 className="letters-slide-up text-split">A global leader <br/>in solar installation</h2>
                    <div className="text">With over four decades of experience providing solutions to large-scale <br/> enterprises throughout the globe, we offer end-to-end logistics.</div>
                  </div>
                  <div className="row">

                    <div className="feature-block-two col-md-6 wow fadeInUp">
                      <div className="inner-box">
                        <div className="icon-border-3"></div>
                        <div className="icon-box"><i className="icon flaticon-solar-energy"></i></div>
                        <div className="content">
                          <h6 className="title"><Link to="/services">The one-stop smart <br/> solar solution.</Link></h6>
                        </div>
                      </div>
                    </div>

                    <div className="feature-block-two col-md-6 wow fadeInUp" data-wow-delay="200ms">
                      <div className="inner-box">
                        <div className="icon-border-3"></div>
                        <div className="icon-box"><i className="icon flaticon-solar-panels"></i></div>
                        <div className="content">
                          <h6 className="title"><Link to="/services">Count on a <br/> bankable partner.</Link></h6>
                        </div>
                      </div>
                    </div>

                    <div className="feature-block-two col-md-6 wow fadeInUp" data-wow-delay="300ms">
                      <div className="inner-box">
                        <div className="icon-border-3"></div>
                        <div className="icon-box"><i className="icon flaticon-solar-panel-6"></i></div>
                        <div className="content">
                          <h6 className="title"><Link to="/services">Optimized design <br/> for your site.</Link></h6>
                        </div>
                      </div>
                    </div>

                    <div className="feature-block-two col-md-6 wow fadeInUp" data-wow-delay="400ms">
                      <div className="inner-box">
                        <div className="icon-border-3"></div>
                        <div className="icon-box"><i className="icon flaticon-solar-energy-1"></i></div>
                        <div className="content">
                          <h6 className="title"><Link to="/services">Boost efficiency with TrinaTracker.</Link></h6>
                        </div>
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
};
export default Features2
