import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from './FooterHomeOne.jsx';
import ZeroHomeOne from './ZeroHomeOne.jsx';
import AboutHomeOne from './AboutHomeOne.jsx';
import ServiceHomeOne from './ServiceHomeOne.jsx';
import FeaturesHomeOne from './FeaturesHomeOne.jsx';
import MarqueeHomeOne from './MarqueeHomeOne.jsx';
import FunfactHomeOne from './FunfactHomeOne.jsx';
import About2HomeOne from './About2HomeOne.jsx';
import ProjectHomeOne from './ProjectHomeOne.jsx';
import Features2HomeOne from './Features2HomeOne.jsx';
// import ProcessHomeOne from './ProcessHomeOne.jsx';
import CTAHomeOne from './CTAHomeOne.jsx';
// import FaqHomeOne from './FaqHomeOne.jsx';
import TestimonialHomeOne from './TestimonialHomeOne.jsx';
import ContactHomeOne from './ContactHomeOne.jsx';
import BlogHomeOne from './BlogHomeOne.jsx';
import ClientsHomeOne from './ClientsHomeOne.jsx';
import HomeOneHeader from './HomeOneHeader.jsx';

function HomeOne() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            
            <HomeOneHeader action={drawerAction.toggle} />
            <ZeroHomeOne />
            <FeaturesHomeOne />
            <AboutHomeOne />
            <MarqueeHomeOne />
            <FunfactHomeOne />
            <ServiceHomeOne />
            <About2HomeOne />
            <ProjectHomeOne />
            <Features2HomeOne />
            <TestimonialHomeOne />
            <CTAHomeOne />
            <ContactHomeOne />
            <BlogHomeOne />
            <ClientsHomeOne />
            {/*<ProcessHomeOne />
            <FaqHomeOne /> */}
            <FooterHomeOne /> 
            <BackToTop />
        </>
    );
}

export default HomeOne;
