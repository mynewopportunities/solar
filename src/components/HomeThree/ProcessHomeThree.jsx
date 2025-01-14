import React from 'react';
import { Link } from 'react-router-dom';

function ProcessHomeThree({ className }) {
    return (
        <>
            <section className={`process-section pt-0 ${className || ''}`}>
                <div className="icon-solar-3 bounce-x"></div>
                <div className="icon-bulb-7 bounce-x"></div>
                <div className="auto-container">
                    <div className="sec-title text-center">
                    <div className="sub-title-outer">
                        <span className="sub-title">Process</span>
                        <span className="divider"></span>
                    </div>
                    <h2 className="letters-slide-up text-split">Success stories from clients</h2>
                    </div>
                    <div className="outer-box">
                        <div className="row">
                    
                            <div className="process-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <i className="icon flaticon-solar-house-1"></i>
                                        <span className="count">01</span>
                                    </div>
                                    <div className="content-box">
                                        <h5 className="title"><Link to="/pricing">Choose Pricing</Link></h5 >
                                        <div className="text">A leading voice in low-income solar policy and the nation’s largest nonprofit solar installer</div>
                                    </div>
                                </div>
                            </div>
                    
                            <div className="process-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <i className="icon flaticon-solar-panel-6"></i>
                                        <span className="count">02</span>
                                    </div>
                                    <div className="content-box">
                                        <h5 className="title"><Link to="/about">Setup Solar</Link></h5>
                                        <div className="text">A leading voice in low-income solar policy and the nation’s largest nonprofit solar installer</div>
                                    </div>
                                </div>
                            </div>
                    
                            <div className="process-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <i className="icon flaticon-solar-energy-1"></i>
                                        <span className="count">03</span>
                                    </div>
                                    <div className="content-box">
                                        <h5 className="title"><Link to="/about">Enjoy Power</Link></h5>
                                        <div className="text">A leading voice in low-income solar policy and the nation’s largest nonprofit solar installer</div>
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

export default ProcessHomeThree;
