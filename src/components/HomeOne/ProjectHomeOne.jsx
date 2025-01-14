import React from 'react';
import { Link } from 'react-router-dom';

function ProjectHomeOne({ className }) {
    return (
        <>
        <section className={`project-section-four ${className || ''}`}>
          <div className="icon-dots-3"></div>
          <div className="auto-container">
            <div className="sec-title text-center">
              <div className="sub-title-outer">
                <span className="sub-title">Successful Installations</span>
                <span className="divider"></span>
              </div>
              <h2 className="letters-slide-up text-split">A track record that speaks <br/>for itself</h2>
            </div>
            <div className="outer-box">
              <div className="project-block-four">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link to="/project-details"><img src="../assets/images/resource/project1-1.jpg" alt="Image"/></Link></figure>
                  </div>
                  <div className="content-box">
                    <span className="float-text">Solar</span>
                    <span className="cat">echanix inc ltd</span>
                    <h4 className="title"><Link to="/project-details">Power project</Link></h4>
                    <Link to="/project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
                  </div>
                  <div className="content-box-hover">
                    <h4 className="title"><Link to="/project-details">Power project</Link></h4>
                  </div>
                  <div className="overlay-1"></div>
                </div>
              </div>
        
              <div className="project-block-four">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link to="/project-details"><img src="../assets/images/resource/project1-2.jpg" alt="Image"/></Link></figure>
                  </div>
                  <div className="content-box">
                    <span className="float-text">Solar</span>
                    <span className="cat">echanix inc ltd</span>
                    <h4 className="title"><Link to="/project-details">Solar Panel</Link></h4>
                    <Link to="/project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
                  </div>
                  <div className="content-box-hover">
                    <h4 className="title"><Link to="/project-details">Solar Panel</Link></h4>
                  </div>
                  <div className="overlay-1"></div>
                </div>
              </div>
        
              <div className="project-block-four active">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link to="/project-details"><img src="../assets/images/resource/project1-3.jpg" alt="Image"/></Link></figure>
                  </div>
                  <div className="content-box">
                    <span className="float-text">Solar</span>
                    <span className="cat">echanix inc ltd</span>
                    <h4 className="title"><Link to="/project-details">Utility Project</Link></h4>
                    <Link to="/project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
                  </div>
                  <div className="content-box-hover">
                    <h4 className="title"><Link to="/project-details">Utility Project</Link></h4>
                  </div>
                  <div className="overlay-1"></div>
                </div>
              </div>
        
              <div className="project-block-four">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link to="/project-details"><img src="../assets/images/resource/project1-4.jpg" alt="Image"/></Link></figure>
                  </div>
                  <div className="content-box">
                    <span className="float-text">Solar</span>
                    <span className="cat">echanix inc ltd</span>
                    <h4 className="title"><Link to="/project-details">Power project</Link></h4>
                    <Link to="/project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
                  </div>
                  <div className="content-box-hover">
                    <h4 className="title"><Link to="/project-details">Power project</Link></h4>
                  </div>
                  <div className="overlay-1"></div>
                </div>
              </div>
        
              <div className="project-block-four">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link to="/project-details"><img src="../assets/images/resource/project1-5.jpg" alt="Image"/></Link></figure>
                  </div>
                  <div className="content-box">
                    <span className="float-text">Solar</span>
                    <span className="cat">echanix inc ltd</span>
                    <h4 className="title"><Link to="/project-details">Power project</Link></h4>
                    <Link to="/project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
                  </div>
                  <div className="content-box-hover">
                    <h4 className="title"><Link to="/project-details">Power project</Link></h4>
                  </div>
                  <div className="overlay-1"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
}

export default ProjectHomeOne;
