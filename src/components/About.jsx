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
                      I came to college as a physics major. In the summer of my Freshman year, I worked at Villanova University as a 
                      Research Assistant in a Physics Lab. Even though it was physics research, my role extensively involved coding in Python.
                      I did a lot of modeling, data analysis, and visualization using python's packages such as APLpy, Matplotlib, Pandas, and
                      Seaborn. I fell in love with being able to solve a complicated problem via coding. Therefore, I decided to switch my major
                      to computer science in the Fall of 2018.</p>

                      <p>
                      Since I continued my journey officially as a CS student a year later than my peers, I had to work twice as hard to catch 
                      up with them. Along with overloading CS courses, I started taking online courses on my own. So far, I have taken courses on 
                      Data Science and Machine learning via Coursera and a course on Web Development via Udemy. I believe expanding knowledge 
                      through self-learning is extremely crucial to being a good developer.
                      </p>

                      <p>
                      In the summer of my Sophomore year, I worked as a machine learning intern at the University of California. That summer,
                      I worked on creating a machine learning model using Recurrent Neural Network to predict a capture-to-control delay in 
                      automated UAV systems such as drones. I learned a full cycle of machine learning modeling, starting from data collection 
                      to cleaning, feature extraction, selection, modeling, and testing.
                      </p>

                      <p>
                      Apart from courses, I love doing my own small projects throughout the year. My most recent venture involves a small startup 
                      that I started with another graduate student here at Villanova. We are building an online platform called VuShares that 
                      allows the Villanova community to buy and sell unused dormitory items as well as other services directly. We were recently 
                      awarded an Innovation fund by Villanova ICE center to support our venture.
                      </p>

                      <p>
                      Apart from coding, I love indulging myself in music. I find myself singing and playing guitar whenever I am stressed out. 
                      I see an interesting crossover between my career path and music. Both challenges me to be more creative, hardworking, 
                      organized, and passionate. 
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
