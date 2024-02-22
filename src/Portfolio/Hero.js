import React from 'react';
import '../Pages/Pages/home.css'

const Home = () => {
  return (
    <section id="home">
      <div className="container-fluid px-0 top-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <h1 className="name-effect">Indresh Bharati</h1>
              <h3>Computer Science And Engineering</h3>
              <p>
                I am looking for an opportunity to use my skills and abilities
                to make a positive impact on an organization. I am a team
                player, I am committed to continuous learning and willing to
                take on new challenges.
              </p>
              <div className="mt-4">
                <a href="./images/INDRESH BHARATI.pdf" download className="btn btn-primary mt-4">My Resume <i className="fas fa-download"></i></a>
                <a href="https://www.linkedin.com/in/indresh-bharati-24775a202" className="btn btn-primary mt-4">Contact Me. <i className="fas fa-rocket"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
