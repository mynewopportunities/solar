import React from 'react';
import { Link } from 'react-router-dom';

function PricingHomeThree({ className }) {
    return (
        <>
          <section className={`pricing-section-two ${className || ''}`}>
            <div className="bg bg-pattern-4"></div>
            <div className="icon-solar-5"></div>
            <div className="auto-container">
              <div className="row">
        
                <div className="content-column col-lg-4 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="sec-title">
                      <div className="sub-title-outer">
                        <span className="sub-title">Pricing & Plans</span>
                        <span className="divider"></span>
                      </div>
                      <h2 className="letters-slide-up text-split">Effective & <br/> affordable plans</h2>
                    </div>
                    <ul className="list-style-four">
                      <li><i className="fa fa-check-circle"></i> Get Right Eco Nurture Power</li>
                      <li><i className="fa fa-check-circle"></i> Expert Technical Support Members</li>
                    </ul>
                    <div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</div>
                  </div>
                </div>
        
                <div className="pricing-block-two col-lg-4 col-md-6 col-sm-12 wow flipInY" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <h4 className="title">Basic Plan</h4>
                    <div className="price"><sup>$</sup>49.00 <span>per month</span></div>
                    <div className="icon"><img src="../../assets/images/resource/price2-1.png" alt="Icon"/></div>
                    <ul className="features-list">
                      <li><i className="fa fa-check-circle"></i>1 Installation</li>
                      <li><i className="fa fa-check-circle"></i>Wind Generators</li>
                      <li><i className="fa fa-check-circle"></i>Real Solar PV Systems</li>
                      <li><i className="fa fa-check-circle"></i>100% Energy Saver</li>
                      <li><i className="fa fa-check-circle"></i>Technical team of enthusiastic</li>
                    </ul>
                    <Link to="/pricing" className="theme-btn btn-style-one"><span className="btn-title">Select now</span></Link>
                  </div>
                </div>
        
                <div className="pricing-block-two col-lg-4 col-md-6 col-sm-12 wow flipInY" data-wow-delay="300ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <h4 className="title">Standard Plan</h4>
                    <div className="price"><sup>$</sup>99.00 <span>per month</span></div>
                    <div className="icon"><img src="../../assets/images/resource/price2-2.png" alt="Icon"/></div>
                    <ul className="features-list">
                      <li><i className="fa fa-check-circle"></i>1 Installation</li>
                      <li><i className="fa fa-check-circle"></i>Wind Generators</li>
                      <li><i className="fa fa-check-circle"></i>Real Solar PV Systems</li>
                      <li><i className="fa fa-check-circle"></i>100% Energy Saver</li>
                      <li><i className="fa fa-check-circle"></i>Technical team of enthusiastic</li>
                    </ul>
                    <Link to="/pricing" className="theme-btn btn-style-one"><span className="btn-title">Select now</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    );
}

export default PricingHomeThree;
