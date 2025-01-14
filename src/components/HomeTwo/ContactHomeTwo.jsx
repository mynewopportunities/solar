import React from 'react';
import ReactSlider from 'react-slider';


function ContactHomeTwo({ className }) {
    return (
        <>
            <section className={`why-choose-us-two pt-0 ${className || ''}`}>
          <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/8.jpg)' }}></div>
          <div className="icon-bulb-3 bounce-y"></div>
          <div className="auto-container">
            <div className="outer-box">
              <div className="row g-0">
      
                <div className="content-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                  <div className="inner-column">
                    <div className="sec-title">
                      <div className="sub-title-outer">
                        <span className="sub-title">why choose us</span>
                        <span className="divider"></span>
                      </div>
                      <h2 className="letters-slide-up text-split">We Create Opportunity to Reach Potential</h2>
                    </div>
                    
                    <div className="choose-block">
                      <div className="inner-box">
                        <i className="icon flaticon-solar-panels"></i>
                        <div className="content">
                          <h4 className="title">Safety and Reliability</h4>
                          <div className="text">Aenean placerat ut lacus nec pulvinar. Donec eu leo, <br/> ante at, commodo diam</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="choose-block">
                      <div className="inner-box">
                        <i className="icon flaticon-green-energy"></i>
                        <div className="content">
                          <h4 className="title">Best Energy Solutions</h4>
                          <div className="text">Aenean placerat ut lacus nec pulvinar. Donec eu leo, <br/> ante at, commodo diam</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="form-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="contact-form-two wow fadeInRight" data-wow-delay="300ms">
                      <form method="post" action="get" id="contact-form">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <label>Your Name:</label>
                            <input type="text" name="full_name" required/>
                          </div>
      
                          <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <label>Your Email:</label>
                            <input type="email" name="Email" required/>
                          </div>
      
                          <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <label>Phone No:</label>
                            <input type="tel" name="Phone" required/>
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
                  
                          <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <label>Panel type:</label>
                            <select className="custom-select">
                              <option value="">Select</option>
                              <option value="">Air Freight</option>
                              <option value="">Ocean Freight</option>
                              <option value="">Rail transport</option>
                              <option value="">Cargo ship</option>
                              <option value="">Bulk cargo</option>
                            </select>
                          </div>
                    
                          <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <label>Capacity (VA):</label>
                            <select className="custom-select">
                              <option value="">Select</option>
                              <option value="">Door to Door</option>
                              <option value="">International shipping</option>
                              <option value="">Multi Modal</option>
                            </select>
                          </div>
                    
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <button className="theme-btn btn-style-one dark-bg" type="submit" name="submit-form"><span className="btn-title">Submit Request<i className="icon icon-sm-arrow"></i></span></button>
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

export default ContactHomeTwo;
