import React, { useState } from 'react';
import ReactSlider from 'react-slider';

function ContactHomeOne({ className }) {
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
        <section className={`faq-section pt-0 ${className || ''}`}>
          <div className="anim-icons">
            <div className="icon-bulb-2 bounce-y"></div>
            <div className="icon-solar-6"></div>
          </div>
          <div className="auto-container">
            <div className="outer-box">
              <div className="row g-0">
      
                <div className="faq-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
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
                  </div>
                </div>
      
                <div className="form-column col-lg-6 col-md-12 col-sm-12">
                  <div className="bg bg-image" style={{ backgroundImage: 'url(../../assets/images/background/5.jpg)' }}></div>
                  <div className="inner-column">
                    <div className="contact-form style-two wow fadeIn" data-wow-delay="300ms">
                      <form method="post" action="get" id="contact-form">
                        <h3 className="title text-center">Request A Quote</h3>
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <input type="text" name="full_name" placeholder="Your Name" required/>
                          </div>
      
                          <div className="col-lg-12 col-md-6 col-sm-12 form-group">
                            <input type="email" name="Email" placeholder="Your Email" required/>
                          </div>
      
                          <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <input type="tel" name="Phone" placeholder="Phone" required/>
                          </div>
      
                          <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                            <input type="text" name="subject" placeholder="Subject" required/>
                          </div>
      
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <label className="range-title">Number of Panels:</label>
                            <div className="range-slider-one mt-3">
                              <ReactSlider
                                  className="horizontal-slider form-group mb-4"
                                  thumbClassName="example-thumb"
                                  trackClassName="example-track"
                                  defaultValue={[0, 35, 100]}
                                  ariaLabel={['Leftmost thumb', 'Middle thumb', 'Rightmost thumb']}
                                  ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                  renderThumb={(props, state) => <span {...props}>{state.valueNow}</span>}
                                  pearling
                                  minDistance={1}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <textarea name="message" placeholder="Your Message"></textarea>
                          </div>
                    
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <button className="theme-btn btn-style-one dark-bg hover-one" type="submit" name="submit-form"><span className="btn-title">Submit Request<i className="icon icon-sm-arrow"></i></span></button>
                          </div>
                    
                        </div>
                      </form>
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

export default ContactHomeOne;
