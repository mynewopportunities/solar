import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar2 from '../../lib/ProgressBar2';


function About2HomeOne({ className }) {
    return (
        <>
          <section className={`about-section-two ${className || ''}`}>
            <div className="icon-turbines-4"></div>
            <div className="auto-container">
              <div className="outer-box">
                <div className="row">

                  <div className="content-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                    <div className="inner-column">
                      <div className="sec-title">
                        <div className="sub-title-outer">
                          <span className="sub-title">Save Money</span>
                          <span className="divider"></span>
                        </div>
                        <h2 className="letters-slide-up text-split">Savings for you, clean <br/> power for your life</h2>
                        <div className="text">A leading voice in low-income solar policy and the <br/> nation’s largest nonprofit solar installer, serving families <br/>throughout California</div>
                      </div>
                      <ul className="list-style-four two-column">
                        <li><i className="fa fa-check-circle"></i>Full automation</li>
                        <li><i className="fa fa-check-circle"></i>Super Factory</li>
                      </ul>
                      <div className="team-details__bottom-right ms-0">
                        <div className="team-details__progress home-style">
                          <ProgressBar2 title="Installation" targetPercentage={90} />
                          <ProgressBar2 title="Service" targetPercentage={80} />
                        </div>
                      </div>

                      <Link to="tel:+9298006869" className="info-btn-three">
                        <i className="icon flaticon-customer-service"></i>
                        <small>Call us for any inquiry</small>
                        <strong>(010) 612 45 741</strong>
                      </Link>
                    </div>
                  </div>

                  <div className="image-column col-xl-6 col-lg-6">
                    <div className="inner-column wow fadeInLeft">
                      <figure className="image overlay-anim"><img src="../assets/images/resource/about2-1.jpg" alt="Image"/></figure>
                      <figure className="image-2 overlay-anim"><img src="../assets/images/resource/about2-2.jpg" alt="Image"/></figure>
                      <div className="exp-box bounce-y">
                        <div className="inner">
                          <i className="icon flaticon-travel"></i>
                          <h2 className="title">90%</h2>
                          <span className="designation">Success Rate</span>
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

export default About2HomeOne;
