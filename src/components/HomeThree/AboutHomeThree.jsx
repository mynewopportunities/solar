import React from 'react';

function AboutHomeThree({ className }) {
    return (
        <>
          <section className={`about-section-four pt-0 ${className || ''}`}>
            <div className="icon-bulb-3 bounce-y"></div>
            <div className="icon-dots"></div>
            <div className="auto-container">
              <div className="outer-box">
                <div className="bg bg-pattern-1"></div>
                <div className="row">
          
                  <div className="content-column col-lg-6 col-md-12 col-sm-12 order-lg-2 wow fadeInRight" data-wow-delay="300ms">
                    <div className="inner-column">
                      <div className="sec-title">
                        <div className="sub-title-outer">
                          <span className="sub-title">Who we are</span>
                          <span className="divider"></span>
                        </div>
                        <h2 className="letters-slide-up text-split">Industry leading solar <br/>system provider</h2>
                      </div>
                      <div className="icon-box">
                        <div className="content-box">
                          <i className="icon flaticon-bulb"></i>
                          <div className="text">A leading voice in low-income solar  policy <br/> and the nation’s largest nonprofit solar <br/>installer, serving families .</div>
                        </div>
                      </div>
                      <ul className="list-style-two">
                        <li><i className="fa fa-arrow-alt-circle-right"></i> Significantly reduces electricity</li>
                        <li><i className="fa fa-arrow-alt-circle-right"></i> A solar installation makes pure</li>
                        <li><i className="fa fa-arrow-alt-circle-right"></i> Help lower electricity residential</li>
                      </ul>
                      <div className="author-box">
                        <div className="inner">
                          <figure className="thumb"><img src="../../assets/images/resource/about1-thumb1.jpg" alt="Image"/></figure>
                          <div className="info">
                            <h6 className="name">Alen Donald</h6>
                            <div className="designation">CEO, Soliur</div>
                          </div>
                          <div className="sign">
                            <img src="../../assets/images/resource/sign-2.png" alt="Signature"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
          
                  <div className="image-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="image-box">
                        <figure className="image overlay-anim"><img src="../../assets/images/resource/about4-1.jpg" alt="Image"/></figure>
                        <div className="exp-box">
                          <div className="inner">
                            <h1 className="title" data-text="25">25</h1>
                            <span className="text">Years of Experience</span>
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
}

export default AboutHomeThree;
