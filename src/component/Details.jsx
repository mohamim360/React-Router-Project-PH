import React from "react";
import { useLoaderData } from "react-router-dom";
import './Details.css'
const Details = () => {
  const data = useLoaderData();
  console.log(data[1][0]);
  return (
    <div className="detail">
      <div>
        <p>{data[1][0].Des}</p>
        <p>{data[1][0].res}</p>
        <p>{data[1][0].req}</p>
        <p>{data[1][0].exp}</p>
      </div>

      <div className="det-box">
        <h5>Job Details</h5>
        <p>Salary : {data[1][0].salary}</p>
        <p>job Title : {data[1][0].job}</p>
        <h5>Contact Information</h5>
        <p>Phone : 01750-00 00 00</p>
        <p>Email : info@gmail.com</p>

        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Details;
