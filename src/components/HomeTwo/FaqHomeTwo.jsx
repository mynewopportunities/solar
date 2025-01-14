import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FaqHomeTwo({ className }) {
  const [isActive, setIsActive] = useState({
      status: false,
      key: 1,
  })

  const handleClick = (key) => {
      if (isActive.key === key) {
          setIsActive({
              status: false,
          })
      } else {
          setIsActive({
              status: true,
              key,
          })
      }
  }
    return (
        <>
          <section className={`faq-section-two pt-0 ${className || ''}`}>
            <div className="icon-turbines-8"></div>
            <div className="auto-container">
              <div className="outer-box">
                <div className="row g-0">
        
                  <div className="faq-column col-xl-6 col-lg-7 col-md-12 col-sm-12 wow fadeInLeft" data-wow-delay="300ms">
                    <div className="inner-column">
                      <div className="icon-dots"></div>
                      <div className="sec-title">
                        <div className="sub-title-outer">
                          <span className="sub-title">Faq's</span>
                          <span className="divider"></span>
                        </div>
                        <h2 className="letters-slide-up text-split">Asked Questions</h2>
                      </div>
        
                      <ul className="accordion-box">
                        <li className="accordion block">
                          <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
                            What is solar system  ?
                            <i className="icon fal fa-plus"></i>
                          </div>
                          <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                              <div className="text">With over four decades of experience providing <br/> solutions to large-scale enterprises throughout the globe.</div>
                            </div>
                          </div>
                        </li>
        
                        <li className="accordion block">
                          <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
                            Can i get refund  ?
                            <i className="icon fal fa-plus"></i>
                          </div>
                          <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                              <div className="text">With over four decades of experience providing <br/> solutions to large-scale enterprises throughout the globe.</div>
                            </div>
                          </div>
                        </li>
        
                        <li className="accordion block">
                          <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
                            Whic solar is best ?
                            <i className="icon fal fa-plus"></i>
                          </div>
                          <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                              <div className="text">With over four decades of experience providing <br/> solutions to large-scale enterprises throughout the globe.</div>
                            </div>
                          </div>
                        </li>
        
                        <li className="accordion block">
                          <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
                            Duration of installation time  ?
                            <i className="icon fal fa-plus"></i>
                          </div>
                          <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                              <div className="text">With over four decades of experience providing <br/> solutions to large-scale enterprises throughout the globe.</div>
                            </div>
                          </div>
                        </li>
                      </ul>
        
                      <Link to="tel:01061245741" className="info-btn-two">
                        <i className="icon fal fa-phone"></i>
                        <small>Have any question? Give us a call</small>
                        <strong>+92 666 888 0000</strong>
                      </Link>
                    </div>
                  </div>
        
                  <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="bg bg-image" style={{ backgroundImage: 'url(../../assets/images/background/12.jpg)' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    );
}

export default FaqHomeTwo;
