import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h2>Error: Page not found</h2>
      <p>The requested page does not exist.</p>
      <Link to="/">Return to Home Page</Link>
    </div>
  );
};

export default Error;
