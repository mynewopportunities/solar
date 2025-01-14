import React, { useState } from 'react';
import ProgressBar2 from '../../lib/ProgressBar2';

function TabHomeThree({ className }) {
    const [activeIndex, setActiveIndex] = useState(1);
  
    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <>
            <section className={`about-section-five pt-0 ${className || ''}`}>
                <div className="bg bg-image" style={{ backgroundImage: 'url(../../assets/images/background/10.jpg)' }}></div>
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="row">
                
                            <div className="content-column col-lg-6 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
                                <div className="inner-column">
                                    <div className="sec-title light">
                                        <div className="sub-title-outer">
                                            <span className="sub-title">Innovation</span>
                                            <span className="divider"></span>
                                        </div>
                                        <h2 className="letters-slide-up text-split">A global leader <br/> in solar installation</h2>
                                    </div>
                                    <div className="team-details__bottom-right ms-0">
                                        <div className="team-details__progress home-style home2">
                                            <ProgressBar2 title="Installation" targetPercentage={90} />
                                            <ProgressBar2 title="Service" targetPercentage={80} />
                                            <ProgressBar2 title="Maintainence" targetPercentage={70} />
                                        </div>
                                    </div>
                    
                                </div>
                            </div>
                    
                            <div className="tabs-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                    
                                    <div className="text">A leading voice in low-income solar policy and the nation’s largest nonprofit solar installer, serving families throughout California</div>
                                    
                                    <div className="about-tabs tabs-box">
                                        <div className="btn-box">
                                        <ul className="tab-btns tab-buttons">
                                            <li className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)} data-tab="#tab1">Mission</li>
                                            <li className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)} data-tab="#tab2">Values</li>
                                            <li className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)} data-tab="#tab3">Philiosophy</li>
                                        </ul>
                                        </div>
                                
                                        <div className="tabs-content">
                                            <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                                <div className="inner-box">
                                                <figure className="image"><img src="../../assets/images/resource/about5-1.jpg" alt="Image"/></figure>
                                                <div className="content-box">
                                                    <div className="text two">Voice in low-income solar policy and the nation’s largest nonprofit solar installer,</div>
                                                    <div className="text">A leading voice in low-income solar policy and the nation’s largest nonprofit solar installer, serving families  throughout California</div>
                                                </div>
                                                </div>
                                            </div>
                            
                                            <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
                                                <div className="inner-box">
                                                <figure className="image"><img src="../../assets/images/resource/about5-1.jpg" alt="Image"/></figure>
                                                <div className="content-box">
                                                    <div className="text two">Voice in low-income solar policy and the nation’s largest nonprofit installer,</div>
                                                    <div className="text">A leading voice in low-income solar policy and the nation’s largest nonprofit solar installer, serving families  throughout California</div>
                                                </div>
                                                </div>
                                            </div>
                            
                                            <div className={activeIndex === 3 ? "tab active-tab" : "tab"}>
                                                <div className="inner-box">
                                                <figure className="image"><img src="../../assets/images/resource/about5-1.jpg" alt="Image"/></figure>
                                                <div className="content-box">
                                                    <div className="text two">Voice in low-income solar policy and the nation’s largest nonprofit solar,</div>
                                                    <div className="text">A leading voice in low-income solar policy and the nation’s largest nonprofit solar installer, serving families  throughout California</div>
                                                </div>
                                                </div>
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

export default TabHomeThree;
