import React, { useState } from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import PageTitle from '../PageTitle.jsx';
import AboutHomeTwo from '../HomeTwo/AboutHomeTwo';
import ServiceHomeTwo from '../HomeTwo/ServiceHomeTwo.jsx';
import WhyChooseUsHomeTwo from '../HomeTwo/WhyChooseUsHomeTwo.jsx';
import FunfactHomeTwo from '../HomeTwo/FunfactHomeTwo.jsx';

function AboutUs() {

    return (
        <>
        <HomeThreeHeader />
            <PageTitle
                title="About Us"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/about', title: 'About us' },
                ]}
            />
            <AboutHomeTwo className="pt-120" />
            <ServiceHomeTwo />
            <WhyChooseUsHomeTwo />
            <FunfactHomeTwo />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default AboutUs;
