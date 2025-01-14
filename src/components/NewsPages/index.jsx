import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import PageTitle from '../PageTitle.jsx';
import News from './News.jsx';

function NewsPages() {

    return (
        <>
            <HomeThreeHeader />
            <PageTitle
                title="News Grid"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/news', title: 'News' },
                ]}
            />
            <News />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default NewsPages;
