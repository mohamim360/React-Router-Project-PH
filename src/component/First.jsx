import "./First.css";

import Category from "./Category";
import { useLoaderData } from "react-router-dom";
import Feature from "./Feature";
import { useState } from "react";
useState
const arr = [
  {
    "id": 1,
    "icon":"src/assets/Icons/accounts 1.png" ,
    "title":"Account & Finance",
    "jobs":"300 Jobs Available"
    
  },
  {
    "id": 2,
    "icon":"src/assets/Icons/business 1.png" ,
    "title":"Creative Design",
    "jobs":"100+ Jobs Available"
  },
  {
    "id": 3,
    "icon":"src/assets/Icons/social-media 1.png" ,
    "title":"Marketing & Sales",
    "jobs":"150 Jobs Available"
  },
  {
    "id": 4,
    "icon":"src/assets/Icons/chip 1.png" ,
    "title":"Engineering Job",
    "jobs":"300 Jobs Available"
  }
]
const First = () => {
  const data = useLoaderData();
 
  const [numJobs, setJobs] = useState(4);

  const handleClick = () => {
    setJobs(data.length);
  };
  
  
  return (
    <div>
      <div className="banner">
        <div className="ban">
          <h2>One Step Closer To Your Dream Job</h2>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn">Get Started</button>
        </div>

        <img src="src/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
      </div>

      <div className="category">
        <h2>Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="boxes">
          {arr.map((info) => (
            <Category key={info.id} info={info}></Category>
          ))}
        </div>
      </div>
      <div className="fea">
      <h3>Featured Jobs</h3>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="feature">
        {data.slice(0, numJobs).map((info) => (
          <Feature key={info.id} info={info}></Feature>
        ))}
      </div>
      <div>
      {numJobs < data.length && (
        <button onClick={handleClick}>See All Jobs</button>
      )}
      </div>
      
      </div>
      
    </div>
  );
};

export default First;
