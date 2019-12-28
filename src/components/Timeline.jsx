import React, { Component } from "react";

class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Bachelors of Science in Computer Science at Villanova University{" "}
                          <span>August 2017-May 2021</span>
                        </h2>
                        <p>
                          Currently, I have a 4.0 GPA across all courses. Some of the courses I have taken are Machine Learning, Deep Learning, 
                          Platform Based Computing, Algorithms and Data Structures, Database Systems.
                          At Villanova, I am a part of ACM student chapter and programming team. 
                          I participate in hackathons happening on campus. The most recent hackathon I participated in was a Blockchain hackathon
                          organized by R3 and Villanova School of Engineering. I am also starting my online startup business called VuShares. 
                          This venture is being funded by Villanova ICE Innovation fund. 
                          Additionally, I am also an Honors Ambassador, Resident Assistant, and president of Villanova Table Tennis Club. 
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Higher Secondary Education at SOS Hermann Gmeiner School Bharatpur, Nepal
                          <span>2013-2015</span>
                        </h2>
                        <p>
                          My focus during my high school was on science and mathematics. I took college level physics, chemistry and 
                          math courses. My unweighted GPA was 4.0. While at high school, I was part of Chitwan Leo club and Global Peace Young leaders.
                          Through this club, I organized various community service events such as Busking and shoe polishing campaigns
                          to help flood victims. 
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none" />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Timeline;
