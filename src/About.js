import React from 'react'

const About = () => {
  return (
    <section className="gummy-back">
      <div className="about gummy-front">
        <div className="container">
          <h2 className="b text-center teal-shadow">About Me</h2>
          <hr />
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1 col-sm-offset-3 col-sm-6">
              <p className="teal-shadow">
                Hi, I'm a web developer eager to always expand my knowledge and
                experience, while living my passion.
              </p>
            </div>
            <div className="col-xs-10 col-xs-offset-1 col-sm-offset-3 col-sm-6">
              <p className="teal-shadow">
                I love to build stuff on the web, with solid
                experiences building multiple products for my companies where I
                work, or as a freelancer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
