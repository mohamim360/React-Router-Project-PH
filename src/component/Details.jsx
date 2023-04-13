import React from "react";
import { useLoaderData } from "react-router-dom";
import './Details.css'
const Details = () => {
 

  const handleApplyNow = () => {
    localStorage.setItem("jobData", JSON.stringify(data));
    
  };

  return (
    <div className="detail">
      <div>
        <p>{data.Des}</p>
        <p>{data.res}</p>
        <p>{data.req}</p>
        <p>{data.exp}</p>
      </div>

      <div className="det-box">
        <h5>Job Details</h5>
        <p>Salary : {data.salary}</p>
        <p>job Title : {data.job}</p>
        <h5>Contact Information</h5>
        <p></p>
        <p></p>

        <button onClick={handleApplyNow}>Apply Now</button>
      </div>
    </div>
  );
};

export default Details;
