import React from 'react';

const Job = () => {

  const jobData = JSON.parse(localStorage.getItem("jobData")); 
  
  return (
    <div>
       <h2>Job Details:</h2>
      <ul>
        <li>Job Title: {jobData.job}</li>
        <li>Description: {jobData.Des}</li>
        <li>Responsibilities: {jobData.res}</li>
        <li>Requirements: {jobData.req}</li>
        <li>Experience: {jobData.exp}</li>
        <li>Salary: {jobData.salary}</li>
        <li>Contact Information:</li>
        <ul>
          <li>Phone: 01750-00 00 00</li>
          <li>Email: info@gmail.com</li>
        </ul>
      </ul>
    </div>
  );
};

export default Job;