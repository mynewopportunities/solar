import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import PageTitle from '../PageTitle.jsx';
import PortfolioFilter1 from './PortfolioFilter1.jsx';

function Products() {
    
    return (
        <>
        <HomeThreeHeader />
        <PageTitle
        title="Shop"
        breadcrumb={[
            { link: '/', title: 'Home' },
            { link: '/products', title: 'Products' },
        ]}
     />
        <section className="featured-products">
        <span className="bg-shape"></span>
            <div className="auto-container">
                <div className="mixitup-gallery">
                        <PortfolioFilter1 />   
                </div>
            </div>
        </section>
        <FooterHomeOne />
        <BackToTop />
        </>
    );
}

export default Products;
