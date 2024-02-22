import React from 'react';
import p1 from '../Assest/img-4.jpg'

function About (){
  return (
    <section id="about">
      <div className="about-section mt-0 wrapper">
        <h1 className="text-center">About</h1>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12 mb-lg-0 mb-5">
              <div className="card border-0">
                <img src={p1} alt="" className="img-fluid w-75 m-5" />
              </div>
            </div>
            <div className="col-lg-5 col-md-12 text-sec">
              <h2>I'm Indresh Bharati</h2>
              <p>
                I hail from district Maharajganj UP now I put up in sector 62
                noida I am done my BTech in computer Science and engineering
                from NIET.
              </p>
              <h4 className="text-reset">
                For More details Contact me..
              </h4>
              <div className="footer-social pt-4 text-center fs-4 p-3">
                <a href="https://www.facebook.com/theindresh" className="me-4">
                  <i className="fab fa-facebook-f zoom-effect"></i>
                </a>
                <a href="https://www.instagram.com/theindresh/" className="me-4 text-reset">
                  <i className="fab fa-instagram zoom-effect"></i>
                </a>
                <a href="https://www.linkedin.com/in/indresh-bharati-24775a202" className="me-4">
                  <i className="fab fa-linkedin zoom-effect"></i>
                </a>
                <a href="https://github.com/theindresh" className="me-4 text-reset">
                  <i className="fab fa-github zoom-effect"></i>
                </a>
                <a href="https://www.youtube.com/@theindreshvlogs" className="me-4">
                  <i className="fab fa-youtube zoom-effect"></i>
                </a>
              </div>
              <a href="https://www.linkedin.com/in/indresh-bharati-24775a202" className="btn btn-primary mt-4">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
