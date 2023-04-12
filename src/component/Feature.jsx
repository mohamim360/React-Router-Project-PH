import React from 'react';
import './Feature.css'
const Feature = ({info}) => {

  const {logo, job,company,location,salary,opt1,opt2} = info;
  return (
    <div className='box'>
      <img src={logo} alt="" />
      <h4>{job}</h4>
      <p>{company}</p>
      <div>
        <button>{opt1}</button>
        <button>{opt2}</button>
      </div>
      <div>
        <p>{location}</p>
        <p>{salary}</p>
      </div>
      <button>View Details</button>
    </div>
  );
};

export default Feature;