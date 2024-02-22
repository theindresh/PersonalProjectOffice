import React, { useState, useEffect } from 'react';
import edu from './edu.json';

const Education = () => {
  const [educationData, setMyData] = useState([]);

  useEffect(() => {
    setMyData(edu);
  }, []);

  return (
    <section id="education">
      <div className="container wrapper">
        <h1 className="text-center">Education</h1>
        <div className="row g-5 justify-content-center">
          {educationData.map((item) => (
            <div key={item.id} className="card mb-3 me-2" style={{ maxWidth: '500px' }}>
              <div className="row g-0">
                <h3 className="card-title text-center">{item.degree}</h3>
                <div className="col-md-4">
                  <img src={item.image} alt="" className="img-thumbnail img-res zoom-effect" width="150" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-subtitle"><span className="education-title">College name:-</span> {item.collegeName}</p>
                    <p className="card-subtitle"><span className="education-title">Year Of Passing:-</span> {item.yearOfPassing}</p>
                    <p className="card-subtitle"><span className="education-title">Course:-</span> {item.course}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
