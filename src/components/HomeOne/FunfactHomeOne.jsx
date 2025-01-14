import React from 'react';
import { Link } from 'react-router-dom';
import CounterUp from '../../lib/CounterUp.jsx'; 

function FunfactHomeOne({ className }) {
    const percentage1 = 960;
    const percentage2 = 830;
    const percentage3 = 89;
    return (		
        <>
        <section className={`fun-fact-section pb-0 ${className || ''}`}>
          <div className="icon-turbines-3"></div>
          <div className="auto-container">
            <div className="fact-counter">
              <div className="icon-turbines-2"></div>
              <div className="row">
                <div className="content-column col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInLeft">
                  <div className="inner-column">
                    <h3 className="title">Renewable energy that benefits everyone</h3>
                    <Link to="/services" className="read-more"> Our services <i className="fa fa-arrow-right"></i></Link>
                  </div>
                </div>
                <div className="image-column col-xl-3 col-lg-4 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <figure className="image wow zoomIn"><img src="../assets/images/resource/funfact1-1.png" alt="Image"/></figure>
                  </div>
                </div>
                <div className="funfact-column col-xl-5 col-lg-4 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="counter-block wow fadeInUp">
                      <div className="inner-box">
                        <div className="icon-box"><i className="icon flaticon-solar-panels"></i></div>
                        <div className="content-box">
                          <div className="count-box"><span className="count-text justify-content-center" data-speed="3000" data-stop="30"><CounterUp count={percentage1} time={3} /></span></div>
                          <div className="counter-title">Systems Installed</div>
                        </div>
                      </div>
                    </div>
                    <div className="counter-block wow fadeInUp" data-wow-delay="300ms">
                      <div className="inner-box">
                        <div className="icon-box"><i className="icon flaticon-solar-panel-6"></i></div>
                        <div className="content-box">
                          <div className="count-box"><span className="count-text justify-content-center" data-speed="3000" data-stop="30"><CounterUp count={percentage2} time={3} /></span></div>
                          <h6 className="counter-title">Lifetime Savings</h6>
                        </div>
                      </div>
                    </div>
                    <div className="counter-block wow fadeInUp" data-wow-delay="600ms">
                      <div className="inner-box">
                        <div className="icon-box"><i className="icon flaticon-solar-energy-1"></i></div>
                        <div className="content-box">
                          <div className="count-box"><span className="count-text justify-content-center" data-speed="3000" data-stop="30"><CounterUp count={percentage3} time={3} /></span></div>
                          <div className="counter-title">Participants Trained</div>
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

export default FunfactHomeOne;