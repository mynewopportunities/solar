import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import PageTitle from '../PageTitle.jsx';
import Services from './Services.jsx';

function ServicesPages() {

    return (
        <>
            <HomeThreeHeader />
            <PageTitle
                title="Services"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/services', title: 'Services' },
                ]}
            />
            <Services />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default ServicesPages;
