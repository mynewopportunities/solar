import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import PageTitle from '../PageTitle.jsx';
import Team from './Team.jsx';

function TeamGrid() {

    return (
        <>
        <HomeThreeHeader />
            <PageTitle
                title="Team Grid"
                breadcrumb={[
                    { link: '', title: 'Home' },
                    { link: '/team', title: 'Team Grid' },
                ]}
            />
            <Team />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default TeamGrid;
