import './style.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="green-box">
        <div className="links-logo">
          <h1 className="logo">
            The<span>Shop</span>
          </h1>
          <ul className="nav-links">
            <li>
              <Link to="/" className="links">
                Home
              </Link>
            </li>
            <li>Products</li>
            <li>Blog</li>
            <li>
              <Link to="/shop" className="links">
                Shop
              </Link>
            </li>
            <li>Contact</li>
          </ul>
        </div>
        <input placeholder="Search..."></input>
      </div>
      <div className="red-box">Icons</div>
    </div>
  );
};

export default NavBar;
