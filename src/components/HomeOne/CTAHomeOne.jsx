import React from 'react';
import { Link } from 'react-router-dom';


function CTAHomeOne({ className }) {
    return (		
        <>
        <section className={`call-to-action pull-down ${className || ''}`}>
          <div className="bg bg-image" style={{ backgroundImage: 'url(../assets/images/background/4.jpg)' }}></div>
          <div className="bg bg-shapes-3"></div>
          <div className="auto-container">
            <div className="row">
      
              <div className="image-column col-xl-8 col-lg-8 col-md-12 col-sm-12">
                <div className="inner-column">
                  <figure className="image wow zoomIn"><img src="../assets/images/resource/cta1-1.png" alt="Image"/></figure>
                  <figure className="image-2 wow zoomIn bounce-x"><img src="../assets/images/resource/cta1-2.png" alt="Image"/></figure>
                  <div className="info-box wow fadeInUp">
                    <h2 className="count">235,099 <span>KWH</span></h2>
                    <div className="text">Of clean energy 2020-2023 Year</div>
                  </div>
                </div>
              </div>
      
              <div className="content-column col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
                <div className="inner-column">
                  <div className="contact-info-block">
                    <figure className="image"><img src="../assets/images/resource/cta1-3.jpg" alt="Image"/></figure>
                    <div className="contact">
                      <h2 className="text">Call us for any inquiry</h2>
                      <Link href="01061245741" className="number">(010) 612 45 741</Link>
                      <i className="icon flaticon-customer-service"></i>
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

export default CTAHomeOne;