import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import PageTitle from '../PageTitle.jsx';
import Products from './Products.jsx';

function ShopPages() {

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
            <Products />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default ShopPages;
