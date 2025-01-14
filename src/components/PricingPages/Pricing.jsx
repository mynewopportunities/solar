import React from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import PageTitle from '../PageTitle.jsx';

function Pricing() {
    return (
        <>
            <HomeThreeHeader />
            <PageTitle
                title="Pricing"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/pricing', title: 'Pricing' },
                ]}
            />
			<section className="pricing-section">
			  <div className="icon-turbines-8"></div>
			  <div className="auto-container">
				<div className="row">
		  
				  <div className="pricing-block col-lg-4 col-md-6 col-sm-12 wow flipInY" data-wow-delay="0ms" data-wow-duration="1500ms">
					<div className="inner-box">
					  <h4 className="title">Standerd</h4>
					  <div className="icon">
						<img src="../../assets/images/resource/price1-1.png" alt="Icon"/>
					  </div>
					  <div className="price"><span>$</span>120<small>/ per mo</small></div>
					  <ul className="list-style">
						<li><i className="fa fa-check"></i> Free Installation</li>
						<li><i className="fa fa-check"></i> Repaire Replacement</li>
						<li><i className="fa fa-check"></i> 24/7 Full Support</li>
						<li><i className="fa fa-check"></i> maintainence</li>
					  </ul>
					  <Link to="/pricing" className="theme-btn btn-style-one"><span className="btn-title">Choose a plan <i className="icon-sm-arrow"></i></span></Link>
					</div>
				  </div>
		  
				  <div className="pricing-block tagged col-lg-4 col-md-6 col-sm-12 wow flipInY" data-wow-delay="300ms" data-wow-duration="1500ms">
					<div className="inner-box">
					  <h4 className="title">Popular <span className="badge">Best</span></h4>
					  <div className="icon">
						<img src="../../assets/images/resource/price1-2.png" alt="Icon"/>
					  </div>
					  <div className="price"><span>$</span>120<small>/ per mo</small></div>
					  <ul className="list-style">
						<li><i className="fa fa-check"></i> Free Installation</li>
						<li><i className="fa fa-check"></i> Repaire Replacement</li>
						<li><i className="fa fa-check"></i> 24/7 Full Support</li>
						<li><i className="fa fa-check"></i> maintainence</li>
					  </ul>
					  <Link to="/pricing" className="theme-btn btn-style-one"><span className="btn-title">Choose a plan <i className="icon-sm-arrow"></i></span></Link>
					</div>
				  </div>
		  
				  <div className="pricing-block col-lg-4 col-md-6 col-sm-12 wow flipInY" data-wow-delay="600ms" data-wow-duration="1500ms">
					<div className="inner-box">
					  <h4 className="title">Premium</h4>
					  <div className="icon">
						<img src="../../assets/images/resource/price1-3.png" alt="Icon"/>
					  </div>
					  <div className="price"><span>$</span>120<small>/ per mo</small></div>
					  <ul className="list-style">
						<li><i className="fa fa-check"></i> Free Installation</li>
						<li><i className="fa fa-check"></i> Repaire Replacement</li>
						<li><i className="fa fa-check"></i> 24/7 Full Support</li>
						<li><i className="fa fa-check"></i> maintainence</li>
					  </ul>
					  <Link to="/pricing" className="theme-btn btn-style-one"><span className="btn-title">Choose a plan <i className="icon-sm-arrow"></i></span></Link>
					</div>
				  </div>
				</div>
			  </div>
			</section>
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}


export default Pricing;
