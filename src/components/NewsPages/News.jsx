import React from 'react';
import { Link } from 'react-router-dom';

function NewsGrid() {
  return (
    <>
    {/*  News Section */}
  <section className="news-section-two">
    <div className="icon-solar"></div>
    <div className="icon-solar-5"></div>
    <div className="auto-container">
      <div className="row"> 
        {/* News Block */}
        <div className="news-block-two col-lg-4 col-md-6 wow fadeInUp">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link to="/news-details"><img src="../../assets/images/resource/news2-1.jpg" alt="Image"/></Link></figure>
              <span className="date"><strong>25 Jun , 2023</strong></span>
            </div>
            <div className="content-box">
              <ul className="post-meta">
                <li><i className="fal fa-user"></i>Admin</li>
                <li><i className="fa fa-comment"></i>0 Comments</li>
              </ul>
              <h5 className="title"><Link to="/news-details">Women + Nonbinary Crew <br/>Compete at 2023 Solar.</Link></h5>
              <Link to="/news-details" className="read-more">Read Full <i className="icon icon-sm-arrow-2"></i></Link>
            </div>
          </div>
        </div>
        {/* News Block */}
        <div className="news-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link to="/news-details"><img src="../../assets/images/resource/news2-2.jpg" alt="Image"/></Link></figure>
              <span className="date"><strong>25 Jun , 2023</strong></span>
            </div>
            <div className="content-box">
              <ul className="post-meta">
                <li><i className="fal fa-user"></i>Admin</li>
                <li><i className="fa fa-comment"></i>0 Comments</li>
              </ul>
              <h5 className="title"><Link to="/news-details">Women + Nonbinary Crew <br/>Compete at 2023 Solar.</Link></h5>
              <Link to="/news-details" className="read-more">Read Full <i className="icon icon-sm-arrow-2"></i></Link>
            </div>
          </div>
        </div>
        {/* News Block */}
        <div className="news-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link to="/news-details"><img src="../../assets/images/resource/news2-3.jpg" alt="Image"/></Link></figure>
              <span className="date"><strong>25 Jun , 2023</strong></span>
            </div>
            <div className="content-box">
              <ul className="post-meta">
                <li><i className="fal fa-user"></i>Admin</li>
                <li><i className="fa fa-comment"></i>0 Comments</li>
              </ul>
              <h5 className="title"><Link to="/news-details">Women + Nonbinary Crew <br/>Compete at 2023 Solar.</Link></h5>
              <Link to="/news-details" className="read-more">Read Full <i className="icon icon-sm-arrow-2"></i></Link>
            </div>
          </div>
        </div>
        {/* News Block */}
        <div className="news-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link to="/news-details"><img src="../../assets/images/resource/news2-2.jpg" alt="Image"/></Link></figure>
              <span className="date"><strong>25 Jun , 2023</strong></span>
            </div>
            <div className="content-box">
              <ul className="post-meta">
                <li><i className="fal fa-user"></i>Admin</li>
                <li><i className="fa fa-comment"></i>0 Comments</li>
              </ul>
              <h5 className="title"><Link to="/news-details">Women + Nonbinary Crew <br/>Compete at 2023 Solar.</Link></h5>
              <Link to="/news-details" className="read-more">Read Full <i className="icon icon-sm-arrow-2"></i></Link>
            </div>
          </div>
        </div>
        {/* News Block */}
        <div className="news-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link to="/news-details"><img src="../../assets/images/resource/news2-3.jpg" alt="Image"/></Link></figure>
              <span className="date"><strong>25 Jun , 2023</strong></span>
            </div>
            <div className="content-box">
              <ul className="post-meta">
                <li><i className="fal fa-user"></i>Admin</li>
                <li><i className="fa fa-comment"></i>0 Comments</li>
              </ul>
              <h5 className="title"><Link to="/news-details">Women + Nonbinary Crew <br/>Compete at 2023 Solar.</Link></h5>
              <Link to="/news-details" className="read-more">Read Full <i className="icon icon-sm-arrow-2"></i></Link>
            </div>
          </div>
        </div>
        {/* News Block */}
        <div className="news-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link to="/news-details"><img src="../../assets/images/resource/news2-1.jpg" alt="Image"/></Link></figure>
              <span className="date"><strong>25 Jun , 2023</strong></span>
            </div>
            <div className="content-box">
              <ul className="post-meta">
                <li><i className="fal fa-user"></i>Admin</li>
                <li><i className="fa fa-comment"></i>0 Comments</li>
              </ul>
              <h5 className="title"><Link to="/news-details">Women + Nonbinary Crew <br/>Compete at 2023 Solar.</Link></h5>
              <Link to="/news-details" className="read-more">Read Full <i className="icon icon-sm-arrow-2"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    {/* End News Section */}
    </>
  );
}

export default NewsGrid;