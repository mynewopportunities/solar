import React from 'react';
import { Link } from 'react-router-dom';


function Team() {
    return (
        <>
        <section class="team-section bg-light pb-80">
            <div class="auto-container">
              <div class="row"> 
                {/* Team block */}
                <div class="team-block col-xl-3 col-sm-6">
                  <div class="inner-box">
                    <div class="image-box">
                      <figure class="image"><Link to="/team-details"><img src="../../assets/images/resource/team1-1.jpg" alt="Image"/></Link></figure>
                      <div class="info-box">
                        <span class="share-icon fa fa-share-alt"></span>
                        <div class="social-links">
                          <Link to="#"><i class="fab fa-twitter"></i></Link>
                          <Link to="#"><i class="fab fa-instagram"></i></Link>
                          <Link to="#"><i class="fab fa-facebook-f"></i></Link>
                        </div>
                        <h6 class="name"><Link to="/team-details">Alen Donald</Link></h6>
                        <span class="designation">CEO, Soliur</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Team block */}
                <div class="team-block col-xl-3 col-sm-6">
                  <div class="inner-box">
                    <div class="image-box">
                      <figure class="image"><Link to="/team-details"><img src="../../assets/images/resource/team1-2.jpg" alt="Image"/></Link></figure>
                      <div class="info-box">
                        <span class="share-icon fa fa-share-alt"></span>
                        <div class="social-links">
                          <Link to="#"><i class="fab fa-twitter"></i></Link>
                          <Link to="#"><i class="fab fa-instagram"></i></Link>
                          <Link to="#"><i class="fab fa-facebook-f"></i></Link>
                        </div>
                        <h6 class="name"><Link to="/team-details">Alen Donald</Link></h6>
                        <span class="designation">CEO, Soliur</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Team block */}
                <div class="team-block col-xl-3 col-sm-6">
                  <div class="inner-box">
                    <div class="image-box">
                      <figure class="image"><Link to="/team-details"><img src="../../assets/images/resource/team1-3.jpg" alt="Image"/></Link></figure>
                      <div class="info-box">
                        <span class="share-icon fa fa-share-alt"></span>
                        <div class="social-links">
                          <Link to="#"><i class="fab fa-twitter"></i></Link>
                          <Link to="#"><i class="fab fa-instagram"></i></Link>
                          <Link to="#"><i class="fab fa-facebook-f"></i></Link>
                        </div>
                        <h6 class="name"><Link to="/team-details">Alen Donald</Link></h6>
                        <span class="designation">CEO, Soliur</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Team block */}
                <div class="team-block col-xl-3 col-sm-6">
                  <div class="inner-box">
                    <div class="image-box">
                      <figure class="image"><Link to="/team-details"><img src="../../assets/images/resource/team1-4.jpg" alt="Image"/></Link></figure>
                      <div class="info-box">
                        <span class="share-icon fa fa-share-alt"></span>
                        <div class="social-links">
                          <Link to="#"><i class="fab fa-twitter"></i></Link>
                          <Link to="#"><i class="fab fa-instagram"></i></Link>
                          <Link to="#"><i class="fab fa-facebook-f"></i></Link>
                        </div>
                        <h6 class="name"><Link to="/team-details">Alen Donald</Link></h6>
                        <span class="designation">CEO, Soliur</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    );
}

export default Team;
