import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I am an undergraduate computer science student at Villanova University. Currently, I am a Junior and am actively looking
                        for an internship Opportunity. 
                      </p>
                      <p>
                        I love problem solving. The area of computer science that I have spent most time on in 
                        machine learning and data science. Currently, I am immersing myself into full stack development.
                        I am passionate about learning new skills and technologies. Therefore, I am open to pushing myself
                        out of my comfort zone and trying out new things. I like to expand the horizon of my knowledge
                        by taking courses on online platforms such as Udemy and Coursera.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my skills</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Data Science </h3>
                    <p>
                      I have worked for over a year as a research assistant in Physics department at Villanova University. During my research, I
                      extensively used Python's packages such as Matplotlib, Pandas, Seaborn, 
                      AplPy, numpy, and sckit-learn to analysize and visualize. In the summer of 2019, I worked
                      as a machine learning intern at University of California Irvine where I developed a machine learning model
                      to predict capture-to-control delay in automated UAV systems such as drones. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>
                      I have a good grasp of the fundamentals of Data Structures and Algorithms. I have taken Data Structurs and Algorithms
                      series courses at Villanova University. This upcoming semester, I am also taking a course of Design and Analysis of 
                      algorithm. At Villanova University, I also work as a peer tutor. As a CS tutor, I help Freshman and Sophomores with 
                      Algorithms and Data Structures class assignments and projects.  
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Web Development</h3>
                    <p>
                      Web Development is relatively new skill that I have gained. I have made few basic web applications such as robo
                      friends and smart brain. The link to the applications are given in the project section below. Most recently, I am 
                      working on creating an online platform called VuShares, which is also my startup. This platform will allow 
                      Villanova community to buy and sell unwanted items, and also exchange services directly within the community. 
                      I am using reach for frontend and node for backend. HTML is used for content and CSS/Bootstrap is used for styling.  
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
