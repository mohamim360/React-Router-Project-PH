import React from "react";
import { useParams } from 'react-router-dom';
import './Details.css'
import { Link } from "react-router-dom";

const jobData = [
  {
    "id" : 1,
    "logo":"src/assets/Logo/google-1-1 1-1.png",
    "job":"Technical Database Engineer",
    "company":"Google LLC",
    "location":"Dhaka, Bangladesh",
    "salary":"Salary : 100K - 150K",
    "opt1":"Remote",
    "opt2":"Full Time",
    "Des":"Job Description: A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.",
    "res":"Job Responsibility:    Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.",
    "req":"Educational Requirements:   Bachelor degree to complete any reputational university.",
    "exp":"Experiences:  2-3 Years in this field.",
    "Phone":"Phone : 01750-00 00 00",
    "Email":"Email : info@gmail.com"

  },
  {
    "id" : 2,
    "logo":"src/assets/Logo/google-1-1 1-1.png",
    "job":"Technical Database Engineer",
    "company":"Google LLC",
    "location":"Dhaka, Bangladesh",
    "salary":"Salary : 100K - 150K",
    "opt1":"Remote",
    "opt2":"Full Time",
    "Des":"Job Description: A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.",
    "res":"Job Responsibility:    Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.",
    "req":"Educational Requirements:   Bachelor degree to complete any reputational university.",
    "exp":"Experiences:  2-3 Years in this field.",
    "Phone":"Phone : 01750-00 00 00",
    "Email":"Email : info@gmail.com"

  }
]


const Details = () => {

  
  const { id } = useParams();
 console.log(id)
 const job = jobData.find(job => job.id == id);
console.log(job)

const handleClick = () => {
  const existingData = JSON.parse(localStorage.getItem('jobApplications')) || [];
  const jobExists = existingData.find(existingJob => existingJob.id === job.id);
  if (jobExists) {
    alert(' job  already been added!');
  } else {
    const newData = [...existingData, job];
    localStorage.setItem('jobApplications', JSON.stringify(newData));
    alert('Job  added successfully!');
  }
}

 return (
   <div className="detail">
     <div>
       <p>{job.Des}</p>
       <p>{job.res}</p>
       <p>{job.req}</p>
       <p>{job.exp}</p>
     </div>

     <div className="det-box">
       <h5>Job Details</h5>
       <p>Salary : {job.salary}</p>
       <p>job Title : {job.job}</p>
       <h5>Contact Information</h5>
       <p>{job.Phone}</p>
       <p>{job.Email}</p>
        <h5>Contact Information</h5>
        <p></p>
        <p></p>

        <button onClick={handleClick}><Link to="/Job">Apply Now</Link></button>
      </div>
    </div>
  );
};

export default Details;
