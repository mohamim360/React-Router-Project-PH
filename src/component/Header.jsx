import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <header className="header">
      <nav className="navber">
      <div>
        <h1>JobSite</h1>
      </div>

      <div className="mid">
        <Link to="/">Home</Link>

        <Link to="/Statistics">Statistics</Link>
        <Link to="/Blog">Blog</Link>
      </div>

      <div>
        <button className="btn">Star Applying</button>
      </div>
      </nav>

      
      
    </header>
  );
};

export default Header;
