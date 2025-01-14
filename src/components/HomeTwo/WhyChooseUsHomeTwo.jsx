import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import ProgressBar2 from '../../lib/ProgressBar2';


function WhyChooseUsHomeTwo({ className }) {
  const [isOpen, setOpen] = useState(false)
    return (		
        <>
        <section className={`why-choose-us ${className || ''}`}>
          <div className="bg bg-image" style={{ backgroundImage: 'url(../../assets/images/background/2.jpg)' }}></div>
          <div className="bg bg-shapes"></div>
          <div className="auto-container">
            <div className="row">
      
              <div className="content-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                <div className="inner-column">
                  <div className="sec-title light">
                    <div className="sub-title-outer">
                      <span className="sub-title">Innovation</span>
                      <span className="divider"></span>
                    </div>
                    <h2 className="letters-slide-up text-split">A global leader <br/> in solar installation</h2>
                    <div className="text">With over four decades of experience providing solutions to large-scale enterprises throughout the globe,.</div>
                  </div>
                  <div className="team-details__bottom-right ms-0">
                    <div className="team-details__progress home-style home2">
                      <ProgressBar2 title="Installation" targetPercentage={90} />
                      <ProgressBar2 title="Service" targetPercentage={80} />
                      <ProgressBar2 title="Maintainence" targetPercentage={70} />
                    </div>
                  </div>
      
                  <Link to="tel:01061245741" className="info-btn-three light">
                    <i className="icon flaticon-customer-service"></i>
                    <small>Call us for any inquiry</small>
                    <strong>(010) 612 45 741</strong>
                  </Link>
                </div>
              </div>
      
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <figure className="image overlay-anim bg-parallax" style={{ backgroundImage: 'url(../../assets/images/resource/choose2-1.jpg)' }}><img src="../assets/images/resource/choose2-1.jpg" alt="image"/></figure>
                  <div className="video-box">
                    <div className="btn-box">
                      <a onClick={() => setOpen(true)} className="play-now"><i className="icon fa fa-play" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </section>
		</>
    );
}

export default WhyChooseUsHomeTwo;