import React from 'react';
import { Link } from 'react-router-dom';

function ContactHomeThree({ className }) {
    return (
        <>
            <section className={`contact-section ${className || ''}`}>
              <div className="icon-bulb-3 bounce-y"></div>
              <div className="auto-container">
                <div className="outer-box">
                  <div className="row">
          
                    <div className="content-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                      <div className="inner-column">
                        <div className="icon-dots"></div>
                        <div className="sec-title">
                          <div className="sub-title-outer">
                            <span className="sub-title">we care you</span>
                            <span className="divider"></span>
                          </div>
                          <h2 className="letters-slide-up text-split">Industry leading solar system provider</h2>
                          <div className="text">A leading voice in low-income solar policy and the nation’s largest nonprofit solar installer, serving families <br/> throughout California</div>
                        </div>
                        <div className="row">
          
                          <div className="contact-block col-lg-4 col-md-4 col-sm-4">
                            <div className="inner-box">
                              <i className="icon flaticon-solar-house-1"></i>
                              <div className="content">
                                <h4 className="title">The one-stop <br/> smart solar</h4>
                              </div>
                            </div>
                          </div>
                          
                          <div className="contact-block col-lg-4 col-md-4 col-sm-4">
                            <div className="inner-box">
                              <i className="icon flaticon-solar-energy-1"></i>
                              <div className="content">
                                <h4 className="title">No Hidden <br/> Charge</h4>
                              </div>
                            </div>
                          </div>
                          
                          <div className="contact-block col-lg-4 col-md-4 col-sm-4">
                            <div className="inner-box">
                              <i className="icon flaticon-solar-panels"></i>
                              <div className="content">
                                <h4 className="title">24/7 <br/> Support</h4>
                              </div>
                            </div>
                          </div>
                        </div>
          
                        <div className="contact-info-block-two">
                          <figure className="image wow zoomIn"><img src="../../assets/images/resource/contact1-1.jpg" alt="Image"/></figure>
                          <div className="contact">
                            <h2 className="text">Call us for any inquiry</h2>
                            <Link href="tel:01061245741" className="number">(010) 612 45 741</Link>
                            <i className=" icon fal fa-phone"></i>
                          </div>
                        </div>
                      </div>
                    </div>
          
                    <div className="form-column col-lg-6 col-md-12 col-sm-12">
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

export default ContactHomeThree;
