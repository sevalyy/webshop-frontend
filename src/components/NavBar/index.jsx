import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="green-box">
        <div className="links-logo">
          <h1 className="logo">
            The<span className="span">Shop</span>
          </h1>
          <ul className="nav-list">
            <li>
              <NavLink
                to="/"
                className="links"
                style={({ isActive }) =>
                  isActive ? { color: "white" } : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>Products</li>
            <li>Blog</li>
            <li>
              <NavLink
                to="/shop"
                className="links"
                style={({ isActive }) =>
                  isActive ? { color: "white" } : undefined
                }
              >
                Shop
              </NavLink>
            </li>
            <li>Contact</li>
          </ul>
        </div>
        <input placeholder="Search..."></input>
      </div>
      <div className="red-box">
        <ul className="nav-list">
          <li>
            <NavLink
              to="/login"
              className="links"
              style={({ isActive }) =>
                isActive ? { color: "white" } : undefined
              }
            >
              <FaUser />
            </NavLink>
          </li>
          <li>
            <FaShoppingBag />
          </li>
          <li>
            <FaHeart />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
