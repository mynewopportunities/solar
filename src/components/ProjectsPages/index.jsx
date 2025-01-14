import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import PageTitle from '../PageTitle.jsx';
import Projects from './Projects.jsx';

function ProjectsPages() {

    return (
        <>
            <HomeThreeHeader />
            <PageTitle
                title="Projects"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/projects', title: 'Projects' },
                ]}
            />
            <Projects />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default ProjectsPages;
