import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import ZeroHomeThree from './ZeroHomeThree.jsx';
import HomeThreeHeader from './HomeThreeHeader.jsx';
import FunfactHomeThree from './FunfactHomeThree.jsx';
import AboutHomeThree from './AboutHomeThree.jsx';
import ServiceHomeThree from './ServiceHomeThree.jsx';
import TabHomeThree from './TabHomeThree.jsx';
import ProjectHomeThree from './ProjectHomeThree.jsx';
import TestimonialHomeThree from './TestimonialHomeThree.jsx';
import PricingHomeThree from './PricingHomeThree.jsx';
import ProcessHomeThree from './ProcessHomeThree.jsx';
import ContactHomeThree from './ContactHomeThree.jsx';
import ClientsHomeOne from '../HomeOne/ClientsHomeOne.jsx';
import BlogHomeOne from '../HomeOne/BlogHomeOne.jsx';

function HomeThree() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>            
            <HomeThreeHeader action={drawerAction.toggle} />
            <ZeroHomeThree />
            <FunfactHomeThree />
            <AboutHomeThree />
            <ServiceHomeThree />
            <TabHomeThree />
            <PricingHomeThree />
            <ProcessHomeThree />
            <ProjectHomeThree />
            <ContactHomeThree />
            <TestimonialHomeThree />
            <BlogHomeOne className="pt-120" />
            <ClientsHomeOne />
            <FooterHomeOne /> 
            <BackToTop />
        </>
    );
}

export default HomeThree;
