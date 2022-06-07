import './style.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="green-box">
        <div className="links"></div>
        <input placeholder="Search..."></input>
      </div>
      <div className="red-box">Icons</div>
    </div>
  );
};

{
  /* <Link to="/"> go to homepage</Link> */
}

export default NavBar;
