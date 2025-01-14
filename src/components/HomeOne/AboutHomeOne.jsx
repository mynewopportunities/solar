import React from 'react';

function AboutHomeOne({ className }) {
    return (
        <>
          <section className={`about-section pt-0 ${className || ''}`}>
            <div className="float-text">Soliur</div>
            <div className="auto-container">
              <div className="outer-box">
                <div className="row">
        
                  <div className="content-column col-xl-5 col-lg-6 col-md-12 col-sm-12 order-lg-2 wow fadeInRight" data-wow-delay="300ms">
                    <div className="inner-column">
                      <div className="sec-title">
                        <div className="sub-title-outer">
                          <span className="sub-title">Who we are</span> 
                          <span className="divider"></span>
                        </div>
                        <h2 className="letters-slide-up text-split">Industry leading solar system provider</h2>
                        <div className="text">A leading voice in low-income solar policy and the nation’s largest nonprofit solar installer, serving families throughout California</div>
                      </div>
                      <div className="bottom-box">
        
                        <ul className="list-style-three">
                          <li><i className="icon flaticon-solar-panels"></i> Significantly reduces <br/> electricity bills</li>
                          <li><i className="icon flaticon-solar-panel-6"></i> A solar installation <br/> makes attractive</li>
                          <li><i className="icon flaticon-solar-energy-1"></i> Help lower electricity <br/> residential costs</li>
                        </ul>
                        
                        <div className="author-box">
                          <div className="inner">
                            <div className="author-image"><img src="../assets/images/resource/about1-thumb1.jpg" alt="Image"/></div>
                            <h6 className="name">Alen Donald</h6>
                            <div className="designation">CEO, Soliur</div>
                            <img src="../assets/images/resource/sign.png" alt="Signature"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        
                  <div className="image-column col-xl-7 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="bg-home"></div>
                      <div className="image-box">
                        <div className="image"><img src="../assets/images/resource/about1-1.png" alt="Image"/></div>
                        <div className="image-2 zoom-one" data-wow-delay="300ms"><img src="../assets/images/resource/about1-2.jpg" alt="Image"/></div>
                        <div className="exp-box">
                          <i className="icon flaticon-bulb"></i><br/>
                          <span className="text">Affordable System</span>
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

export default AboutHomeOne;
