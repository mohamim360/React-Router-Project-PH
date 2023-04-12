import React from 'react';
import './First.css'
import Category from './Category';
import { useLoaderData } from 'react-router-dom';
const First = () => {
  const data = useLoaderData();
  console.log(data)
  return (
    <div>
    <banner>
        <div className='ban'>
        <h2>
        One Step Closer To Your Dream Job
        </h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
        <button className="btn">Get Started</button>
        </div>
       
        <img src="src/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
      </banner>
    
    <div className='category'>
    <h2>Job Category List</h2>
      <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className='boxes'>
      {
          data.map(info => <Category
          key = {info.id}
          info = {info}
            ></Category>
          )
      }
      </div>
      
    </div>
      
    </div>
  );
};

export default First;