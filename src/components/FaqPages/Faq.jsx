import React, { useState } from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import PageTitle from '../PageTitle.jsx';
function Faq() {
    const [isActive, setIsActive] = useState({
      status: false,
      key: 1,
    })
  
    const handleClick = (key) => {
      if (isActive.key === key) {
        setIsActive({
          status: false,
        })
      } else {
        setIsActive({
          status: true,
          key,
        })
      }
    }


    return (
        <>
        <HomeThreeHeader />
        <PageTitle
        title="Faq"
        breadcrumb={[
            { link: '/', title: 'Home' },
            { link: '/faq', title: 'Faq' },
        ]}
        />
        <section className="faqs-section innerpage pt-120 pb-120">
            <div className="auto-container">
                <div className="row">
                    {/* FAQ Column  */}
                    <div className="faq-column col-lg-6">
                        <div className="sec-title mb-30">
                            <h3>Research Faq</h3>
                        </div>
                        <div className="inner-column">
                            <ul className="accordion-box ms-0 wow fadeInRight">
                                {/*Block */}
                                <li className="accordion block active-block">
                                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
                                        How to get free support?
                                        <div className="icon fa fa-angle-right"></div>
                                    </div>
                                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                        <div className="content">
                                        <div className="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit.</div>
                                        </div>
                                    </div>
                                </li>
                                {/*Block */}
                                <li className="accordion block">
                                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
                                        Which goods you want to transport?
                                        <div className="icon fa fa-angle-right"></div>
                                    </div>
                                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                        <div className="content">
                                        <div className="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit.</div>
                                        </div>
                                    </div>
                                </li>
                                {/*Block */}
                                <li className="accordion block">
                                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
                                        What is our transport necessity?
                                        <div className="icon fa fa-angle-right"></div>
                                    </div>
                                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                        <div className="content">
                                        <div className="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit.</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* FAQ Column  */}
                    <div className="faq-column col-lg-6">
                        <div className="sec-title mb-30">
                        <h3>Serivce Faq</h3>
                        </div>
                        <div className="inner-column">
                        <ul className="accordion-box ms-0 wow fadeInRight">
                            {/*Block */}
                            <li className="accordion block active-block">
                            <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
                                How to get free support?
                                <div className="icon fa fa-angle-right"></div>
                            </div>
                            <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                <div className="content">
                                <div className="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit.</div>
                                </div>
                            </div>
                            </li>
                            {/*Block */}
                            <li className="accordion block">
                            <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(5)}>
                                Which goods you want to transport?
                                <div className="icon fa fa-angle-right"></div>
                            </div>
                            <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                <div className="content">
                                <div className="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit.</div>
                                </div>
                            </div>
                            </li>
                            {/*Block */}
                            <li className="accordion block">
                            <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(6)}>
                                What is our transport necessity?
                                <div className="icon fa fa-angle-right"></div>
                            </div>
                            <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                                <div className="content">
                                <div className="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit.</div>
                                </div>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FooterHomeOne />
        <BackToTop />
        </>
    );
}

export default Faq;
