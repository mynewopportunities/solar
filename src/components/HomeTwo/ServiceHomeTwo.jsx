import React from 'react';
import { Link } from 'react-router-dom';
const data = [
{
    Img:"service2-1.jpg",
    title:"Uitility Solutions",
    description:"With over four decades of experience providing solutions to large-scale.",
    Count: "01",
    icon: "icon flaticon-solar-panel-6"
},
{
  Img:"service2-2.jpg",
  title:"I Solutions",
  description:"With over four decades of experience providing solutions to large-scale.",
  Count: "02",
  icon: "icon flaticon-solar-panels"
},
{
  Img:"service2-3.jpg",
  title:"Residential Solutions",
  description:"With over four decades of experience providing solutions to large-scale.",
  Count: "03",
  icon: "icon flaticon-solar-energy-1"
}
];

function ServiceHomeTwo({ className }) {
    return (
        <>
            <section className={`services-section-two pb-0 ${className || ''}`}>
                <div className="bg bg-image" style={{ backgroundImage: 'url(../../assets/images/background/1.jpg)' }}></div>
                <div className="auto-container">
                    <div className="sec-title text-center">
                    <div className="sub-title-outer">
                        <span className="sub-title">What we do</span>
                        <span className="divider"></span>
                    </div>
                    <h2 className="letters-slide-up text-split">Solar Installation service</h2>
                    </div>
                    <div className="row">
                    {data.map((item, i) => ( 
                    <div key={i} className="service-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><Link to="/service-details"><img src={`../../assets/images/resource/${item.Img}`} alt="Image"/></Link></figure>
                        </div>
                        <div className="content-box">
                            <div className="icon-border-2"></div>
                            <div className="icon-border-3"></div>
                            <i className={item.icon}></i>
                            <div className="content">
                            <h4 className="title"><Link to="/service-details">{item.title}</Link></h4>
                            <div className="text">{item.description}</div>
                            </div>
                            <div className="count">{item.Count}</div>
                        </div>
                        </div>
                    </div>
                    ))}
                    </div>
                    <div className="bottom-text text-center">
                    <div className="text">See more electric services click the button <Link to="/services">View More Service</Link></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServiceHomeTwo;
