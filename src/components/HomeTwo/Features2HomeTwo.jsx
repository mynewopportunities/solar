import React from 'react';

function Features2HomeTwo({ className }) {
    return (
        <>
            <section className={`features-section-four ${className || ''}`}>
                <div className="icon-solar-2"></div>
                <div className="auto-container">
                    <div className="sec-title text-center">
                    <div className="sub-title-outer">
                        <span className="sub-title">Features</span>
                        <span className="divider"></span>
                    </div>
                    <h2 className="letters-slide-up text-split">Best energy solution</h2>
                    </div>
                    <div className="outer-box">
                        <div className="row">
                
                            <div className="content-column col-xl-4 col-lg-4 col-md-12">
                                <div className="inner-column wow fadeInLeft">
                                    
                                    <div className="info-box">
                                        <i className="icon flaticon-solar-panels"></i>
                                        <h6 className="title">Sustainable</h6>
                                        <div className="text">A leading voice in low-income solar policy and the nation’s largest</div>
                                    </div>
                    
                                    <div className="info-box">
                                        <i className="icon flaticon-solar-energy"></i>
                                        <h6 className="title">Reasonable</h6>
                                        <div className="text">A leading voice in low-income solar policy and the nation’s largest</div>
                                    </div>
                    
                                    <div className="info-box">
                                        <i className="icon flaticon-solar-energy-1"></i>
                                        <h6 className="title">Gurantee Setup</h6>
                                        <div className="text">A leading voice in low-income solar policy and the nation’s largest</div>
                                    </div>
                                </div>
                            </div>
                
                            <div className="image-column col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="image-box">
                                    <figure className="image wow zoomIn"><img src="../assets/images/resource/feature3-1.png" alt="Image"/></figure>
                                    <div className="icon-arrow"></div>
                                    </div>
                                </div>
                            </div>
                
                            <div className="feature-column col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="row">
                    
                                        <div className="feature-block-four col-lg-6 col-md-6 col-sm-6 wow fadeInUp">
                                            <div className="inner-box">
                                            <i className="icon flaticon-solar-energy"></i>
                                            <h6 className="title">The one-stop smart solar</h6>
                                            </div>
                                        </div>
                        
                                        <div className="feature-block-four col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                                            <div className="inner-box">
                                            <i className="icon flaticon-solar-panel-1"></i>
                                            <h6 className="title">Optimized design</h6>
                                            </div>
                                        </div>
                        
                                        <div className="feature-block-four col-lg-6 col-md-6 col-sm-6 wow fadeInUp">
                                            <div className="inner-box">
                                            <i className="icon flaticon-solar-panel-6"></i>
                                            <h6 className="title">Boost <br/> efficiency</h6>
                                            </div>
                                        </div>
                        
                                        <div className="feature-block-four col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                                            <div className="inner-box">
                                            <i className="icon flaticon-solar-energy-1"></i>
                                            <h6 className="title">No hidden Charge</h6>
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

export default Features2HomeTwo;
