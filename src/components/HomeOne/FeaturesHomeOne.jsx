import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
const Features1 = () => {
  const [isOpen, setOpen] = useState(false)
    return (
        <>
        <section className="features-section pull-up pt-0">
          <div className="auto-container">
            <div className="row g-0">

              <div className="video-column col-lg-4 col-md-12">
                <div className="video-box wow fadeInUp">
                  <figure className="image"><img src="../assets/images/resource/feature1-1.jpg" alt=""/></figure>
                  <a onClick={() => setOpen(true)} className="play-btn"><i className="icon fa fa-play" /></a>
                </div>
              </div>

              <div className="services-column col-lg-8 col-md-12">
                <div className="inner-column">

                  <div className="info-box wow fadeInUp" data-wow-delay="300ms">
                    <i className="icon flaticon-backup"></i>
                    <div className="text">From full automation to top-class tech innovation</div>
                  </div>

                  <div className="row g-0">

                    <div className="feature-block col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image"><Link to="/service-details"><img src="../assets/images/resource/feature1-2.jpg" alt=""/></Link></figure>
                          <div className="content-box">
                            <h4 className="title"><Link to="/service-details">Residential <br/>  Solutions</Link></h4>
                            <Link to="/service-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="feature-block col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image"><Link to="/service-details"><img src="../assets/images/resource/feature1-3.jpg" alt=""/></Link></figure>
                          <div className="content-box">
                            <h4 className="title"><Link to="/service-details">Commercial <br/>Solutions</Link></h4>
                            <Link to="/service-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
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
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};
export default Features1
