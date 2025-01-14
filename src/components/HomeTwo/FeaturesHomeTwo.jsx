import React from 'react';
import { Link } from 'react-router-dom';

function FeaturesHomeTwo({ className }) {
    return (
        <>
            <section className={`features-section-three pull-up pt-0 ${className || ''}`}>
                <div className="auto-container">
                    <div className="row">
            
                    <div className="feature-block-three col-lg-4 col-md-4 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                        <div className="icon-box"><i className="icon flaticon-solar-panels"></i></div>
                        <div className="content">
                            <h6 className="title"><Link to="/services">100% Solar Solution</Link></h6>
                            <div className="text">A leading voice in low-income</div>
                        </div>
                        </div>
                    </div>
            
                    <div className="feature-block-three col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                        <div className="icon-box"><i className="icon flaticon-solar-panel-6"></i></div>
                        <div className="content">
                            <h6 className="title"><Link to="/services">Global Expertise</Link></h6>
                            <div className="text">A leading voice in low-income</div>
                        </div>
                        </div>
                    </div>
            
                    <div className="feature-block-three col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                        <div className="icon-box"><i className="icon flaticon-solar-energy-1"></i></div>
                        <div className="content">
                            <h6 className="title"><Link to="/services">End to End Solution</Link></h6>
                            <div className="text">A leading voice in low-income</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FeaturesHomeTwo;
